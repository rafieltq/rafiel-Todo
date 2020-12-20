//Identificar objetos del DOM 
const tareaText = document.getElementById('tareaText');
const tareaBtn = document.getElementById('addTarea');
var tareaLista = document.getElementById('tasksList');

//Creando arreglo para almacenar las tareas
boxTareas = [];

//Obtener las tareas almacenadas anteriormente
getTareas ();

//Agregar eventos
tareaBtn.addEventListener('click', () => createTarea(tareaText.value));

//Crear funciones
function createTarea (tareaContent) {
    boxTareas.push(tareaContent);
    console.log(boxTareas);

    tareaText.value = "";

    displayTarea();
}

function displayTarea () {
    tareaLista.innerHTML = "";
    boxTareas.forEach( ( tarea,id ) => {
        var tareaElemento = document.createElement('li');
        tareaElemento.innerHTML += tarea + " " + `<button class="btn" id="deleteBtn" onclick="deleteTarea(${id})">-</button>`;
        tareaLista.appendChild(tareaElemento);
    });

    storeTareas();
}

function deleteTarea(id) {
    boxTareas.splice(id,1);

    displayTarea();
}
//Crear nuestro item del localStorage

function storeTareas() {
    window.localStorage.setItem('taskLista',JSON.stringify(boxTareas));
}

//Obtener items del localStorage
function getTareas () {

    let storedTareas = window.localStorage.getItem('taskLista');

    console.log(storedTareas);

    if ( storedTareas !== null ) {
        storedTareas = JSON.parse(storedTareas);
        boxTareas = storedTareas;
        displayTarea();
    }
}