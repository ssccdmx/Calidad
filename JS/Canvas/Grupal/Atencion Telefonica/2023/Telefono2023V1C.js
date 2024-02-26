am4core.useTheme(am4themes_animated);

var chart = am4core.create("chartdiv", am4charts.XYChart);
chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

chart.paddingRight = 50;
chart.logo.disabled = true;

chart.data = [{
    "nombre": "Trejo German Marina",
    "folios": 6.7,
    "href": "https://ssccdmx.github.io/AlbumDUCS/img/Trejo%20German%20Marina.png"
  }, {     
    "nombre": "Argumedo Lozano Carlos",
    "folios": 7.2,
    "href": "https://ssccdmx.github.io/AlbumDUCS/img/Argumedo%20Lozano%20Carlos.png"
  }, {    
    "nombre": "Hernández Marín Iván",
    "folios": 7.3,
    "href": "https://ssccdmx.github.io/AlbumDUCS/img/Hern%C3%A1ndez%20Mar%C3%ADn%20Iv%C3%A1n.png"
  }, {    
    "nombre": "Cortes Ramírez Roberto",
    "folios": 7.9,
    "href": "https://ssccdmx.github.io/AlbumDUCS/img/Cortes%20Ram%C3%ADrez%20Roberto.png"
  }, {      
    "nombre": "Galindo Hernández Christian Javier",
    "folios": 8.0,
    "href": "https://ssccdmx.github.io/AlbumDUCS/img/Galindo%20Hern%C3%A1ndez%20Christian%20Javier.png"
  }, {     
    "nombre": "Hernández Muñoz Héctor",
    "folios": 8.0,
    "href": "https://ssccdmx.github.io/AlbumDUCS/img/Hern%C3%A1ndez%20Mu%C3%B1oz%20H%C3%A9ctor.png"
  }, {     
    "nombre": "Martínez Santiago Alicia",
    "folios": 8.1,
    "href": "https://ssccdmx.github.io/AlbumDUCS/img/Mart%C3%ADnez%20Santiago%20Alicia.png"
  }, {        
    "nombre": "Bautista Hernández Aurelio",
    "folios": 8.3,
    "href": "https://ssccdmx.github.io/AlbumDUCS/img/Bautista%20Hern%C3%A1ndez%20Aurelio.png"
  }, { 
    "nombre": "Álvarez Saldívar Lucía",
    "folios": 8.3,
    "href": "https://ssccdmx.github.io/AlbumDUCS/img/%C3%81lvarez%20Sald%C3%ADvar%20Luc%C3%ADa.png"
  }, {        
    "nombre": "Jiménez Cruz Paola Lizbet",
    "folios": 8.4,
    "href": "https://ssccdmx.github.io/AlbumDUCS/img/Jim%C3%A9nez%20Cruz%20Paola%20Lizbet.png"
  }, {  
    "nombre": "Alba Corona Erika Yazmín",
    "folios": 8.4,
    "href": "https://ssccdmx.github.io/AlbumDUCS/img/Alba%20Corona%20Erika%20Yazm%C3%ADn.png"
  }, {     
    "nombre": "Rodríguez Hernández Ma. Guadalupe",
    "folios": 8.4,
    "href": "https://ssccdmx.github.io/AlbumDUCS/img/Rodr%C3%ADguez%20Hern%C3%A1ndez%20Ma.%20Guadalupe.png"

 
}];

var categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "nombre";
categoryAxis.renderer.grid.template.strokeOpacity = 0;
categoryAxis.renderer.minGridDistance = 1;
categoryAxis.renderer.labels.template.dx = -25;
categoryAxis.renderer.minWidth = 120;
categoryAxis.renderer.tooltip.dx = -25;

var valueAxis = chart.xAxes.push(new am4charts.ValueAxis());
valueAxis.renderer.inside = true;
valueAxis.renderer.labels.template.fillOpacity = 0.3;
valueAxis.renderer.grid.template.strokeOpacity = 0;
valueAxis.min = 0;
valueAxis.cursorTooltipEnabled = false;
valueAxis.renderer.baseGrid.strokeOpacity = 0;
valueAxis.renderer.labels.template.dy = 20;

var series = chart.series.push(new am4charts.ColumnSeries);
series.dataFields.valueX = "folios";
series.dataFields.categoryY = "nombre";
series.tooltipText = "{valueX.value}";
series.tooltip.pointerOrientation = "vertical";
series.tooltip.dy = - 30;
series.columnsContainer.zIndex = 100;

var columnTemplate = series.columns.template;
columnTemplate.height = am4core.percent(50);
columnTemplate.maxHeight = 40;
columnTemplate.column.cornerRadius(60, 10, 60, 10);
columnTemplate.strokeOpacity = 0;

series.heatRules.push({ target: columnTemplate, property: "fill", dataField: "valueX", 
min: am4core.color("#baf9e9"), max: am4core.color("#25E6B6") });
series.mainContainer.mask = undefined;

var cursor = new am4charts.XYCursor();
chart.cursor = cursor;
cursor.lineX.disabled = true;
cursor.lineY.disabled = true;
cursor.behavior = "none";

var bullet = columnTemplate.createChild(am4charts.CircleBullet);
bullet.circle.radius = 22;
bullet.valign = "middle";
bullet.align = "left";
bullet.isMeasured = true;
bullet.interactionsEnabled = false;
bullet.horizontalCenter = "right";
bullet.interactionsEnabled = false;

var hoverState = bullet.states.create("hover");
var outlineCircle = bullet.createChild(am4core.Circle);
outlineCircle.adapter.add("radius", function (radius, target) {
    var circleBullet = target.parent;
    return circleBullet.circle.pixelRadius + 6;
})

var image = bullet.createChild(am4core.Image);
image.width = 80;
image.height = 80;
image.horizontalCenter = "middle";
image.verticalCenter = "middle";
image.propertyFields.href = "href";

image.adapter.add("mask", function (mask, target) {
    var circleBullet = target.parent;
    return circleBullet.circle;
})

var previousBullet;
chart.cursor.events.on("cursorpositionchanged", function (event) {
    var dataItem = series.tooltipDataItem;

    if (dataItem.column) {
        var bullet = dataItem.column.children.getIndex(1);

        if (previousBullet && previousBullet != bullet) {
            previousBullet.isHover = false;
        }

        if (previousBullet != bullet) {

            var hs = bullet.states.getKey("hover");
            hs.properties.dx = dataItem.column.pixelWidth;
            bullet.isHover = true;

            previousBullet = bullet;
            
        }
    }
})