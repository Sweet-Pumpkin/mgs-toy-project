const chart1 = document.getElementById('myChart1').getContext('2d');

const myChart = new Chart(chart1, {
    type: 'bar',
    data: {
        labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'],
        datasets: [{
            data: [3500, 8000, 13000, 5200, 20000, 14000, 5000, 8000, 10000, 12000, 4000, 7000, 9000, 20000, 7000, 6000, 12000, 5000, 30000, 4000, 32000, 12000, 4000, 24000, 9000, 4000, 7800, 5000, 12000, 10000],
            backgroundColor: [
              'rgba(75, 192, 192, 1)',
            ],
        }]
    },
    options: {
      plugins: {
        legend: {
          display: false
        }
      },
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

const chart2 = document.getElementById('myChart2').getContext('2d');

const myChart2 = new Chart(chart2, {
    type: 'doughnut',
    data: {
      labels: [
        'Red',
        'Blue',
        'Yellow'
      ],
      datasets: [{
        label: 'My First Dataset',
        data: [300, 50, 100],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)'
        ],
        hoverOffset: 4
      }]
    },
    options: {
      plugins: {
        legend: {
          display: false
        }
      },
    }
});