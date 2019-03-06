import csv
import json
import copy

INPUT_CSV = "buses(2018-4-10).csv"
OUTPUT_JSON = "buses(2018-4-10).json"


def timeList(dic, week, fro, to):
    left = dic[week][fro][to]
    right = dic[week][to][fro]
    time = []

    i = 0
    j = 0
    while i < len(left) or j < len(right):
        if i >= len(left):
            while j < len(right):
                time.append({
                    "left": "",
                    "right": right[j]
                })
                j = j + 1
            break
        elif j >= len(right):
            while i < len(left):
                time.append({
                    "left": left[i],
                    "right": "",
                })
                i = i + 1
            break

        row = {
            "left": "",
            "right": ""
        }
        if left[i][0:5] == right[j][0:5]:
            row["left"] = left[i]
            row["right"] = right[j]
            i = i + 1
            j = j + 1
        elif left[i][0:5] < right[j][0:5]:
            row["left"] = left[i]
            i = i + 1
        else:
            row["right"] = right[j]
            j = j + 1
        time.append(row)

    return time


def tojson(filename):
    # load csv file, parse and preprocess data
    dic = {
        "weekday": {
            "handan": {
                "jiangwan": [],
                "fenglin": [],
                "zhangjiang": []
            },
            "jiangwan": {
                "handan": [],
            },
            "fenglin": {
                "handan": [],
                "zhangjiang": []
            },
            "zhangjiang": {
                "handan": [],
                "fenglin": [],
                "stu": []
            },
            "stu": {
                "zhangjiang": []
            }
        },
        "weekend": {
            "handan": {
                "jiangwan": [],
                "fenglin": [],
                "zhangjiang": []
            },
            "jiangwan": {
                "handan": [],
            },
            "fenglin": {
                "handan": []
            },
            "zhangjiang": {
                "handan": [],
                "stu": []
            },
            "stu": {
                "zhangjiang": []
            }
        }
    }

    data = copy.deepcopy(dic)

    # load csv
    with open(filename, newline='') as file:
        # parse data
        reader = csv.DictReader(file)
        for row in reader:
            dic[row["week"]][row["from"]][row["to"]].append("%s (%s)" % (row["time"], row["amount"]))

    # transform
    for week in data:
        for fro in data[week]:
            for to in data[week][fro]:
                data[week][fro][to] = timeList(dic, week, fro, to)

    # return data list
    return data


if __name__ == "__main__":
    dic = tojson(INPUT_CSV)

    with open(OUTPUT_JSON, "w") as file:
        json.dump(dic, file, indent=4)
