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
    ingestaDelDia.push(alimento);
    nutriNivel = nutriNivel + alimento.nutriNivel; // Actualizo el nutriNivel
    proteina = proteina + alimento.proteina; // Actualizo el nivel de prote
    grasas = grasas + alimento.grasas; // Actualizo el nivel de grasas
    carbohidratos = carbohidratos + alimento.carbohidratos; // Actualizo el nivel de carbos
    actualizarHTML(); // Actualizo el HTML
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
  // Recorro el array y vuelvo a agregar a TODOS los elementos (items) que hay dentro del array 
  for (const alimento of ingestaDelDia) {
    let indiceAlimentos = ingestaDelDia.indexOf(alimento);
    let elementoAlimento = `
        <li class="alimento" onclick="quitar(${indiceAlimentos})">
            <img src="img/${alimento.imagen}" />
        </li>`;
    elementoIngestaDia.innerHTML += elementoAlimento;
  }
  // Actualizo nutrientes
  contadorNutriNivel.innerText = nutriNivel;
  contadorProteina.innerText = proteina;
}

// HAY QUE BUSCAR FORMA DE AGREGAR CANTIDAD EN GR O ML POR CADA INGRESO EN VEZ DE REPETIR EL ITEM

  // while (alimento != 'Salir') {
  //     alimento = prompt('Ingrese el alimento ingerido:\n\n- Salir\n- Fruta\n- Leche\n- Arroz\n- Carne');
  //     if (alimento='Salir'){
  //       break;
  //     }
  //     cantidadIngerida =  parseInt(prompt('Ingrese la cantidad ingerida en gramos o mililitros'))
  
  //     switch (alimento) {
  //       case 'Fruta':
  //         nutriNivel += 2 * cantidadIngerida;
  //         console.log(nutriNivel);
  //         break;
  //       case 'Leche':
  //         nutriNivel += 1 * cantidadIngerida;
  //         console.log(nutriNivel);
  //         break;
  //       case 'Arroz':
  //         nutriNivel += 2 * cantidadIngerida;
  //         console.log(nutriNivel);
  //         break;
  //       case 'Carne':
  //         nutriNivel += 3 * cantidadIngerida;
  //         console.log(nutriNivel);
  //         break;
  //       default:
  //         alert('El alimento no existe en la base de datos');
  //         continue;
  //     }
  // }


if (nutriNivel >= 1000) {
    alert ("Estás excedido")
} else if (nutriNivel >= 750) {
    alert ("Estás bien alimentado/a y no necesitás suplementación")
} else if (nutriNivel <=500 ) {
    alert ("Necesitás alimentarte más y mejor")}
