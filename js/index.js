// -------------------- index --------------------//
//chart-weekly
var ctx = document.querySelector('#chart').getContext('2d');
var chart = new Chart(ctx, {
    type: 'line',
    responsive: true,
    bezierCurve : false,
    pointDot: false,
    data: {
        labels: ["6 JUN", "7 JUN", "8 JUN", "9 JUN", "10 JUN", "11 JUN", "12 JUN", "13 JUN"],
        datasets: [{
            label: "TOTAL COST",
            fill: false,
            lineTension: 0, //不使用貝茲曲線
            backgroundColor: "rgba(0, 0, 0, 0)",
            borderColor: "red",
            data: [800, 800, 2800, 3000, 2300, 500, 800, 2000]
        },{
            label: "NET INCOME",
            fill: false,
            lineTension: 0,
            backgroundColor: "rgba(0, 0, 0, 0)",
            borderColor: "blue",
            data: [6200, 5300, 2000, 4000, 3800, 5200, 6800, 5000]
        },{
            label: "TOTAL REVENUE",
            fill: false,
            lineTension: 0,
            backgroundColor: "rgba(0, 0, 0, 0)",
            borderColor: "#7ED321",
            data: [7200, 7000, 5200, 7200, 5800, 6200, 7500, 7300]
        }
        ]
    }
});

