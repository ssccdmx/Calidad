//Referencia al botón mediante su id
let boton = document.getElementById('Consultar');
//Referencia al select input mediante su id
let selectInput = document.getElementById('Año');
let selectInput2 = document.getElementById('Mes');  
//Evento on click en nuestro botón
boton.addEventListener("click", function(){ 
//Obtengo el 'value' de la opción seleccionada en el input
let opcionSeleccionada = selectInput.options[selectInput.selectedIndex].value;
let opcionSeleccionada2 = selectInput2.options[selectInput2.selectedIndex].value; 
//Le agrego el nuevo atributo, que lo llamé 'talle', y le doy de value la opción seleccionada.
boton.setAttribute("talle", opcionSeleccionada); 
boton.setAttribute("talle", opcionSeleccionada2);
});