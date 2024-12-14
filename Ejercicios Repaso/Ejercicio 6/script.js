const cambiar = document.getElementById("cambiar");
const cuerpo = document.querySelector(".temaClaro");
cambiar.addEventListener("click", function(event){
    if (cuerpo.classList.contains("temaClaro")){
        cuerpo.classList.remove("temaClaro");
        cuerpo.classList.add("temaOscuro");
    }
    else if (cuerpo.classList.contains("temaOscuro")){
        cuerpo.classList.remove("temaOscuro");
        cuerpo.classList.add("temaClaro");
    }
});