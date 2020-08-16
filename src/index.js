//Variable que nos permite saber los numeros de Clicks que sean pulsados
let numeroClicks = 1;

let operandoa;
let operacion;
let operandob = 0;

//Obteniendo al hijo del contenedor con la clase vista para mostrar los numeros
let vista = document.getElementById("resultado");

//Obteniendo los Numeros por medio del Id en HTML
let numero0 = document.getElementById("num0");
let numero1 = document.getElementById("num1");
let numero2 = document.getElementById("num2");
let numero3 = document.getElementById("num3");
let numero4 = document.getElementById("num4");
let numero5 = document.getElementById("num5");
let numero6 = document.getElementById("num6");
let numero7 = document.getElementById("num7");
let numero8 = document.getElementById("num8");
let numero9 = document.getElementById("num9");

//Obteniendo los Simbolos por medio del id en HTML
let suma = document.getElementById("sum");
let menos = document.getElementById("restar");
let multiplicacion = document.getElementById("multi");
let division = document.getElementById("divi");
let igual = document.getElementById("igual");
let punto = document.getElementById("punto");
let limpiarNumeros = document.getElementById("limpiar");

/*Funciones que nos permite mostrar en pantalla
los numeros y operadores que se an pulsados 
al darles Click, tambien nos permite asignarle un 
valor a los operadores*/

//=======NUMEROS==============
numero0.addEventListener("click", (e) => {
  crearElementoNumero(numero0);
});

numero1.addEventListener("click", (e) => {
  crearElementoNumero(numero1);
});

numero2.addEventListener("click", (e) => {
  crearElementoNumero(numero2);
});

numero3.addEventListener("click", (e) => {
  crearElementoNumero(numero3);
});

numero4.addEventListener("click", (e) => {
  crearElementoNumero(numero4);
});

numero5.addEventListener("click", (e) => {
  crearElementoNumero(numero5);
});

numero6.addEventListener("click", (e) => {
  crearElementoNumero(numero6);
});

numero7.addEventListener("click", (e) => {
  crearElementoNumero(numero7);
});

numero8.addEventListener("click", (e) => {
  crearElementoNumero(numero8);
});

numero9.addEventListener("click", (e) => {
  crearElementoNumero(numero9);
});

punto.addEventListener("click", (e) => {
  crearElementoNumero(punto);
});

 

//=======OPERADORES==============
suma.addEventListener("click", (e) => {
  operandoa = vista.textContent;
  operacion = "+";
  limpiar();
});

menos.addEventListener("click", (e) => {
  operandoa = vista.textContent;
  operacion = "-";
  limpiar();
});

multiplicacion.addEventListener("click", (e) => {
  operandoa = vista.textContent;
  operacion = "*";
  limpiar();
});

division.addEventListener("click", (e) => {
  operandoa = vista.textContent;
  operacion = "/";
  limpiar();
});

//Evento para borrar un Numero o varios
limpiarNumeros.addEventListener("click", (e) => {
  //Se busca al padre y al hijo y utilizamos la funcion lastChild para
  //para que nos elimine a partir del ultimo elemento o numero que se cree
  const padre = document.getElementById("resultado");
  const hijo = document.querySelector("#resultado").lastChild;
  //luego se elimina del padre
  const remover = padre.removeChild(hijo);
});

igual.addEventListener("click", (e) => {
  e.stopPropagation();
  operandob = vista.textContent;
  resolver();
});

//Funcion para limpiar los numeros al precionar un operador
function limpiar() {
  vista.textContent = "";
}

//resetea los valores 
function resetear() {
  vista.textContent = "";
  operandoa = 0;
  operandob = 0;
  operacion = "";
}

//Funcion para la logica de la calculadora 
function resolver() {
  //variable que maneja el resultado final de cualquier operacion  
  let resultado = 0;

  switch (operacion) {
    case "+":
        /*convirtiendo las cadena obenida a numero 
          para poder sumar,restar,dividir y multiplicar
         */
      resultado = parseFloat(operandoa) + parseFloat(operandob);

      break;
    case "-":
      resultado = parseFloat(operandoa) - parseFloat(operandob);
      break;
    case "*":
      resultado = parseFloat(operandoa) * parseFloat(operandob);
      break;
    case "/":
      resultado = parseFloat(operandoa) / parseFloat(operandob);
      break;
    default:
      break;
  }
  //resetamos los valores para poder seguir ingresando datos
  resetear();
  //mandamos el resultado de la operacion a la vista para que muestre en pantalla
  vista.textContent = resultado;
}

//funcion que nos permite crear un nuevo elemento con el numero pulsado
function crearElementoNumero(numero) {
    //nos ayuda a controlar el numerode clicks para ponerle un alto y que no se salga del contendor
    if (numeroClicks <= 37) {
    let nuevoNumero = document.createElement("p");
    nuevoNumero.textContent = numero.value;
    document.querySelector(".vista").children[0].appendChild(nuevoNumero);
    numeroClicks++;
  } else {
    alert("Ah llegado al Limite de numeros ingresados");
    window.location.reload();
  }
}

 