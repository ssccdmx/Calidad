am4core.useTheme(am4themes_animated);

var chart = am4core.create("chartdiv", am4charts.XYChart);
chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

chart.paddingRight = 100;
chart.logo.disabled = true;

chart.data = [{
  "nombre": "Vela Guisado Karina Nelly",
  "folios": 1,
  "href": "https://ssccdmx.github.io/AlbumDUCS/img/Vela%20Guisado%20Karina%20Nelly.png"
  }, {
  "nombre": "Quintana Sánchez Rubén",
  "folios": 2,
  "href": "https://ssccdmx.github.io/AlbumDUCS/img/Quintana%20S%C3%A1nchez%20Rub%C3%A9n.png"
  }, {
  "nombre": "Valencia Jiménez Ángel",
  "folios": 9,
  "href": "https://ssccdmx.github.io/AlbumDUCS/img/Valencia%20Jim%C3%A9nez%20%C3%81ngel.png"
  }, {
  "nombre": "Vela Guisado Víctor Hugo",
  "folios": 17,
  "href": "https://ssccdmx.github.io/AlbumDUCS/img/Vela%20Guisado%20V%C3%ADctor%20Hugo.png"
  }, {
  "nombre": "Báez López Laura Haidee",
  "folios": 27,
  "href": "https://ssccdmx.github.io/AlbumDUCS/img/B%C3%A1ez%20L%C3%B3pez%20Laura%20Haidee.png"
  }, {
  "nombre": "Garduño Mejía Ernesto Giovanni",
  "folios": 28,
  "href": "https://ssccdmx.github.io/AlbumDUCS/img/No-Foto.png"
  }, {
  "nombre": "Hernández Flores Andrés",
  "folios": 28,
  "href": "https://ssccdmx.github.io/AlbumDUCS/img/Hern%C3%A1ndez%20Flores%20Andr%C3%A9s.png"
  }, {
  "nombre": "Reyes Rosas Iván",
  "folios": 37,
  "href": "https://ssccdmx.github.io/AlbumDUCS/img/Reyes%20Rosas%20Iv%C3%A1n.png"
  }, {
  "nombre": "Pacheco Arévalo José Antonio",
  "folios": 43,
  "href": "https://ssccdmx.github.io/AlbumDUCS/img/Pacheco%20Ar%C3%A9valo%20Jos%C3%A9%20Antonio.png"
  }, {
  "nombre": "Ramírez Valdez Rafael",
  "folios": 44,
  "href": "https://ssccdmx.github.io/AlbumDUCS/img/Ram%C3%ADrez%20Valdez%20Rafael.png"
  }, {
  "nombre": "Filio García Karina",
  "folios": 46,
  "href": "https://ssccdmx.github.io/AlbumDUCS/img/Filio%20Garc%C3%ADa%20Karina.png"
  }, {
  "nombre": "Collado Rosales Ana Laura",
  "folios": 53,
  "href": "https://ssccdmx.github.io/AlbumDUCS/img/Collado%20Rosales%20Ana%20Laura.png"
  }, {
  "nombre": "Argumedo Lozano Carlos",
  "folios": 57,
  "href": "https://ssccdmx.github.io/AlbumDUCS/img/Argumedo%20Lozano%20Carlos.png"
  }, {
  "nombre": "Martínez Santos Juan Manuel",
  "folios": 63,
  "href": "https://ssccdmx.github.io/AlbumDUCS/img/Mart%C3%ADnez%20Santos%20Juan%20Manuel.png"
  }, {
  "nombre": "García Díaz Gilberto",
  "folios": 123,
  "href": "https://ssccdmx.github.io/AlbumDUCS/img/García%20Díaz%20Gilberto.png"
  }, {
  "nombre": "González Galicia Ericka",
  "folios": 137,
  "href": "https://ssccdmx.github.io/AlbumDUCS/img/Gonz%C3%A1lez%20Galicia%20Ericka.png"
  }, {
  "nombre": "Ramírez Jiménez Perla Patricia",
  "folios": 156,
  "href": "https://ssccdmx.github.io/AlbumDUCS/img/Ram%C3%ADrez%20Jim%C3%A9nez%20Perla%20Patricia.png"
  }, {
  "nombre": "Avilés Ortega Juan Carlos",
  "folios": 169,
  "href": "https://ssccdmx.github.io/AlbumDUCS/img/Avil%C3%A9s%20Ortega%20Juan%20Carlos.png"
  }, {
  "nombre": "Ramírez Pérez Juan Carlos",
  "folios": 175,
  "href": "https://ssccdmx.github.io/AlbumDUCS/img/Ram%C3%ADrez%20P%C3%A9rez%20Juan%20Carlos.png"
  }, {
  "nombre": "Jiménez Suárez Emanuel",
  "folios": 194,
  "href": "https://ssccdmx.github.io/AlbumDUCS/img/Jim%C3%A9nez%20Su%C3%A1rez%20Emanuel.png"
  }, {
  "nombre": "Ramírez García Luis Antonio",
  "folios": 198,
  "href": "https://ssccdmx.github.io/AlbumDUCS/img/Ram%C3%ADrez%20Garc%C3%ADa%20Luis%20Antonio.png"
  }, {
  "nombre": "Jaimes López Jennifer Marisol",
  "folios": 225,
  "href": "https://ssccdmx.github.io/AlbumDUCS/img/Jaimes%20L%C3%B3pez%20Jennifer%20Marisol.png"
  }, {
  "nombre": "García Martínez Julio César",
  "folios": 229,
  "href": "https://ssccdmx.github.io/AlbumDUCS/img/Garc%C3%ADa%20Mart%C3%ADnez%20Julio%20C%C3%A9sar.png"
  }, {
  "nombre": "Bautista Hernández Aurelio",
  "folios": 237,
  "href": "https://ssccdmx.github.io/AlbumDUCS/img/Bautista%20Hern%C3%A1ndez%20Aurelio.png"
  }, {
  "nombre": "Flores Rocha Yazmín",
  "folios": 252,
  "href": "https://ssccdmx.github.io/AlbumDUCS/img/Flores%20Rocha%20Yazm%C3%ADn.png"
  }, {
  "nombre": "López Paredes Karen Ivonne",
  "folios": 252,
  "href": "https://ssccdmx.github.io/AlbumDUCS/img/L%C3%B3pez%20Paredes%20Karen%20Ivonne.png"
  }, {
  "nombre": "Soto Hernández Elizabeth",
  "folios": 273,
  "href": "https://ssccdmx.github.io/AlbumDUCS/img/No-Foto.png"
  }, {
  "nombre": "Cortes Ramírez Roberto",
  "folios": 278,
  "href": "https://ssccdmx.github.io/AlbumDUCS/img/Cortes%20Ram%C3%ADrez%20Roberto.png"
  }, {
  "nombre": "Murillo Guzmán César Octavio",
  "folios": 284,
  "href": "https://ssccdmx.github.io/AlbumDUCS/img/Murillo%20Guzm%C3%A1n%20C%C3%A9sar%20Octavio.png"
  }, {
  "nombre": "Bocanegra Apolonio Jaime Enrique",
  "folios": 285,
  "href": "https://ssccdmx.github.io/AlbumDUCS/img/Bocanegra%20Apolonio%20Jaime%20Enrique.png"
  }, {
  "nombre": "Martínez Santiago Alicia",
  "folios": 292,
  "href": "https://ssccdmx.github.io/AlbumDUCS/img/Mart%C3%ADnez%20Santiago%20Alicia.png"
  }, {
  "nombre": "Lira Cruz Kathya del Carmen",
  "folios": 293,
  "href": "https://ssccdmx.github.io/AlbumDUCS/img/Lira%20Cruz%20Kathya%20del%20Carmen.png"
  }, {
  "nombre": "Rojas González Ángel",
  "folios": 321,
  "href": "https://ssccdmx.github.io/AlbumDUCS/img/Rojas%20Gonz%C3%A1lez%20%C3%81ngel.png"
  }, {
  "nombre": "Nava Robles Paola Isela",
  "folios": 321,
  "href": "https://ssccdmx.github.io/AlbumDUCS/img/Nava%20Robles%20Paola%20Isela.png"
  }, {
  "nombre": "Jiménez Velázquez Guadalupe Citlali",
  "folios": 322,
  "href": "https://ssccdmx.github.io/AlbumDUCS/img/Jim%C3%A9nez%20Vel%C3%A1zquez%20Guadalupe%20Citlali.png"
  }, {
  "nombre": "Robles Espinosa Ana Denisse",
  "folios": 341,
  "href": "https://ssccdmx.github.io/AlbumDUCS/img/Robles%20Espinosa%20Ana%20Denisse.png"
  }, {
  "nombre": "Rosalio Maximiliano Jaide",
  "folios": 356,
  "href": "https://ssccdmx.github.io/AlbumDUCS/img/Rosalio%20Maximiliano%20Jaide.png"
  }, {
  "nombre": "Cabrera Alcalá Rosalba",
  "folios": 367,
  "href": "https://ssccdmx.github.io/AlbumDUCS/img/No-Foto.png"
  }, {
  "nombre": "Díaz Espinosa Ángel David",
  "folios": 369,
  "href": "https://ssccdmx.github.io/AlbumDUCS/img/D%C3%ADaz%20Espinosa%20%C3%81ngel%20David.png"
  }, {
  "nombre": "Muñoz García José Francisco",
  "folios": 370,
  "href": "https://ssccdmx.github.io/AlbumDUCS/img/Mu%C3%B1oz%20Garc%C3%ADa%20Jos%C3%A9%20Francisco.png"
  }, {
  "nombre": "Jiménez Cruz Paola Lizbet",
  "folios": 371,
  "href": "https://ssccdmx.github.io/AlbumDUCS/img/Jim%C3%A9nez%20Cruz%20Paola%20Lizbet.png"
  }, {
  "nombre": "Pérez Elías José Roberto",
  "folios": 377,
  "href": "https://ssccdmx.github.io/AlbumDUCS/img/P%C3%A9rez%20El%C3%ADas%20Jos%C3%A9%20Roberto.png"
  }, {
  "nombre": "Ramos Trejo Carlos Ulises",
  "folios": 378,
  "href": "https://ssccdmx.github.io/AlbumDUCS/img/Ramos%20Trejo%20Carlos%20Ulises.png"
  }, {
  "nombre": "Ortega Salgado Miguel Ángel",
  "folios": 379,
  "href": "https://ssccdmx.github.io/AlbumDUCS/img/Ortega%20Salgado%20Miguel%20%C3%81ngel.png"
  }, {
  "nombre": "Jiménez Constantino Leslie",
  "folios": 390,
  "href": "https://ssccdmx.github.io/AlbumDUCS/img/Jim%C3%A9nez%20Constantino%20Leslie.png"
  }, {
  "nombre": "Hernández Cerda Ángel",
  "folios": 396,
  "href": "https://ssccdmx.github.io/AlbumDUCS/img/Hern%C3%A1ndez%20Cerda%20%C3%81ngel.png"
  }, {
  "nombre": "Pérez Bahena Elizabeth",
  "folios": 398,
  "href": "https://ssccdmx.github.io/AlbumDUCS/img/P%C3%A9rez%20Bahena%20Elizabeth.png"
  }, {
  "nombre": "Martínez Corona Griselda",
  "folios": 403,
  "href": "https://ssccdmx.github.io/AlbumDUCS/img/Mart%C3%ADnez%20Corona%20Griselda.png"
  }, {
  "nombre": "Granillo Beltrán Blanca Estela",
  "folios": 406,
  "href": "https://ssccdmx.github.io/AlbumDUCS/img/Granillo%20Beltr%C3%A1n%20Blanca%20Estela.png"
  }, {
  "nombre": "Florentino Garrido Diana Laura",
  "folios": 433,
  "href": "https://ssccdmx.github.io/AlbumDUCS/img/Florentino%20Garrido%20Diana%20Laura.png"
  }, {
  "nombre": "Juárez Salazar Jeimy",
  "folios": 445,
  "href": "https://ssccdmx.github.io/AlbumDUCS/img/Ju%C3%A1rez%20Salazar%20Jeimy.png"
  }, {
  "nombre": "Escobedo Méndez Brahayan",
  "folios": 456,
  "href": "https://ssccdmx.github.io/AlbumDUCS/img/Escobedo%20M%C3%A9ndez%20Brahayan.png"
  }, {
  "nombre": "Cruz Alejo Melva Yessenia",
  "folios": 462,
  "href": "https://ssccdmx.github.io/AlbumDUCS/img/Cruz%20Alejo%20Melva%20Yessenia.png"
  }, {
  "nombre": "Mora Velasco Roberto",
  "folios": 470,
  "href": "https://ssccdmx.github.io/AlbumDUCS/img/Mora%20Velasco%20Roberto.png"
  }, {
  "nombre": "Arroyo Sauza Diana Elizabeth",
  "folios": 475,
  "href": "https://ssccdmx.github.io/AlbumDUCS/img/Arroyo%20Sauza%20Diana%20Elizabeth.png"
  }, {
  "nombre": "Gerardo Nieves Oyuki",
  "folios": 510,
  "href": "https://ssccdmx.github.io/AlbumDUCS/img/No-Foto.png"
  }, {
  "nombre": "Rodríguez López María de Jesús",
  "folios": 559,
  "href": "https://ssccdmx.github.io/AlbumDUCS/img/Rodr%C3%ADguez%20L%C3%B3pez%20Mar%C3%ADa%20de%20Jes%C3%BAs.png"
  }, {
  "nombre": "Pérez Coello Diana Carolina",
  "folios": 577,
  "href": "https://ssccdmx.github.io/AlbumDUCS/img/No-Foto.png"
  }, {
  "nombre": "Centeno González Berenice",
  "folios": 585,
  "href": "https://ssccdmx.github.io/AlbumDUCS/img/Centeno%20Gonz%C3%A1lez%20Berenice.png"
  }, {
  "nombre": "Martínez López Jorge Armando",
  "folios": 631,
  "href": "https://ssccdmx.github.io/AlbumDUCS/img/Mart%C3%ADnez%20L%C3%B3pez%20Jorge%20Armando.png"
  }, {
  "nombre": "González Fuentes Sergio Elías",
  "folios": 645,
  "href": "https://ssccdmx.github.io/AlbumDUCS/img/No-Foto.png"
  }, {
  "nombre": "Hernández Marín Iván",
  "folios": 647,
  "href": "https://ssccdmx.github.io/AlbumDUCS/img/Hern%C3%A1ndez%20Mar%C3%ADn%20Iv%C3%A1n.png"
  }, {
  "nombre": "Fernández Yépez Guillermo",
  "folios": 682,
  "href": "https://ssccdmx.github.io/AlbumDUCS/img/Fern%C3%A1ndez%20Y%C3%A9pez%20Guillermo.png"
  }, { 


  "nombre": "Uribe Jiménez Daniel",
  "folios": 683,
  "href": "https://ssccdmx.github.io/AlbumDUCS/img/Uribe%20Jim%C3%A9nez%20Daniel.png"
  }, {
  "nombre": "Contreras Vilchis Carlos",
  "folios": 707,
  "href": "https://ssccdmx.github.io/AlbumDUCS/img/Contreras%20Vilchis%20Carlos.png"
  }, {
  "nombre": "Hernández Muñoz Héctor",
  "folios": 707,
  "href": "https://ssccdmx.github.io/AlbumDUCS/img/Hern%C3%A1ndez%20Mu%C3%B1oz%20H%C3%A9ctor.png"
  }, {
  "nombre": "Monroy Lozada Hugo Javier",
  "folios": 709,
  "href": "https://ssccdmx.github.io/AlbumDUCS/img/No-Foto.png"
  }, {
  "nombre": "Pereda Meneses Linda Vanessa",
  "folios": 711,
  "href": "https://ssccdmx.github.io/AlbumDUCS/img/Pereda%20Meneses%20Linda%20Vanessa.png"
  }, {
  "nombre": "Trejo German Marina",
  "folios": 711,
  "href": "https://ssccdmx.github.io/AlbumDUCS/img/Trejo%20German%20Marina.png"
  }, {
  "nombre": "Palacios Ordaz Santa Carmen",
  "folios": 713,
  "href": "https://ssccdmx.github.io/AlbumDUCS/img/Palacios%20Ordaz%20Santa%20Carmen.png"
  }, {
  "nombre": "Vásquez Sánchez Fernando",
  "folios": 720,
  "href": "https://ssccdmx.github.io/AlbumDUCS/img/V%C3%A1squez%20S%C3%A1nchez%20Fernando.png"
  }, {
  "nombre": "Ramírez Bautista Julio César",
  "folios": 781,
  "href": "https://ssccdmx.github.io/AlbumDUCS/img/Ram%C3%ADrez%20Bautista%20Julio%20C%C3%A9sar.png"
  }, {
  "nombre": "Quezada Bautista Oscar",
  "folios": 786,
  "href": "https://ssccdmx.github.io/AlbumDUCS/img/Quezada%20Bautista%20Oscar.png"
  }, {
  "nombre": "Cuando Frías Margarito Román",
  "folios": 797,
  "href": "https://ssccdmx.github.io/AlbumDUCS/img/Cuando%20Fr%C3%ADas%20Margarito%20Rom%C3%A1n.png"
  }, {
  "nombre": "Flores Jurado José Eduardo",
  "folios": 813,
  "href": "https://ssccdmx.github.io/AlbumDUCS/img/No-Foto.png"
  }, {
  "nombre": "Cándido Moreno Juana",
  "folios": 828,
  "href": "https://ssccdmx.github.io/AlbumDUCS/img/C%C3%A1ndido%20Moreno%20Juana.png"
  }, {
  "nombre": "Meraz Terrazas Edith",
  "folios": 848,
  "href": "https://ssccdmx.github.io/AlbumDUCS/img/Meraz%20Terrazas%20Edith.png"
  }, {
  "nombre": "Ramírez Vázquez Marisol",
  "folios": 861,
  "href": "https://ssccdmx.github.io/AlbumDUCS/img/Ram%C3%ADrez%20V%C3%A1zquez%20Marisol.png"
  }, {
  "nombre": "Flores Luciano María Nicolasa",
  "folios": 867,
  "href": "https://ssccdmx.github.io/AlbumDUCS/img/Flores%20Luciano%20Mar%C3%ADa%20Nicolasa.png"
  }, {
  "nombre": "Cruz Sánchez Israel Iván",
  "folios": 915,
  "href": "https://ssccdmx.github.io/AlbumDUCS/img/No-Foto.png"
  }, {
  "nombre": "Antonio Hernández Mariano",
  "folios": 970,
  "href": "https://ssccdmx.github.io/AlbumDUCS/img/Antonio%20Hern%C3%A1ndez%20Mariano.png"
  }, {
  "nombre": "Barrios Cruz Jorge Luis",
  "folios": 1025,
  "href": "https://ssccdmx.github.io/AlbumDUCS/img/Barrios%20Cruz%20Jorge%20Luis.png"
  }, {
  "nombre": "Romero Martínez Isaac",
  "folios": 1051,
  "href": "https://ssccdmx.github.io/AlbumDUCS/img/Romero%20Mart%C3%ADnez%20Isaac.png"
  }, {
  "nombre": "Velasco González Francisco",
  "folios": 1052,
  "href": "https://ssccdmx.github.io/AlbumDUCS/img/Velasco%20Gonz%C3%A1lez%20Francisco.png"
  }, {
  "nombre": "Soria López Joel",
  "folios": 1078,
  "href": "https://ssccdmx.github.io/AlbumDUCS/img/No-Foto.png"
  }, {
  "nombre": "Báez Pérez Ruth",
  "folios": 1079,
  "href": "https://ssccdmx.github.io/AlbumDUCS/img/B%C3%A1ez%20P%C3%A9rez%20Ruth.png"
  }, {
  "nombre": "Álvarez López Enrique",
  "folios": 1082,
  "href": "https://ssccdmx.github.io/AlbumDUCS/img/%C3%81lvarez%20L%C3%B3pez%20Enrique.png"
  }, {
  "nombre": "Jiménez Noriega Juana Carolina",
  "folios": 1090,
  "href": "https://ssccdmx.github.io/AlbumDUCS/img/Jim%C3%A9nez%20Noriega%20Juana%20Carolina.png"
  }, {
  "nombre": "Sandoval Morales Gabriela",
  "folios": 1097,
  "href": "https://ssccdmx.github.io/AlbumDUCS/img/Sandoval%20Morales%20Gabriela.png"
  }, {
  "nombre": "Castillo Cruz Edith",
  "folios": 1170,
  "href": "https://ssccdmx.github.io/AlbumDUCS/img/Castillo%20Cruz%20Edith.png"
  }, {
  "nombre": "Rodríguez Hernández Ma. Guadalupe",
  "folios": 1274,
  "href": "https://ssccdmx.github.io/AlbumDUCS/img/Rodr%C3%ADguez%20Hern%C3%A1ndez%20Ma.%20Guadalupe.png"

}];

var categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "nombre";
categoryAxis.renderer.grid.template.strokeOpacity = 0;
categoryAxis.renderer.minGridDistance = 1;
categoryAxis.renderer.labels.template.dx = -25;
categoryAxis.renderer.minWidth = 100;
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
min: am4core.color("#e4f8fe"), max: am4core.color("#A0E9FF") });
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