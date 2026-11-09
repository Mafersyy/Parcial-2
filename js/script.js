
document.addEventListener("DOMContentLoaded", function () {

    /* ---------- 1. Menú móvil ---------- */
    var boton = document.querySelector(".menu-toggle");
    var lista = document.querySelector(".nav-list");

    if (boton && lista) {
       
        boton.addEventListener("click", function () {
            var abierto = lista.classList.toggle("abierto");
            boton.setAttribute("aria-expanded", abierto ? "true" : "false");
        });

        
        lista.addEventListener("click", function (evento) {
            if (evento.target.tagName === "A") {
                lista.classList.remove("abierto");
                boton.setAttribute("aria-expanded", "false");
            }
        });
    }

    /* ---------- 2. Aparición suave de elementos ---------- */
    var elementos = document.querySelectorAll(".revelar");

   
    if (!("IntersectionObserver" in window) || elementos.length === 0) {
        elementos.forEach(function (el) { el.classList.add("visible"); });
        return;
    }

    var observador = new IntersectionObserver(function (entradas) {
        entradas.forEach(function (entrada) {
            if (entrada.isIntersecting) {
                entrada.target.classList.add("visible");
                observador.unobserve(entrada.target);
            }
        });
    }, { threshold: 0, rootMargin: "0px 0px -40px 0px" });

    elementos.forEach(function (el) { observador.observe(el); });
});
