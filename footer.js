function copiar(){
    let email = document.getElementById("email");
    let email_info = email.innerText;
    navigator.clipboard.writeText(email_info).then(()=>{
        email.innerHTML="Copiado";
        setTimeout(() => {
            email.innerHTML="l.mariano.rivera22@gmail.com"
        }, 2000);
    }).catch(()=>{
        email.innerHTML="Error";
        setTimeout(() => {
            email.innerHTML="l.mariano.rivera22@gmail.com"
        }, 2000);
    });
}