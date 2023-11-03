// Seleccion Ir hacia arriba

const irArriba = document.querySelector("#ir-arriba");

//Funcion Ir hacia arriba
irArriba.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        left:0,
        behaivor: "smooth",
    });
});