let foto1 = document.getElementById("foto1");
let foto2 = document.getElementById("foto2");
let foto3 = document.getElementById("foto3");

let fotos = ["Proyectos_fotos/1_Snake.png", "Proyectos_fotos/2_Nave.png", "Proyectos_fotos/3_Sapito.png", "Proyectos_fotos/4_Gauss.png", "Proyectos_fotos/5_Portfolio.png"];

let gitUrl = ["https://github.com/lmarian0/snake-python.git", "https://github.com/lmarian0/Navecita.git", "https://github.com/lmarian0/Sapo-saltando-css.git", "https://github.com/lmarian0/Gauss-raices-calculadora.git", "https://github.com/lmarian0/Presentaci-n-Portfolio.git"];

//Seteo de variables inicializacion
let count = 0;
let ant_count = fotos.length-1;
let pos_count = 1;
let git = document.getElementById("giturl");
git.setAttribute("href", gitUrl[count]);

function derecha(){
    //Seteo de variables cambio de valores
    if(count<fotos.length-1){
        ant_count=count;
        count+=1;
        if(count!=fotos.length-1){
            pos_count+=1;
        }else{
            pos_count=0;
        }
    }else{
        ant_count = fotos.length-1;
        count=0;
        pos_count=1;
    }
    //Se cambia el url del enlace a gitHub
    git.setAttribute("href", gitUrl[count]);
    //Se abre animacion de actualizacion del url
    git.classList.add("animacion_cambio_fondo");
    //Se abren animaciones de movimiento
    foto1.classList.add("animacion_cambio_derecha");
    foto2.classList.add("animacion_rotar_derecha");
    foto3.classList.add("animacion_rotar_izquierda");
    setTimeout(() => {
        //Se cierra animacion de actualizacion del url
        git.classList.remove("animacion_cambio_fondo");
        //Se cierran animaciones de movimiento
        foto1.classList.remove("animacion_cambio_derecha");
        foto2.classList.remove("animacion_rotar_derecha");
        foto3.classList.remove("animacion_rotar_izquierda");
        //cambio de fotos de paso (para movimiento fluido)
        foto1.style.background="url("+fotos[count]+")"; //fondo de foto2
        foto3.style.background="url("+fotos[ant_count]+")";
        if(count == 1){
            foto2.style.background="url("+fotos[fotos.length-1]+")"; //fondo de foto3
        }else{
            foto2.style.background="url("+fotos[ant_count-1]+")";
        }
        //Animacion de encimar fotos
        Array.from(document.getElementsByClassName("fotos")).forEach(foto => {
            foto.classList.add("animacion_encimar");
        });
        setTimeout(() => {
            //Cambio de fotos mientras no se ven fotos de abajo
            foto2.style.background="url("+fotos[pos_count]+")";
            //Se cierra animacion de encimar
            Array.from(document.getElementsByClassName("fotos")).forEach(foto => {
                foto.classList.remove("animacion_encimar");
            });
            //Se abren animaciones de restablecimiento de posicion
            foto1.classList.add("animacion_rotar_derecha");
            foto2.classList.add("animacion_rotar_izquierda");
            setTimeout(() => {
                //Se cierran animaciones de restablecimiento de posicion
                foto1.classList.remove("animacion_rotar_derecha");
                foto2.classList.remove("animacion_rotar_izquierda");
            }, 1000);
        }, 1000);
    }, 1000);
}

function izquierda(){
    //Seteo de variables cambio de valores
    if(count>0){
        pos_count=count;
        count-=1;
        if(count!=0){
            ant_count=count-1;
        }else{
            ant_count=fotos.length-1;;
        }
    }else{
        count=fotos.length-1;
        ant_count = count-1;
        pos_count=0;
    }

    //Se cambia el url del enlace a gitHub
    git.setAttribute("href", gitUrl[count]);
    //Se abre animacion de actualizacion del url
    git.classList.add("animacion_cambio_fondo");
    //Se abren animaciones de movimiento
    foto1.classList.add("animacion_cambio_derecha");
    foto2.classList.add("animacion_cambio_izquierda");
    setTimeout(() => {
        //Se cierra animacion de actualizacion de url
        git.classList.remove("animacion_cambio_fondo");
        //Se cierran animaciones de movimiento
        foto1.classList.remove("animacion_cambio_derecha");
        foto2.classList.remove("animacion_cambio_izquierda");
        //Se cambian fotos
        foto1.style.background="url("+fotos[count]+")";
        foto2.style.background="url("+fotos[pos_count]+")";
        foto3.style.background="url("+fotos[ant_count]+")";
        //Se abren animaciones de rotacion
        foto1.classList.add("animacion_rotar_derecha");
        foto2.classList.add("animacion_rotar_izquierda");
        setTimeout(() => {
             //Se cierran animaciones de rotacion
            foto1.classList.remove("animacion_rotar_derecha");
            foto2.classList.remove("animacion_rotar_izquierda");
        }, 1000);
    }, 1000);
}

