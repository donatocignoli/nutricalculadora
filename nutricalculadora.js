// let alimento;
// let nutriNivel = 0;

// Clase molde para los objetos de la calcu
class alimento {
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
const arroz = new alimento("Arroz", "rice.png", 100, 2.7, 0.3, 28 );
const fideos = new alimento("Fideos", "pasta.png", 100, 4.5, 2.1, 25 );
const leche = new alimento("Leche", "milk.png", 100, 3.4, 1, 5 );
const carne = new alimento("Carne", "meat.png", 100, 26, 15, 0 );
const manzana = new alimento("Manzana", "apple.png", 100, 0.3, 0.2, 14 );

// Alimentos disponibles para agregar a la ingesta
const itemsCalculadora = [arroz, fideos, leche, carne, manzana];

// Elementos UI de la calculadora

const elementoListaAlimentos = document.querySelector("#listaAlimentos");


const btnArroz = document.querySelector("#agArroz");
const btnFideos = document.querySelector("#agFideos");
const btnLeche = document.querySelector("#agLeche");
const btnCarne = document.querySelector("#agCarne");
const btnManzana = document.querySelector("#agManzana");

// no sé qué hace esto
const botones = document.querySelectorAll(".boton");

// Recorrer todos los botones de la calculadora
for (const boton of botones) {
  boton.addEventListener("click", function (event) {
    // 1 - Busco en la lista de items del vendedor, el item que
    // tenga el mismo nombre que tiene el innerText del botón.
    // Por ejemplo si el botón es <li>Espada</li>, el innerText
    // es Espada, y va a buscar en la lista del vendedor (array
    // itemsVendedor) un item con el atributo nombre Espada.
    // 2 - Si hay un item con el nombre Espada, el método find
    // devuelve ese item (objeto espada)
    // 3 - Se lo pasamos como parámetro en la función comprar
    let alimento = itemsCalculadora.find((alimento) => alimento.nombre == boton.innerText);
    agregar(alimento);
  });
}

// Función encargada de agregar alimentos a la ingesta del día
function agregar(alimento) {
    // Si me alcanza, agrego el item a la mochi
    ingestaDelDia.push(item);
    nutriNivel += nutriNivel + alimento.nutriNivel; // Actualizo el nutriNivel
    proteina += proteina + alimento.proteina; // Actualizo el nivel de prote
    grasas += grasas + alimento.grasas; // Actualizo el nivel de grasas
    carbohidratos += carbohidratos + alimento.carbohidratos; // Actualizo el nivel de carbos
    actualizarHTML(); // Actualizo el HTML
  }

// Función encargada de quitar alimentos a la ingesta del día
function quitar(indice) {
    // Obtengo el alimento del array para usar la propiedad precio / BORRAR?
    const alimento = ingestaDelDia[indice];
    // Con el índice uso splice y lo borro del array
    ingestaDelDia.splice(indice, 1);
    actualizarHTML(); // Actualizo el HTML
}

// Función encargada de renderizar todos los alimentos de la ingesta del día
function actualizarHTML() {
  // Vacío el elemento del contenedor
  elementoListaAlimentos.innerHTML = "";
  // Recorro el array y vuelvo a agregar a TODOS los elementos (items) que hay dentro del array 
  for (const alimento of ingestaDelDia) {
    let indiceItem = ingestaDelDia.indexOf(alimento);
    let elementoItem = `
        <li class="item" onclick="vender(${indiceItem})">
            <img src="img/${alimento.imagen}" />
        </li>`;
    elementoListaAlimentos.innerHTML += elementoItem;
  }
}

// HAY QUE BUSCAR FORMA DE AGREGAR CANTIDAD EN GR O ML POR CADA INGRESO

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
