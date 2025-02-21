let light = false;


function cambioDeTema(){
    light = !light;
    if(light){
        document.querySelectorAll(".texto").forEach(elemento => {
            elemento.style.color = "#272727";
        });
        document.body.style.backgroundColor = "#EFFFFB";

    }else{
        document.querySelectorAll(".texto").forEach(elemento => {
            elemento.style.color = "#EFFFFB";
        });
        document.body.style.backgroundColor = "#272727";
    }
}