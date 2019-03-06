import csv
import json


INPUT_CSV = "input.csv"
OUTPUT_JSON = "output.json"


def tojson(filename):
    # load csv file, parse and preprocess data
    dic = {
        "工作日": {
            "邯郸": {
                "江湾": [],
                "枫林": [],
                "张江": []
            },
            "江湾": {},
            "枫林": {
                "张江": []
            },
            "张江": {},
            "上科大": {
                "张江": []
            }
        },
        "周末": {
            "邯郸": {
                "江湾": [],
                "枫林": [],
                "张江": []
            },
            "江湾": {},
            "枫林": {},
            "张江": {},
            "上科大": {
                "张江": []
            }
        }
    }

    pyName = {
        "handan": "邯郸",
        "jiangwan": "江湾",
        "fenglin": "枫林",
        "zhangjiang": "张江",
        "stu": "上科大"
    }

    # load csv
    with open(filename, newline='') as file:
        # parse data
        reader = csv.DictReader(file)
        for row in reader:


    # return data list
    return dic


if __name__ == "__main__":
    dic = tojson(INPUT_CSV)

    with open(OUTPUT_JSON, "w") as file:
        json.dump(dic, file, indent=4)
