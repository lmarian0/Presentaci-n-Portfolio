let light = false;


function cambioDeTema(){
    light = !light;
    if(light){
        document.querySelectorAll(".texto").forEach(elemento => {
            elemento.style.color = "#272727";
        });
        document.body.style.backgroundColor = "#EFFFFB";
        document.getElementById("foto").style.borderColor = "#272727";

    }else{
        document.querySelectorAll(".texto").forEach(elemento => {
            elemento.style.color = "#EFFFFB";
        });
        document.body.style.backgroundColor = "#272727";
        document.getElementById("foto").style.borderColor = "#EFFFFB";
    }
}