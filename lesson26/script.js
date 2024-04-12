function generateRandomColor(alpha) {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + alpha + ')';
}

var backgroundColors = Array.from({ length: 6 }, () => generateRandomColor(0.2));
var borderColors = Array.from({ length: 6 }, () => generateRandomColor(1));

function barChartMethod() {
  this.barChart = new Chart(document.getElementById('barCanvas').getContext('2d'), {
    type: 'bar',
    data: {
      labels: ['BJP', 'INC', 'AAP', 'CPI', 'CPI-M', 'NCP'],
      datasets: [{
        label: '# of Votes',
        data: [150, 50, 30, 15, 20, 34],
        backgroundColor: backgroundColors,
        borderColor: borderColors,
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });
}

function doughnutChartMethod() {
  this.doughnutChart = new Chart(document.getElementById('doughnutCanvas').getContext('2d'), {
    type: 'doughnut',
    data: {
      labels: ['BJP', 'Congress', 'AAP', 'CPM', 'SP'],
      datasets: [{
        label: '# of Votes',
        data: [50, 29, 15, 10, 7],
        backgroundColor: backgroundColors,
        borderColor: borderColors,
        borderWidth: 1,

        hoverBackgroundColor: [
          '#FFCE56',
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#FF6384'
        ]
      }]
    }
  });
}

document.addEventListener('DOMContentLoaded', function () {
  barChartMethod();
  doughnutChartMethod();
});