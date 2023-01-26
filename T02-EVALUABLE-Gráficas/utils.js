
  const ctx = document.getElementById('myChart');

  var chart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
      datasets: [{
        label: 'Ganancias Mensuales €',
        data: [1500, 2000, 1587, 4256, 14578, 123,2563,1254,4781,1012,5698,1597],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

const ctx2 = document.getElementById("linealYbarra");

var mixedChart = new Chart(ctx2, {
  data: {
      datasets: [{
          type: 'bar',
          label: 'Numero de Inscripción',
          data: [1500, 1100,1587,1234,1500, 1100,1587,1234,1500, 1100,1587,1234 ]
      }, {
          type: 'line',
          label: 'Media Inscripción',
          data: [50, 50, 50, 50],
      }],
      labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});
