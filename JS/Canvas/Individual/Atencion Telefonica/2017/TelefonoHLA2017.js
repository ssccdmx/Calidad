var data1 = {
  labels: ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],
  datasets: [
    {
      label: "Final",
      fillColor: "rgba(151,187,205,0.5)",
      strokeColor: "rgba(151,187,205,0.8)",
      highlightFill: "rgba(151,187,205,0.75)",
      highlightStroke: "rgba(151,187,205,1)",

      data: [0,0,5.3,6.4,6.9,7.4,7.3,8.2,7.3,7.5,8.2,7.5]



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

      data: [0,0,141,246,329,197,32,252,152,36,268,251]



    }
  ]
};

var ctx = document.getElementById("Productividad").getContext("2d");
var myBarChart = new Chart(ctx).Bar(data2);
