document.addEventListener("DOMContentLoaded", function() {
    var descargarBtn = document.getElementById("descargarBtn");

    descargarBtn.addEventListener("click", function() {
        //ruta del archivo
        var archivoCvUrl = "https://drive.google.com/file/d/1d7GkmlIB05wUWxz2NRZEs_i7CN-r6TVB/view?usp=sharing"; 

        // enlace temporal y simulacion de clic para iniciar la descarga
        var enlaceTemporal = document.createElement("a");
        enlaceTemporal.href = archivoCvUrl;
        enlaceTemporal.target = "_blank"; 
        enlaceTemporal.download = "mi_cv.pdf"; 

        var eventoClic = new MouseEvent("click", {
            view: window,
            bubbles: true,
            cancelable: true
        });
        
        enlaceTemporal.dispatchEvent(eventoClic);
    });
});

let menuVisible = false;

// Funcion que oculta o muestra el menu
function mostrarOcultarMenu() {
    const navElement = document.getElementById("nav");

    if (menuVisible) {
        navElement.classList.remove("responsive");
        menuVisible = false;
    } else {
        navElement.classList.add("responsive");
        menuVisible = true;
    }
}
function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false
}
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("angular");
        habilidades[3].classList.add("react");
        habilidades[4].classList.add("boostrap");
        habilidades[5].classList.add("node");
        habilidades[6].classList.add("jest");
        habilidades[7].classList.add("power");
        habilidades[8].classList.add("comunicacion");
        habilidades[9].classList.add("trabajo");
        habilidades[10].classList.add("creatividad");
        habilidades[11].classList.add("pensamiento");
        habilidades[12].classList.add("liderazgo");
        habilidades[13].classList.add("solucion");
        habilidades[14].classList.add("autogestion");
        habilidades[15].classList.add("resiliencia");
    }
}

//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
}

