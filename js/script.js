let menuVisible = false;
//oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

//escribir nombre
document.addEventListener("DOMContentLoaded", function () {
    const nombre = "Jairo Rojas"; 
    const elementoNombre = document.getElementById("mi-nombre");
    let i = 0;

    function escribirNombre() {
        if (i < nombre.length) {
            elementoNombre.textContent += nombre.charAt(i);
            i++;
            setTimeout(escribirNombre, 150); 
        }
    }

    escribirNombre();
});

//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("java");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("sql");
        habilidades[3].classList.add("javascript");
        habilidades[4].classList.add("contabilidad");
        habilidades[5].classList.add("comunicacion");
        habilidades[6].classList.add("trabajo");
        habilidades[7].classList.add("creatividad");
        habilidades[8].classList.add("dedicacion");
        habilidades[9].classList.add("liderazgo");
    }
}


//animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 