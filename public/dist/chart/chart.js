
function createGraph(ctx, results, label) {
    let yearArray = [];
    let dataArray = [];
    parseResults(results, yearArray, dataArray);
    return new Chart(ctx, {
        type: 'line',
        data: {
            labels: yearArray,
            datasets: [{
                label: label,
                data: dataArray,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
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

