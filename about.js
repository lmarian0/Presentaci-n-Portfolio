function visible(elementid){
    let elemento = document.getElementById(elementid);
    let estilo = window.getComputedStyle(elemento);
    console.log(estilo.display);
    if(estilo.display=="none"){
        elemento.style.display="block";
        elemento.style.animation="visibilidad 800ms cubic-bezier(0,.73,.14,.92) forwards";
    }else{
        elemento.style.display="none";
    }
}

let t = 200;

let maquina_escribir = (nombre, cargo) =>{
    let arr_nombre = nombre.split('');
    let arr_cargo = cargo.split('');
    let i=0; let j=0;
    let escribir = setInterval(function(){
        if(i<arr_nombre.length){
            document.getElementById("nombre").innerHTML += arr_nombre[i];
            i++;
        }
        if(j<arr_cargo.length){
            document.getElementById("cargo").innerHTML += arr_cargo[j];
            j++;
        }
        if(i===arr_nombre.length && j===arr_cargo.length){
            clearInterval(escribir);
        }
    },t);
}

maquina_escribir("Luis Mariano Rivera", "Jr. Developer");





