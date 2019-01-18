let colors = ['rgba(128,128,128', 'rgba(0,0,0', 'rgba(255,0,0', 'rgba(128,0,0', 'rgba(255,255,0', 'rgba(128,128,0', 'rgba(0,255,0', 'rgba(0,128,0', 'rgba(0,255,255', 'rgba(0,128,128', 'rgba(0,0,255', 'rgba(0,0,128', 'rgba(255,0,255', 'rgba(128,0,128'];
let transparencyBorder = ', 1.0)';

function createGraph(ctx, results, label, type, color) {
    let yearArray = [];
    let dataArray = [];
    if (color) var borderColor = color + transparencyBorder;
    parseResults(results, yearArray, dataArray);
    return new Chart(ctx, {
        type: type,
        data: {
            labels: yearArray,
            datasets: [{
                label: "Emissions",
                data: dataArray,
                backgroundColor: color,
                borderColor: borderColor,
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    },
                    scaleLabel: {
                        display: true,
                        labelString: label,
                        fontColor: "black",
                    }
                }],
                xAxes: [{
                    gridLines: {
                        display: false,
                        color: "black"
                    },
                    scaleLabel: {
                        display: true,
                        labelString: "Year",
                        fontColor: "black"
                    }
                }],
            }
        }
    });
}

function parseResults(results, yearArray, dataArray) {
    results.reverse().forEach(e => {
        yearArray.push(e['date']);
        dataArray.push(e['value']);
    });
}

