let menuVisible = false;
// función para ocultar o mostrar menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList="responsive";
        menuVisible = true;
    }    
}

function seleccionar(){
    // función para ocultar el menu una vez seleccione una opción cualquiera
    document.getElementById("nav").classList="";
    menuVisible = false;
}

// función que aplica animación a las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight = skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("htmlycss");
        habilidades[1].classList.add("javascript");
        habilidades[2].classList.add("bootstrap");
        habilidades[3].classList.add("php");
        habilidades[4].classList.add("mysql");
        habilidades[5].classList.add("python");
        habilidades[6].classList.add("comunicacion");
        habilidades[7].classList.add("gestiontiempo");
        habilidades[8].classList.add("resolucionproblemas");
        habilidades[9].classList.add("trabajoequipo");
        habilidades[10].classList.add("aprendizaje");
        habilidades[11].classList.add("adaptabilidad");
    }
}

// detecto el scrolling para aplicar animacción a las habilidades
window.onscroll = function(){
    efectoHabilidades();
}