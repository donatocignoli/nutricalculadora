// let alimento;
let nutriNivel = 0;
let proteina = 0;
let grasas = 0;
let carbohidratos = 0;

// Clase molde para los objetos de la calcu
class Alimento {
  // Parámetros para instanciar items de la calculadora nutricional
  constructor(nombre, imagen, nutriNivel, proteina, grasas, carbohidratos) {
    this.nombre = nombre;
    this.imagen = imagen;
    this.nutriNivel = nutriNivel;
    this.proteina = proteina;
    this.grasas = grasas;
    this.carbohidratos = carbohidratos;
  }
}

// Array donde se guardan todos los alimentos ingeridos en el día
const ingestaDelDia = [];

// Pseudo-Base de datos donde se guardarán todos los alimentos y sus características. Debería ser reemplazada por una base de datos real. Por ahora tiene pocas opciones:
const arroz = new Alimento("Arroz", "rice.png", 100, 2.7, 0.3, 28 );
const fideos = new Alimento("Fideos", "pasta.png", 100, 4.5, 2.1, 25 );
const leche = new Alimento("Leche", "milk.png", 100, 3.4, 1, 5 );
const carne = new Alimento("Carne", "meat.png", 100, 26.0, 15, 0 );
const manzana = new Alimento("Manzana", "apple.png", 100, 0.3, 0.2, 14 );

// Alimentos disponibles para agregar a la ingesta
const alimentosCalculadora = [arroz, fideos, leche, carne, manzana];

// Elementos UI de la calculadora: Selectores y contadores

const elementoIngestaDia = document.querySelector("#ingestaDelDia");
const contadorNutriNivel = document.querySelector("#nutriNivel span");
const contadorProteina = document.querySelector("#proteina span");
contadorNutriNivel.innerText = nutriNivel;
contadorProteina.innerText = proteina;


const btnArroz = document.querySelector("#btnArroz");
const btnFideos = document.querySelector("#btnFideos");
const btnLeche = document.querySelector("#btnLeche");
const btnCarne = document.querySelector("#btnCarne");
const btnManzana = document.querySelector("#btnManzana");

const botones = document.querySelectorAll(".boton");

// Recorrer todos los botones de la calculadora
for (const boton of botones) {
  boton.addEventListener("click", function (event) {
    // 1 - Busco en la lista de alimentos de la calculadora el alimento que tenga el mismo nombre que tiene el innerText del botón.
    // Por ejemplo si el botón es <li>Arroz</li>, el innerText
    // es Arroz, y va a buscar en la lista (array
    // alimentosCalculadora) un alimento con el atributo nombre Arroz.
    // 2 - Si hay un item con el nombre Arroz, el método find
    // devuelve ese item (objeto Arroz)
    // 3 - Se lo pasamos como parámetro en la función agregar
    let alimento = alimentosCalculadora.find((alimento) => alimento.nombre == boton.innerText);
    agregar(alimento);
  });
}

// Función encargada de agregar alimentos a la ingesta del día

function agregar(alimento) {
  // Verificar si el alimento ya está presente en la ingesta del día
  const alimentoExistente = ingestaDelDia.find(
    (item) => item.nombre === alimento.nombre
  );

  if (alimentoExistente) {
    // Si el alimento ya está presente, incrementar el contador en lugar de agregarlo nuevamente
    alimentoExistente.contador++;
  } else {
    // Si el alimento no está presente, agregarlo a la ingesta del día con un contador inicial de 1
    alimento.contador = 1;
    ingestaDelDia.push(alimento);
  }

  nutriNivel = nutriNivel + alimento.nutriNivel * alimento.contador;
  proteina = proteina + alimento.proteina * alimento.contador;
  grasas = grasas + alimento.grasas * alimento.contador;
  carbohidratos = carbohidratos + alimento.carbohidratos * alimento.contador;
  
  actualizarHTML();
}


// Función encargada de quitar alimentos a la ingesta del día
function quitar(indice) {
    // Obtengo el elemento "alimento" del array para usar la propiedad nutriNivel
    const alimento = ingestaDelDia[indice];
    // Con el índice uso splice y lo borro del array
    nutriNivel = nutriNivel - alimento.nutriNivel;
    proteina = proteina - alimento.proteina;
    grasas = grasas - alimento.grasas;
    carbohidratos = carbohidratos - alimento.carbohidratos;
    ingestaDelDia.splice(indice, 1);
    actualizarHTML(); // Actualizo el HTML
}

// Función encargada de renderizar todos los alimentos de la ingesta del día
function actualizarHTML() {
  // Vacío el elemento del contenedor
  elementoIngestaDia.innerHTML = "";
  // Agregar estilo flex a la lista para display horizontal
  elementoIngestaDia.classList.add("flex", "flex-wrap");
  // Objeto para almacenar la cantidad de cada alimento en la ingesta del día
    const contadorAlimentos = {};
  // Ciclo contador de alimentos
    for (const alimento of ingestaDelDia) {
      if (!contadorAlimentos[alimento.nombre]) {
        contadorAlimentos[alimento.nombre] = 1;
      } else {
        contadorAlimentos[alimento.nombre]++;
      }
    }
  // Recorro el array y vuelvo a agregar a TODOS los elementos (items) que hay dentro del array 
  for (const alimento of ingestaDelDia) {
    let indiceAlimentos = ingestaDelDia.indexOf(alimento);
    let contador = alimento.contador;
    let elementoAlimento = `
      <li class="alimento flex-shrink-0 w-1/6" onclick="quitar(${indiceAlimentos})">
        <img src="img/${alimento.imagen}" />
        <span class="contador">${contador}</span>
      </li>`;
    elementoIngestaDia.innerHTML += elementoAlimento;
  }
  // Actualizo nutrientes
  contadorNutriNivel.innerText = nutriNivel;
  contadorProteina.innerText = proteina;
  
}


// Evento para mostrar/ocultar resultado nutricional
const btnMostrarOcultar = document.querySelector("#btnMostrarOcultar");
const seccionResultadoNutricional = document.querySelector(".resultadoNutricional");

btnMostrarOcultar.addEventListener("click", function() {
  seccionResultadoNutricional.classList.toggle("hidden");
});


if (nutriNivel >= 1000) {
    alert ("Estás excedido")
} else if (nutriNivel >= 750) {
    alert ("Estás bien alimentado/a y no necesitás suplementación")
} else if (nutriNivel <=500 ) {
    alert ("Necesitás alimentarte más y mejor")}
