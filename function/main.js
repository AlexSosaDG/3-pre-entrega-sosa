class Comida {
    constructor(nombre, cantidadIngredientes, ingredientes, aderezos, guarniciones, precio, tiempoDeCoccion) {
        this.nombre = nombre;
        this.cantidadIngredientes = cantidadIngredientes;
        this.ingredientes = ingredientes;
        this.aderezos = aderezos;
        this.guarniciones = guarniciones;
        this.precio = precio;
        this.tiempoDeCoccion = tiempoDeCoccion;
    }
}
//arrays
const aLaPlancha = ["Suprema de pollo", "Churrasco", "Bife"];
const rellenoEmpanada = ["Pollo", "Carne", "Jamón y queso"]
const aderezos = ["Mayonesa", "Ketchup", "Mostaza"];
const ingredientesSimples = ["Lechuga", "Tomate"];
const ingredientesCompletos = ["Lechuga", "Tomate", "Jamón", "Queso", "Huevo"];
const ingredientesMilanesa = ["Carne", "Pollo"];
const ingredientesTarta = ["Jamón", "Queso", "Huevo"];
const adicionalMenuDelDía = ["Queso rallado", "Pan", "Sal"];
const ingredientesTortilla = ["Cebolla", "Jamón", "Queso"];
const guarnicion = ["Papas fritas", "Puré de papa", "Ensalada", "Arroz con queso"];

const menuDelDia = [
    new Comida("Ravioles con Tuco", 3, adicionalMenuDelDía, [], [], 1700, 60),
    new Comida("Pastel de papa", 3, adicionalMenuDelDía, [], [], 1700, 60),
];
const cortesALaPlancha = [
    new Comida("Suprema de pollo", [], [], [], guarnicion, 2200, 20),
    new Comida("Bife", [], [], [], guarnicion, 2300, 20),
    new Comida("Churrasco", [], [], [], guarnicion, 2400, 20),
]


const sanguches = [
    new Comida("Sanguche de pollo simple", 0, [], aderezos, [], 1500, 7),
    new Comida("Sanguche de pollo clásico", 2, ingredientesSimples, aderezos, [], 1600, 7),
    new Comida("Sanguche de pollo completo", 5, ingredientesCompletos, aderezos, [], 1700, 7),
    new Comida("Sanguche de carne simple", 0, [], aderezos, [], 1800, 7),
    new Comida("Sanguche de carne clásico", 2, ingredientesSimples, aderezos, [], 1900, 7),
    new Comida("Sanguche de carne completo", 5, ingredientesCompletos, aderezos, [], 2000, 7),
];
const empanadas = [
    new Comida("Empanada de pollo", [], [], [], [], 300, 5),
    new Comida("Empanada de carne", [], [], [], [], 300, 5),
    new Comida("Empanada de jamón y queso", [], [], [], [], 300, 5),
];

const tarta = [
    new Comida("Tartas", 3, ingredientesTarta, [], [], 1400, 30),
];

const milanesasaConGuarnicion = [
    new Comida("Milanesa simple con guarnición", 1, ingredientesMilanesa, [], guarnicion, 2200, 20),
    new Comida("Milanesa clásica con guarnición", 1, ingredientesMilanesa, [], guarnicion, 2200, 20),
    new Comida("Milanesa napolitana con guarnición", 1, ingredientesMilanesa, [], guarnicion, 2200, 20),
];

const tortilla = [
    new Comida("Tortilla de papa simple", 0, [], adicionalMenuDelDía, [], 1400, 20),
    new Comida("Tortilla de papa rellena", 2, ingredientesTortilla, adicionalMenuDelDía, [], 1800, 20),
    new Comida("Tortilla de papa completa", 3, ingredientesTortilla, adicionalMenuDelDía, [], 2000, 20),
];
class Categoria {
    constructor(nombre, comidas) {
        this.nombre = nombre;
        this.comidas = comidas;
    }
}

const cartaCompleta = [
    new Categoria("Sanguches", sanguches),
    new Categoria("Milanesa al plato con guarnición", milanesasaConGuarnicion),
    new Categoria("A la plancha con guarnición", cortesALaPlancha),
    new Categoria("Tortilla de papa", tortilla),
    new Categoria("Tartas", tarta),
    new Categoria("Menú del día", menuDelDia),
];

function limiarOpciones(){
    const listaMenu = document.getElementById("lista_menu_general")
    listaMenu.innerHTML = "";
}
function ocultarElemento(nombreId){
    const elemento = document.getElementById(nombreId)
    elemento.classList.add("apagado");
}

function mostrarElemento(nombreId){
    const elemento = document.getElementById(nombreId)
    elemento.classList.remove("apagado");
}

function renderizarMenuCompleto(arrayMenu){
    const listaMenu = document.getElementById("lista_menu_general")
    for(let index = 0; index < arrayMenu.length; index++){
        const itemCarta = arrayMenu[index]
        listaMenu.innerHTML = listaMenu.innerHTML + `<li id="opcion${index}"><button>${itemCarta.nombre}</button></li>`;
    }
}

function crearTarjetas(plato){
    const verTarjetas = ducoment.getElementById("tarjetas_comidas");

    for(const cPlato of plato){
        const divPadre = document.createElement("div");
        divPadre.className = "col-12 col-sm-4 mb-2";

        const divCard = document.createElement("div");
        divCard.className = "card";

        const divCardBody = document.createElement("div");
        divCardBody.className = "card-body";

        const h5 = document.createElement("h5");
        h5.className = "card-title";
        h5.innerText = tortilla.nombre;

        const p = document.createElement("p");
        p.className = "card-text";
        p.innerHTML = `<strong>Precio:</strong> $${cPlato.precio}`;

        divCardBody.append(h5, p);
        divCard.append(divCardBody);
        divPadre.append(divCard);

        verTarjetas.append(divPadre);
    }
}
const cancelarPedido = document.getElementById("boton_salir")
cancelarPedido.onclick = () =>{
    ocultarElemento("boton_salir");
    mostrarElemento("mensaje_despedida");
    ocultarElemento("pantalla_completa");
}

const iniciarPedido = document.getElementById("activar_boton")
iniciarPedido.onclick = () => {
    ocultarElemento("activar_boton");
    mostrarElemento("lista_comidas");
    limiarOpciones();
    renderizarMenuCompleto(cartaCompleta);
    mostrarElemento("boton_salir");
}

const irASanguche = document.getElementById("opcion0")
irASanguche.onclick = () => {
    crearTarjetas(sanguches);
}







