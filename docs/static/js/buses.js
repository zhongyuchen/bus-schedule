window.onload = function() {
    readcsv('data/buses(2018-4-10).csv');
};

function readcsv(filename) {
    d3.csv(filename).then(function(csvdata) {
        // read csv file

        // array
        var dataset = [];
        var length = csvdata.length;

        // store x and y
        for (let i = 0; i < length; ) {
            let row;
            if (csvdata[i]["from"] === "handan" ||
                csvdata[i]["to"] === "zhangjiang") {
                row = {
                    "id": csvdata[i]["from"] + '-' + csvdata[i]["to"],
                    "left": csvdata[i]["time"] + " (" + csvdata[i]["amount"] + ")",
                    "right": ""
                };
            }
            else {
                row = {
                    "id": csvdata[i]["to"] + '-' + csvdata[i]["from"],
                    "left": "",
                    "right": csvdata[i]["time"] + " (" + csvdata[i]["amount"] + ")"
                };
            }

            row["id"] += "-" + csvdata[i]["week"];

            row["time"] = time_to_number(csvdata[i]["time"]);

            if (i + 1 < length &&
                csvdata[i]["time"] === csvdata[i + 1]["time"] &&
                csvdata[i]["from"] === csvdata[i + 1]["to"] &&
                csvdata[i]["to"] === csvdata[i + 1]["from"]) {
                if (row["left"] === "") {
                    row["left"] = csvdata[i + 1]["time"] + " (" + csvdata[i + 1]["amount"] + ")";
                }
                else {
                    row["right"] = csvdata[i + 1]["time"] + " (" + csvdata[i + 1]["amount"] + ")";
                }
                i += 2;
            }
            else {
                i++;
            }

            dataset.push(row);
        }

        // draw
        addrows(dataset);
        setInterval(update, 1000);
    });
}

function addrows(dataset) {
    // add content into the table
    let length = dataset.length;
    for (let i = 0; i < length; i++) {
        let tr = d3.select("#" + dataset[i]["id"]).append("tr");
            // .attr("class", dataset["class"]);

        tr.append("td").append("font").datum(dataset[i]["time"]).text(dataset[i]["left"]);
        tr.append("td").append("font").datum(dataset[i]["time"]).text(dataset[i]["right"]);
    }
}

function update() {
    // update the table

    // get current time
    let date = new Date();
    let hour = (date.getUTCHours() + 8) % 24;
    let minute = date.getUTCMinutes();
    let time = hour * 100 + minute;

    // get all the table rows
    let fonts = d3.selectAll("font");

    // buses that have left
    fonts.filter(function(d) {
            return d <= time;
        })
        .attr("class", "passed-bus");

    // buses that are coming
    fonts.filter(function(d) {
        return d > time;
        })
        .attr("class", "upcoming-bus");
}

function time_to_number(time) {
    // "hh:mm" -> hhmm (int)

    return parseInt(time[0]) * 1000 + parseInt(time[1]) * 100 + parseInt(time[3]) * 10 + parseInt(time[4]);
}