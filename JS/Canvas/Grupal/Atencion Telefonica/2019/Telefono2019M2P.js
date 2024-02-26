am4core.useTheme(am4themes_animated);

var chart = am4core.create("chartdiv", am4charts.XYChart);
chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

chart.paddingRight = 50;
chart.logo.disabled = true;

chart.data = [{
  "nombre": "Collado Rosales Ana Laura",
  "folios": 1,
  "href": "https://ssccdmx.github.io/AlbumDUCS/img/Collado%20Rosales%20Ana%20Laura.png"
}, {
  "nombre": "Balderas Segura Daisy Mónica",
  "folios": 1,
  "href": "https://ssccdmx.github.io/AlbumDUCS/img/Balderas%20Segura%20Daisy%20M%C3%B3nica.png"
}, {  
  "nombre": "Florentino Garrido Diana Laura",
  "folios": 9,
  "href": "https://ssccdmx.github.io/AlbumDUCS/img/Florentino%20Garrido%20Diana%20Laura.png"
}, {
  "nombre": "Muñoz García José Francisco",
  "folios": 139,
  "href": "https://ssccdmx.github.io/AlbumDUCS/img/Mu%C3%B1oz%20Garc%C3%ADa%20Jos%C3%A9%20Francisco.png"
}, {  
  "nombre": "Filio García Karina",
  "folios": 287,
  "href": "https://ssccdmx.github.io/AlbumDUCS/img/Filio%20Garc%C3%ADa%20Karina.png"
}, {       
  "nombre": "Meraz Terrazas Edith",
  "folios": 302,
  "href": "https://ssccdmx.github.io/AlbumDUCS/img/Meraz%20Terrazas%20Edith.png"
}, {   
  "nombre": "Álvarez López Enrique",
  "folios": 322,
  "href": "https://ssccdmx.github.io/AlbumDUCS/img/%C3%81lvarez%20L%C3%B3pez%20Enrique.png"
}, {
  "nombre": "López Téllez Irving",
  "folios": 749,
  "href": "https://ssccdmx.github.io/AlbumDUCS/img/L%C3%B3pez%20T%C3%A9llez%20Irving.png"
}, {
  "nombre": "Nava Robles Paola Isela",
  "folios": 1043,
  "href": "https://ssccdmx.github.io/AlbumDUCS/img/Nava%20Robles%20Paola%20Isela.png"
}, {  
  "nombre": "Barrios Cruz Jorge Luis",
  "folios": 1413,
  "href": "https://ssccdmx.github.io/AlbumDUCS/img/Barrios%20Cruz%20Jorge%20Luis.png"
}, {
  "nombre": "Castillo Cruz Edith",
  "folios": 1698,
  "href": "https://ssccdmx.github.io/AlbumDUCS/img/Castillo%20Cruz%20Edith.png"
}, {
  "nombre": "Vela Guisado Karina Nelly",
  "folios": 1867,
  "href": "https://ssccdmx.github.io/AlbumDUCS/img/Vela%20Guisado%20Karina%20Nelly.png"
}, {
  "nombre": "Nava Solís Bernardo",
  "folios": 1990,
  "href": "https://ssccdmx.github.io/AlbumDUCS/img/Nava%20Sol%C3%ADs%20Bernardo.png"
}, {
  "nombre": "Garduño Mejía Ernesto Giovanni",
  "folios": 2162,
  "href": "https://ssccdmx.github.io/AlbumDUCS/img/No-Foto.png"
}, {
  "nombre": "Quezada Bautista Oscar",
  "folios": 2882,
  "href": "https://ssccdmx.github.io/AlbumDUCS/img/Quezada%20Bautista%20Oscar.png"
}, {
  "nombre": "Jiménez Noriega Juana Carolina",
  "folios": 2973,
  "href": "https://ssccdmx.github.io/AlbumDUCS/img/Jim%C3%A9nez%20Noriega%20Juana%20Carolina.png"
}, {
  "nombre": "Flores Luciano María Nicolasa",
  "folios": 3046,
  "href": "https://ssccdmx.github.io/AlbumDUCS/img/Flores%20Luciano%20Mar%C3%ADa%20Nicolasa.png"
}, {  
  "nombre": "Villagómez Antonio Ángel Rodrigo",
  "folios": 3086,
  "href": "https://ssccdmx.github.io/AlbumDUCS/img/No-Foto.png"
}, {
  "nombre": "Hernández Lucas Mari Elsa",
  "folios": 3090,
  "href": "https://ssccdmx.github.io/AlbumDUCS/img/Hern%C3%A1ndez%20Lucas%20Mari%20Elsa.png"
}, {  
  "nombre": "Mora Velasco Roberto",
  "folios": 3115,
  "href": "https://ssccdmx.github.io/AlbumDUCS/img/Mora%20Velasco%20Roberto.png"
  
  
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