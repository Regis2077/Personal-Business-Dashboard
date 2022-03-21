// Construção dos gráficos

const config = {
    type: 'line',
    label: ['nome'],
    data: {
        labels: ["07/10/21", "08/10/21", "09/10/21", "10/10/21", "11/10/21", "12/10/21"],
        datasets: [
            {borderColor: "rgba(66, 93, 199, 1) ",
             data: [0, 25, 50, 120, 75, 155]
            },
            {borderColor: "rgba(240, 52, 96, 1)",
             data: [0, 60, 120, 180, 100, 50]
            },
            {borderColor: "rgba(255, 190, 0, 1)",
             data: [0, 32, 20, 69, 37, 1]
            },
            {borderColor: "rgba(46, 176, 66, 1)",
             data: [0, 87, 20, 49, 56, 198]
            }
        ]},
    options: {
      responsive: true,
      maintainAspectRatio: false,
      elements: {
        point:{
            radius: 0,
        }
      },
      plugins: {
          legend: {
              display: false,
          }
      },
      scales: {
          x: {
              grid: {
                  display: false
              },
              ticks: {
                  font: {
                      family: 'inter', //  font f
                      size: 12,
                  },
              },
          },
          y: {
            beginAtZero: true,
              ticks: {
                min: 0,
                stepSize: 50,
              },
          },
      }
  }
}; 
  
const ctx = document.getElementById('myChart');
const myChart = new Chart(ctx, config)
 

const configGraph2 = {
    type: 'line',
    label: ['nome'],
    data: {
        labels: ["07/10/21", "08/10/21", "09/10/21", "10/10/21", "11/10/21", "12/10/21"],
        datasets: [
            {borderColor: "rgba(66, 93, 199, 1) ",
             data: [0, 25, 50, 120, 75, 155]
            }
        ]},
    options: {
      responsive: true,
      maintainAspectRatio: false,
      elements: {
        point:{
            radius: 0,
        }
      },
      plugins: {
          legend: {
              display: false,
          }
      },
      scales: {
          x: {
              grid: {
                  display: false
              },
              ticks: {
                  font: {
                      family: 'inter', //  font f
                      size: 12,
                  },
              },
          },
          y: {
            beginAtZero: true,
              ticks: {
                min: 0,
                stepSize: 50,
              },
          },
      }
  }
}; 
  
const ctx2 = document.getElementById('myChart2');
const myChart2 = new Chart(ctx2, configGraph2)



const config_graph3 = {
    type: 'line',
    label: ['nome'],
    data: {
        labels: ["07/10/21", "08/10/21", "09/10/21", "10/10/21", "11/10/21", "12/10/21"],
        datasets: [
            {borderColor: "rgba(66, 93, 199, 1) ",
            data: [0, 25, 50, 120, 75, 155]
           },
           {borderColor: "rgba(240, 52, 96, 1)",
            data: [0, 60, 120, 180, 100, 50]
           },
           {borderColor: "rgba(255, 190, 0, 1)",
            data: [0, 32, 20, 69, 37, 1]
           },
           {borderColor: "rgba(46, 176, 66, 1)",
            data: [0, 87, 20, 49, 56, 198]
           }
        ]},
    options: {
      responsive: true,
      maintainAspectRatio: false,
      elements: {
        point:{
            radius: 0,
        }
      },
      plugins: {
          legend: {
              display: false,
          }
      },
      scales: {
          x: {
              grid: {
                  display: false
              },
              ticks: {
                  font: {
                      family: 'inter', //  font f
                      size: 12,
                  },
              },
          },
          y: {
            beginAtZero: true,
              ticks: {
                min: 0,
                stepSize: 50,
              },
          },
      }
  }
}; 
  
const ctx3 = document.getElementById('myChart3');
const myChart3 = new Chart(ctx3, config_graph3)


