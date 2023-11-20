const iniciarPedido = document.getElementById("activar_boton")
iniciarPedido.onclick = () => {

    const apagar_boton = document.getElementById("activar_boton");
    iniciarPedido.classList.remove("estilo_boton");
    iniciarPedido.classList.add("apagado");

    const verCarta = document.getElementById("iniciar")
    verCarta.classList.remove("apagado");
    verCarta.classList.add("indice_comidas");
}