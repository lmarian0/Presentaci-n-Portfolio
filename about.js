function visible(elementid){
    let elemento = document.getElementById(elementid);
    let estilo = window.getComputedStyle(elemento);
    console.log(estilo.display);
    if(estilo.display=="none"){
        elemento.style.display="contents";
    }else{
        elemento.style.display="none";
    }
}