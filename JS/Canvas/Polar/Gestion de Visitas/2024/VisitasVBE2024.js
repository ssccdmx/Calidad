// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end



var chart = am4core.create("chartdiv", am4charts.RadarChart);
chart.logo.disabled = true;

chart.data = [
 
{
    name: '1. Petición',
    value1: 63,
    value2: 37
  },
{
   name: '2. Acciones',
    value1: 95,
    value2: 5
  },
{
   name: '3. Ortografía y redacción',
    value1: 98,
    value2: 2
  },
{
   name: '4. Llenado Plataforma',
    value1: 86,
    value2: 14
  },
{
   name: 'Productividad',
    value1: 27,
    value2: 73
   }
];



chart.padding(50, 50, 50, 50);
chart.radarContainer.dy = 50;
chart.innerRadius = am4core.percent(10);
chart.radius = am4core.percent(100);
chart.zoomOutButton.padding(20,20,20,20);
chart.zoomOutButton.margin(20,20,20,20);
chart.zoomOutButton.background.cornerRadius(100,100,100,100);
chart.zoomOutButton.valign = "bottom";

var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "name";
categoryAxis.renderer.labels.template.location = 100;
categoryAxis.mouseEnabled = true;

var categoryAxisRenderer = categoryAxis.renderer;
categoryAxisRenderer.cellStartLocation = 0;
categoryAxisRenderer.tooltipLocation = 0.5;
categoryAxisRenderer.grid.template.disabled = true;
categoryAxisRenderer.ticks.template.disabled = true;
categoryAxisRenderer.axisFills.template.fill = am4core.color("#e8e8e8");
categoryAxisRenderer.axisFills.template.fillOpacity = 0.2;
categoryAxisRenderer.axisFills.template.location = -0.5;
categoryAxisRenderer.line.disabled = true;
categoryAxisRenderer.tooltip.disabled = true;

categoryAxis.renderer.labels.template.disabled = true;
categoryAxis.adapter.add("maxZoomFactor", function(maxZoomFactor, target) {

})

var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
var valueAxisRenderer = valueAxis.renderer;

valueAxisRenderer.line.disabled = true;
valueAxisRenderer.grid.template.disabled = true;
valueAxisRenderer.ticks.template.disabled = true;
valueAxis.min = 0;
valueAxis.renderer.tooltip.disabled = true;

var series1 = chart.series.push(new am4charts.RadarSeries());
series1.name = " ";
series1.dataFields.categoryX = "name";
series1.dataFields.valueY = "value1";
series1.stacked = true;
series1.fillOpacity = 0.7;
series1.fill = am4core.color("#a3ddf7");
series1.strokeOpacity = 5;
series1.dataItems.template.locations.categoryX = 0.5;
series1.sequencedInterpolation = true;
series1.sequencedInterpolationDelay = 50;

var series2 = chart.series.push(new am4charts.RadarSeries());
series2.name = " ";
series2.dataFields.categoryX = "name";
series2.dataFields.valueY = "value2";
series2.stacked = true;
series2.fillOpacity = 0.04;
series2.fill = am4core.color("#000");
series2.stacked = true;
series2.strokeOpacity = 0;
series2.dataItems.template.locations.categoryX = 0.5;
series2.sequencedInterpolation = true;
series2.sequencedInterpolationDelay = 150;
series2.tooltipText = "{value1}";
series2.tooltip.pointerOrientation = "vertical";
series2.tooltip.label.fill = am4core.color("#e8e8e8");

chart.seriesContainer.zIndex = -1;
chart.scrollbarX = new am4core.Scrollbar();
chart.scrollbarX.parent = chart.bottomAxesContainer;
chart.scrollbarX.exportable = false;
chart.scrollbarY = new am4core.Scrollbar();
chart.scrollbarY.exportable = false;

chart.padding(0, 0, 0, 0)

chart.scrollbarY.padding(20, 0, -50, 0);
chart.scrollbarX.padding(0, 20, 0, 20);

chart.scrollbarX.margin(120, 0, 20, 0);

chart.scrollbarY.background.padding(20, 0, 20, 0);
chart.scrollbarX.background.padding(0, 20, 0, 20);


chart.cursor = new am4charts.RadarCursor();
chart.cursor.lineX.strokeOpacity = 1;
chart.cursor.lineY.strokeOpacity = 0;
chart.cursor.lineX.stroke = chart.colors.getIndex(0);
chart.cursor.innerRadius = am4core.percent(2);
chart.cursor.radius = am4core.percent(90);
chart.cursor.selection.fill = chart.colors.getIndex(1);

let bullet = series2.bullets.create();
bullet.fill = am4core.color("#000000");
bullet.strokeOpacity = 0;
bullet.locationX = 0.5;


let line = bullet.createChild(am4core.Line);
line.x2 = -100;
line.x1 = 0;
line.y1 = 0;
line.y1 = 0;
line.strokeOpacity = 1;

line.stroke = am4core.color("#000000");
line.strokeDasharray = "2,3";
line.strokeOpacity = 0.5;


let bulletValueLabel = bullet.createChild(am4core.Label);
bulletValueLabel.color= am4core.color("#313436");


let label = bullet.createChild(am4core.Label);
label.text = "{categoryX}";
label.verticalCenter = "middle";
label.color= am4core.color("#313436");
label.paddingLeft = 10;
valueAxis.calculateTotals = true;


chart.legend = new am4charts.Legend();
chart.legend.parent = chart.radarContainer;
chart.legend.width =20;
chart.legend.horizontalCenter = "middle";
chart.legend.markers.template.width =20;
chart.legend.markers.template.height = 9;
chart.legend.markers.template.dy = 2;
chart.legend.labels.template.fontSize = "0em";
chart.legend.dy = 20;
chart.legend.dx = -9;

chart.legend.itemContainers.template.cursorOverStyle = am4core.MouseCursorStyle.pointer;
let itemHoverState = chart.legend.itemContainers.template.states.create("hover");
itemHoverState.properties.dx = 5;

let title = chart.radarContainer.createChild(am4core.Label);
title.text = ""


chart.maskBullets = false;

let circle = bullet.createChild(am4core.Circle);
circle.radius = 3;
circle.fill = am4core.color("#a3ddf7");
let hoverState = circle.states.create("hover");

hoverState.properties.scale = 3;

bullet.events.on("positionchanged", function(event) {
    event.target.children.getIndex(0).invalidate();
    event.target.children.getIndex(1).invalidatePosition();
})


bullet.adapter.add("dx", function(dx, target) {
  let angle = categoryAxis.getAngle(target.dataItem, "categoryX", 0.5);
  return 20 * am4core.math.cos(angle);
})

bullet.adapter.add("dy", function(dy, target) {
  let angle = categoryAxis.getAngle(target.dataItem, "categoryX", 0.5);
  return 20 * am4core.math.sin(angle);
})

bullet.adapter.add("rotation", function(dy, target) {
  let angle = Math.min(chart.endAngle, Math.max(chart.startAngle, categoryAxis.getAngle(target.dataItem, "categoryX", 0.5)));
  return angle;
})


line.adapter.add("x2", function(x2, target) {
  let dataItem = target.dataItem;
  if (dataItem) {
    let position = valueAxis.valueToPosition(dataItem.values.valueY.value + dataItem.values.valueY.stack);
    return -(position * valueAxis.axisFullLength + 35);
  }
  return 0;
})


bulletValueLabel.adapter.add("dx", function(dx, target) {
  let dataItem = target.dataItem;

  if (dataItem) {
    let position = valueAxis.valueToPosition(dataItem.values.valueY.value + dataItem.values.valueY.stack);
    return -(position * valueAxis.axisFullLength + 40);
  }
  return 0;
})


chart.seriesContainer.zIndex = 10;
categoryAxis.zIndex = 11;
valueAxis.zIndex = 12;


chart.radarContainer.zIndex = 20;


let previousBullets = [];
series2.events.on("tooltipshownat", function(event) {
  let dataItem = event.dataItem;

  for (let i = 0; i < previousBullets.length; i++) {
    previousBullets[i].isHover = false;
  }

  previousBullets = [];

  let itemBullet = dataItem.bullets.getKey(bullet.uid);

  for (let i = 0; i < itemBullet.children.length; i++) {
    let sprite = itemBullet.children.getIndex(i);
    sprite.isHover = true;
    previousBullets.push(sprite);
  }
})

series2.tooltip.events.on("visibilitychanged", function() {
  if (!series2.tooltip.visible) {
    for (let i = 0; i < previousBullets.length; i++) {
      previousBullets[i].isHover = false;
     
    }
  }
})

chart.events.on("maxsizechanged", function() {
  if(chart.pixelInnerRadius < 1500){
    title.disabled = true;
    chart.legend.verticalCenter = "middle";
    chart.legend.dy = 0;
  }
  else{
    title.disabled = false;
    chart.legend.verticalCenter = "top";
    chart.legend.dy = 100;
  }
})