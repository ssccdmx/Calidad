am4core.useTheme(am4themes_animated);

var chart = am4core.create("chartdiv", am4charts.XYChart);
chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

chart.paddingRight = 50;
chart.logo.disabled = true;

chart.data = [{
  "nombre": "Ramírez García Luis Antonio",
  "folios": 0,
  "href": "https://ssccdmx.github.io/AlbumDUCS/img/Ram%C3%ADrez%20Garc%C3%ADa%20Luis%20Antonio.png"
}, {
  "nombre": "Cruz Ortiz Julia Yessenia",
  "folios": 0,
  "href": "https://ssccdmx.github.io/AlbumDUCS/img/Cruz%20Ortiz%20Julia%20Yessenia.png"
}, {
  "nombre": "López Martínez Josefina Fabiola",
  "folios": 6.0,
  "href": "https://ssccdmx.github.io/AlbumDUCS/img/L%C3%B3pez%20Mart%C3%ADnez%20Josefina%20Fabiola.png"
}, {
  "nombre": "Valencia Jiménez Ángel",
  "folios": 6.3,
  "href": "https://ssccdmx.github.io/AlbumDUCS/img/Valencia%20Jim%C3%A9nez%20%C3%81ngel.png"
}, {
  "nombre": "Reyes Rosas Iván",
  "folios": 6.3,
  "href": "https://ssccdmx.github.io/AlbumDUCS/img/Reyes%20Rosas%20Iv%C3%A1n.png"
}, {
  "nombre": "Ortega Salgado Miguel Ángel",
  "folios": 6.3,
  "href": "https://ssccdmx.github.io/AlbumDUCS/img/Ortega%20Salgado%20Miguel%20%C3%81ngel.png"
}, {
  "nombre": "Báez López Laura Haidee",
  "folios": 6.5,
  "href": "https://ssccdmx.github.io/AlbumDUCS/img/B%C3%A1ez%20L%C3%B3pez%20Laura%20Haidee.png"
}, {
  "nombre": "Rojas González Ángel",
  "folios": 6.7,
  "href": "https://ssccdmx.github.io/AlbumDUCS/img/Rojas%20Gonz%C3%A1lez%20%C3%81ngel.png"
}, {
  "nombre": "Lira Cruz Kathya del Carmen",
  "folios": 6.8,
  "href": "https://ssccdmx.github.io/AlbumDUCS/img/Lira%20Cruz%20Kathya%20del%20Carmen.png"
}, {
  "nombre": "Martínez Corona Griselda",
  "folios": 6.9,
  "href": "https://ssccdmx.github.io/AlbumDUCS/img/Mart%C3%ADnez%20Corona%20Griselda.png"
}, {
  "nombre": "González Galicia Ericka",
  "folios": 6.9,
  "href": "https://ssccdmx.github.io/AlbumDUCS/img/Gonz%C3%A1lez%20Galicia%20Ericka.png"
}, {
  "nombre": "Ramírez Valdez Rafael",
  "folios": 7.0,
  "href": "https://ssccdmx.github.io/AlbumDUCS/img/Ram%C3%ADrez%20Valdez%20Rafael.png"
}, {
  "nombre": "Cruz López Emmanuel",
  "folios": 7.0,
  "href": "https://ssccdmx.github.io/AlbumDUCS/img/Cruz%20L%C3%B3pez%20Emmanuel.png"
}, {
  "nombre": "Avilés Ortega Juan Carlos",
  "folios": 7.4,
  "href": "https://ssccdmx.github.io/AlbumDUCS/img/Avil%C3%A9s%20Ortega%20Juan%20Carlos.png"
}, {
  "nombre": "Vela Guisado Víctor Hugo",
  "folios": 7.5,
  "href": "https://ssccdmx.github.io/AlbumDUCS/img/Vela%20Guisado%20V%C3%ADctor%20Hugo.png"
}, {
  "nombre": "Rodríguez López María de Jesús",
  "folios": 7.5,
  "href": "https://ssccdmx.github.io/AlbumDUCS/img/Rodr%C3%ADguez%20L%C3%B3pez%20Mar%C3%ADa%20de%20Jes%C3%BAs.png"
}, {
  "nombre": "Flores Rocha Yazmín",
  "folios": 7.5,
  "href": "https://ssccdmx.github.io/AlbumDUCS/img/Flores%20Rocha%20Yazm%C3%ADn.png"
}, {
  "nombre": "Rosalio Maximiliano Jaide",
  "folios": 7.6,
  "href": "https://ssccdmx.github.io/AlbumDUCS/img/Rosalio%20Maximiliano%20Jaide.png"
}, {
  "nombre": "Cortes Romero Fernando",
  "folios": 7.6,
  "href": "https://ssccdmx.github.io/AlbumDUCS/img/Cortes%20Romero%20Fernando.png"
}, {
  "nombre": "Márquez Mayen Laura Adriana",
  "folios": 7.7,
  "href": "https://ssccdmx.github.io/AlbumDUCS/img/M%C3%A1rquez%20Mayen%20Laura%20Adriana.png"
}, {
  "nombre": "Contreras Vilchis Carlos",
  "folios": 7.7,
  "href": "https://ssccdmx.github.io/AlbumDUCS/img/Contreras%20Vilchis%20Carlos.png"
}, {
  "nombre": "Ávila Martínez Olga",
  "folios": 7.7,
  "href": "https://ssccdmx.github.io/AlbumDUCS/img/%C3%81vila%20Mart%C3%ADnez%20Olga.png"
}, {
  "nombre": "Juárez Salazar Jeimy",
  "folios": 7.8,
  "href": "https://ssccdmx.github.io/AlbumDUCS/img/Ju%C3%A1rez%20Salazar%20Jeimy.png"
}, {
  "nombre": "Velasco González Francisco",
  "folios": 7.9,
  "href": "https://ssccdmx.github.io/AlbumDUCS/img/Velasco%20Gonz%C3%A1lez%20Francisco.png"

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

series.heatRules.push({ target: columnTemplate, property: "fill", dataField: "valueX", min: am4core.color("#baf9e9"), max: am4core.color("#25E6B6") });
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