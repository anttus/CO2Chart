function createGraph(ctx, dataArray, yearArray, label) {
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

