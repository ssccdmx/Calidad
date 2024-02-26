var data1 = {
    labels: [
      "Seleccione año"
    ],
    datasets: [
      {
        label: "Final",
        fillColor: "rgba(151,187,205,0.5)",
        strokeColor: "rgba(151,187,205,0.8)",
        highlightFill: "rgba(151,187,205,0.75)",
        highlightStroke: "rgba(151,187,205,1)",
        data: []
      }
    ]
  };
  
  var ctx = document.getElementById("Promedio").getContext("2d");
  var myBarChart = new Chart(ctx).Bar(data1);
  
  var data2 = {
    labels: [
      "Seleccione año"
    ],
    datasets: [
      {
        label: "Promedio",
        fillColor: "rgba(220,220,220,0.5)",
        strokeColor: "rgba(220,220,220,0.8)",
        highlightFill: "rgba(220,220,220,0.75)",
        highlightStroke: "rgba(220,220,220,1)",
        data: []
      }
    ]
  };
  
  var ctx = document.getElementById("Productividad").getContext("2d");
  var myBarChart = new Chart(ctx).Bar(data2);
  