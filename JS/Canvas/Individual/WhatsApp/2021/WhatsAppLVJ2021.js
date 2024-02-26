var data1 = {
  labels: ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],
  datasets: [
    {
      label: "Final",
      fillColor: "rgba(151,187,205,0.5)",
      strokeColor: "rgba(151,187,205,0.8)",
      highlightFill: "rgba(151,187,205,0.75)",
      highlightStroke: "rgba(151,187,205,1)",
      data: [0,9.1,8.3,6.0,7.2,8.9,8.4,6.6,0,0,0,0]

    }
  ]
};

var ctx = document.getElementById("Promedio").getContext("2d");
var myBarChart = new Chart(ctx).Bar(data1);

var data2 = {
  labels: ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],
  datasets: [
    {
      label: "Promedio",
      fillColor: "rgba(220,220,220,0.5)",
      strokeColor: "rgba(220,220,220,0.8)",
      highlightFill: "rgba(220,220,220,0.75)",
      highlightStroke: "rgba(220,220,220,1)",
      data: [0,5,7,1,4,13,5,6,0,0,0,0]


    }
  ]
};

var ctx = document.getElementById("Productividad").getContext("2d");
var myBarChart = new Chart(ctx).Bar(data2);
