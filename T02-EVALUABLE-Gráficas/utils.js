
  const ctx1 = document.getElementById('myChart');

  var chart = new Chart(ctx1, {
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
      },
      plugins: {
        title: {
            display: true,
            text: 'Gráfico lineal',
            color:'green'
        },
        subtitle: {
          display: true,
          text: 'Grafico Lineal para ver las ganancias en 2022'
        }
      }
    }
  });

const ctx2 = document.getElementById("linealYbarra");

var mixedChart = new Chart(ctx2, {
  data: {
      datasets: [{
          type: 'bar',
          label: 'Numero de Inscripción 2022',
          data: [1500, 1100,1587,1234,1500, 1100,1587,1234,1500, 1100,1587,1234 ]
      }, {
          type: 'line',
          label: 'Media Inscripción 2022',
          data: [1200, 1000, 1505, 1000,1320,992,1223,852,1320,742,1256,954],
      }],
      labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    },
    plugins: {
      title: {
          display: true,
          text: 'Grafico MultiLinea',
          color: 'red'
      },
      subtitle: {
        display: true,
        text: 'Grafico para ver los inscritos y su media en diferentes meses'
      }
    }
  }
});

const ctx3 = document.getElementById("rosco");

var rosco = new Chart(ctx3,{
  type:'doughnut',
  data:{
    labels: [
      '5K',
      '10K',
      '21K',
      '42K'
    ],
    datasets: [{
      label: ['Inscrito en la categoría'],
      data: [542, 1500, 950,900],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(23, 162, 235)',
        'rgb(200, 205, 86)',
        'rgb(170, 103, 103)'
      ],
      hoverOffset: 4,
    }]
  },
  options: {
    plugins: {
        title: {
            display: true,
            text: 'Grafico de Torta/Rosco',
            color:'blue'
        },
        subtitle: {
          display: true,
          text: 'Grafico para ver los inscritos en diferentes categorias'
      }
    }
  }
})

const ctx4 = document.getElementById("horizontal");
const label = [     'Maraton Madrid',
              'Media Maraton Barcelona',
              'Carrera Nocturna Sevilla',
              'Maraton de Badajoz',
              'Ibiza Maraton',
              'Marató d Empúries',
              'Lanzarote Marathon'
            ]
const number = [11256, 15236, 7421, 1586, 3652, 5541, 6521]
const allData = [];

var horizontal = new Chart(ctx4,{
  type:'bar', 
  data:{
    labels: [
      'Maraton Madrid',
      'Media Maraton Barcelona',
      'Carrera Nocturna Sevilla',
      'Maraton de Badajoz',
      'Ibiza Maraton',
      'Marató d Empúries',
      'Lanzarote Marathon'
    ],
    datasets: [{
      axis: 'y',
      label: 'Inscritos Runners Eventos',
      data: [11256, 15236, 7421, 1586, 3652, 5541, 6521],
      fill: false,
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 205, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(201, 203, 207, 0.2)'
      ],
      borderColor: [
        'rgb(255, 99, 132)',
        'rgb(255, 159, 64)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)',
        'rgb(54, 162, 235)',
        'rgb(153, 102, 255)',
        'rgb(201, 203, 207)'
      ],
      borderWidth: 2,
    }],
  },
  options: {
    indexAxis: 'y',
    plugins: {
      title: {
          display: true,
          text: 'Grafico Linea Horizontal'
      },
      subtitle: {
        display: true,
        text: 'Grafico para ver el top de inscritos en diferentes eventos'
      }
    }
  }
})
