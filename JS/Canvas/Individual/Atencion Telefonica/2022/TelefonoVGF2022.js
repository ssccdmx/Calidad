var data1 = {
  labels: ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],
  datasets: [
    {
      label: "Final",
      fillColor: "rgba(151,187,205,0.5)",
      strokeColor: "rgba(151,187,205,0.8)",
      highlightFill: "rgba(151,187,205,0.75)",
      highlightStroke: "rgba(151,187,205,1)",

      data: [8.7,8.6,8.5,8.8,8.4,8.9,8.5,8,8.3,8.3,8.8,8.5]



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

      data: [392,365,336,353,213,315,383,245,177,353,417,325]



    }
  ]
};

var ctx = document.getElementById("Productividad").getContext("2d");
var myBarChart = new Chart(ctx).Bar(data2);
