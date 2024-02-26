var data1 = {
  labels: ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],
  datasets: [
    {
      label: "Final",
      fillColor: "rgba(151,187,205,0.5)",
      strokeColor: "rgba(151,187,205,0.8)",
      highlightFill: "rgba(151,187,205,0.75)",
      highlightStroke: "rgba(151,187,205,1)",

      data: [8.3,6.7,7.9,6.5,8.1,8.2,7.9,8.8,8.2,7.9,8.3,8.2]



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

      data: [39,375,415,434,243,416,417,45,38,299,365,4]



    }
  ]
};

var ctx = document.getElementById("Productividad").getContext("2d");
var myBarChart = new Chart(ctx).Bar(data2);
