am4core.useTheme(am4themes_animated);

var chart = am4core.create("chartdiv", am4charts.XYChart);
chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

chart.paddingRight = 50;
chart.logo.disabled = true;

chart.data = [{
  "nombre": "Filio García Karina",
  "folios": 1,
  "href": "https://ssccdmx.github.io/AlbumDUCS/img/Filio%20Garc%C3%ADa%20Karina.png"
}, {
  "nombre": "Cándido Moreno Juana",
  "folios": 1,
  "href": "https://ssccdmx.github.io/AlbumDUCS/img/C%C3%A1ndido%20Moreno%20Juana.png"
}, { 
  "nombre": "Pacheco Arévalo José Antonio",
  "folios": 2,
  "href": "https://ssccdmx.github.io/AlbumDUCS/img/Pacheco%20Ar%C3%A9valo%20Jos%C3%A9%20Antonio.png"
}, { 
  "nombre": "Torres Hernández Arturo",
  "folios": 38,
  "href": "https://ssccdmx.github.io/AlbumDUCS/img/Torres%20Hern%C3%A1ndez%20Arturo.png"
}, {
  "nombre": "Soto Hernández Elizabeth",
  "folios": 46,
  "href": "https://ssccdmx.github.io/AlbumDUCS/img/No-Foto.png"
}, {
  "nombre": "Ramírez Jiménez Perla Patricia",
  "folios": 69,
  "href": "https://ssccdmx.github.io/AlbumDUCS/img/Ram%C3%ADrez%20Jim%C3%A9nez%20Perla%20Patricia.png"
}, {
  "nombre": "Mora Velasco Roberto",
  "folios": 332,
  "href": "https://ssccdmx.github.io/AlbumDUCS/img/Mora%20Velasco%20Roberto.png"
}, { 
  "nombre": "Solís Domínguez Sostenes",
  "folios": 427,
  "href": "https://ssccdmx.github.io/AlbumDUCS/img/Sol%C3%ADs%20Dom%C3%ADnguez%20Sostenes.png"
}, { 
  "nombre": "Nava Robles Paola Isela",
  "folios": 592,
  "href": "https://ssccdmx.github.io/AlbumDUCS/img/Nava%20Robles%20Paola%20Isela.png"
}, {
  "nombre": "Quintana Sánchez Rubén",
  "folios": 766,
  "href": "https://ssccdmx.github.io/AlbumDUCS/img/Quintana%20S%C3%A1nchez%20Rub%C3%A9n.png"
}, {
  "nombre": "Vela Guisado Karina Nelly",
  "folios": 2577,
  "href": "https://ssccdmx.github.io/AlbumDUCS/img/Vela%20Guisado%20Karina%20Nelly.png"
}, {  
  "nombre": "Álvarez López Enrique",
  "folios": 3380,
  "href": "https://ssccdmx.github.io/AlbumDUCS/img/%C3%81lvarez%20L%C3%B3pez%20Enrique.png"
}, {  
  "nombre": "Nava Solís Bernardo",
  "folios": 3870,
  "href": "https://ssccdmx.github.io/AlbumDUCS/img/Nava%20Sol%C3%ADs%20Bernardo.png"
}, {    
  "nombre": "López Téllez Irving",
  "folios": 3918,
  "href": "https://ssccdmx.github.io/AlbumDUCS/img/L%C3%B3pez%20T%C3%A9llez%20Irving.png"
}, {  
  "nombre": "Jiménez Noriega Juana Carolina",
  "folios": 3929,
  "href": "https://ssccdmx.github.io/AlbumDUCS/img/Jim%C3%A9nez%20Noriega%20Juana%20Carolina.png"
}, {
  "nombre": "Quezada Bautista Oscar",
  "folios": 4344,
  "href": "https://ssccdmx.github.io/AlbumDUCS/img/Quezada%20Bautista%20Oscar.png"
}, {
  "nombre": "Flores Luciano María Nicolasa",
  "folios": 4460,
  "href": "https://ssccdmx.github.io/AlbumDUCS/img/Flores%20Luciano%20Mar%C3%ADa%20Nicolasa.png"

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