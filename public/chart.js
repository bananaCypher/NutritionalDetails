var BarChart = function(){
    var container = document.getElementById('barcode-nutrients');
    var chart = new Highcharts.Chart({
        chart: {
            type: 'bar',
            renderTo: container
        },
        title: {
            text: "Nutrients",
        },
        legend: {
            enabled: true,
            title: {
                text: 'Per 100g'
            }
        },
        yAxis: [{
            labels: {
                format: '{value}g',
            },
            title: {
                text: 'Grams',
            },
        }, {
            gridLineWidth: 0,
            title: {
                text: 'Milligrams',
            },
            labels: {
                format: '{value}mg',
            },
            max: 2,
            opposite: true
        }],
        dataLabels: {
            enabled: true,
            align: 'right',
            color: '#FFFFFF',
            x: -10
        },
        series: [{
            name: 'Grams',
            yAxis: 0,
            data: [
            { name: 'Carbohydrates', y:64.4},
            { name: 'Sugars', y:59.4},
            { name: 'Fat', y:28.7},
            { name: 'Saturated Fat', y:17.5},
            { name: 'Proteins', y:5.4},
            ],
            showInLegend: true,
        },
        {
            name: 'Milligrams',
            yAxis: 1,
            data: [
            { name: 'Salt', y:0.36322 },
            { name: 'Sodium', y:0.143 },
            ],
            showInLegend: true,
        }
        ]
    });
    console.log(chart);
}
