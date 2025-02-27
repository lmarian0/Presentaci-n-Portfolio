//Guardar preferencia de modo en caso de no haber preferencia almacenada
if(localStorage.getItem("modo")===null){
    localStorage.setItem("modo", JSON.stringify(false));
}


//Variable light almacena el valor booleano de la cadena almacenada
let light = JSON.parse(localStorage.getItem("modo"));
console.log(light)

function cambioDeTema(){
    //Cambio de valor de preferencia
    light = !light;
    localStorage.setItem("modo", JSON.stringify(light));
    console.log(light);
    //Cambio de tema
    if(light){
        document.querySelectorAll(".texto").forEach(elemento => {
            elemento.style.color = "#272727";
        });
        document.body.style.backgroundColor = "#EFFFFB";
        document.getElementById("foto").style.borderColor = "#272727";
        document.getElementById("foto").style.boxShadow = "inset 0 0 1vh 0.5vh #EFFFFB";

    }else{
        document.querySelectorAll(".texto").forEach(elemento => {
            elemento.style.color = "#EFFFFB";
        });
        document.body.style.backgroundColor = "#272727";
        document.getElementById("foto").style.borderColor = "#EFFFFB";
        document.getElementById("foto").style.boxShadow = "inset 0 0 1vh 0.5vh #272727";
    }
}

//Funcion para tomar preferencias de usuario preestablecidas

function iniciodetema(){
    console.log(light);
    if(light){
        document.querySelectorAll(".texto").forEach(elemento => {
            elemento.style.color = "#272727";
        });
        document.body.style.backgroundColor = "#EFFFFB";
        document.getElementById("foto").style.borderColor = "#272727";
        document.getElementById("foto").style.boxShadow = "inset 0 0 1vh 0.5vh #EFFFFB";

    }else{
        document.querySelectorAll(".texto").forEach(elemento => {
            elemento.style.color = "#EFFFFB";
        });
        document.body.style.backgroundColor = "#272727";
        document.getElementById("foto").style.borderColor = "#EFFFFB";
        document.getElementById("foto").style.boxShadow = "inset 0 0 1vh 0.5vh #272727";
    }
}

iniciodetema();