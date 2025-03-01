//Guardar preferencia de modo en caso de no haber preferencia almacenada
if(localStorage.getItem("modo")===null){
    localStorage.setItem("modo", JSON.stringify(false));
}


//Variable light almacena el valor booleano de la cadena almacenada
let light = JSON.parse(localStorage.getItem("modo"));

function cambioDeTema(){
    //Cambio de valor de preferencia
    light = !light;
    localStorage.setItem("modo", JSON.stringify(light));
    //Cambio de tema
    if(light){
        document.querySelectorAll(".texto").forEach(elemento => {
            elemento.style.color = "#272727";
        });
        document.body.style.backgroundColor = "#EFFFFB";
        document.querySelectorAll(".fotos").forEach(elemento =>{
            elemento.style.borderColor = "#272727";
            elemento.style.boxShadow = "inset 0 0 1vh 0.5vh #EFFFFB";
        });
        document.getElementById("caja_git").style.borderColor="#272727";

    }else{
        document.querySelectorAll(".texto").forEach(elemento => {
            elemento.style.color = "#EFFFFB";
        });
        document.body.style.backgroundColor = "#272727";
        document.querySelectorAll(".fotos").forEach(elemento =>{
            elemento.style.borderColor = "#EFFFFB";
            elemento.style.boxShadow = "inset 0 0 1vh 0.5vh #272727";
        });
        document.getElementById("caja_git").style.borderColor="#EFFFFB";
    }
}

//Funcion para tomar preferencias de usuario preestablecidas

function iniciodetema(){
    if(light){
        document.querySelectorAll(".texto").forEach(elemento => {
            elemento.style.color = "#272727";
        });
        document.body.style.backgroundColor = "#EFFFFB";
        document.querySelectorAll(".fotos").forEach(elemento =>{
            elemento.style.borderColor = "#272727";
            elemento.style.boxShadow = "inset 0 0 1vh 0.5vh #EFFFFB";
        });
        document.getElementById("caja_git").style.borderColor="#272727";

    }else{
        document.querySelectorAll(".texto").forEach(elemento => {
            elemento.style.color = "#EFFFFB";
        });
        document.body.style.backgroundColor = "#272727";
        document.querySelectorAll(".fotos").forEach(elemento =>{
            elemento.style.borderColor = "#EFFFFB";
            elemento.style.boxShadow = "inset 0 0 1vh 0.5vh #272727";
        });
        document.getElementById("caja_git").style.borderColor="#EFFFFB";
    }
}

iniciodetema();