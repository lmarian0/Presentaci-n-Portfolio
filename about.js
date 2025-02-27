//Aparicion de respuestas a las preguntas cuando se clickea
function visible(elementoid){
    let elemento = document.getElementById(elementoid);
    let estilo = window.getComputedStyle(elemento);
    console.log(estilo.display);
    if(estilo.display=="none"){
        document.getElementById("p1").style.display="none";
        document.getElementById("p2").style.display="none";
        document.getElementById("p3").style.display="none";
        elemento.style.display="block";
        elemento.style.animation="visibilidad 800ms cubic-bezier(0,.73,.14,.92) forwards";
    }else{
        elemento.style.display="none";
    }
}
//tiempo entre escritura de cada caracter
let t_carac = 200;
//tiempo entre ejecuciones de la funcion
let t_ejec = 8000;
//Funcion recursiva para escritura de nombre y cargo del perfil
let maquina_escribir = (nombre, cargo) =>{
    let arr_nombre = nombre.split('');
    let arr_cargo = cargo.split('');
    let i=0; let j=0;
    let escribir = setInterval(function(){
        if(i<arr_nombre.length){
            document.getElementById("nombre").innerHTML += arr_nombre[i];
            i++;
        }
        setTimeout(() => {
            if(j<arr_cargo.length){
                document.getElementById("cargo").innerHTML += arr_cargo[j];
                j++;
            }
        }, (arr_nombre.length+1)*t_carac);

        if(i===arr_nombre.length && j===arr_cargo.length){
            clearInterval(escribir);
            setTimeout(() => {
                document.getElementById("nombre").innerHTML="";
                document.getElementById("cargo").innerHTML="";
                maquina_escribir(nombre, cargo);
            }, t_ejec);
        }
    },t_carac);
}

//Llamada a la funcion 
maquina_escribir("Luis Mariano Rivera", "Jr. Developer");




