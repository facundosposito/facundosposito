function login (){
    let usuario = document.getElementById('email').value;
    let clave = document.getElementById('clave').value;

    /* desarrollo un if que verifica si los campos estan rellenados si lo estan me redirige
    a nuestra pagina y sino nos muestra una alerta que nos avisa que no estamos ingresando los datos */
    if(usuario==="" || clave===""){
    alert("Debe ingresar todos los datos correctamente");
    }else{
        location.href='index.html';
    }
}

document.addEventListener('DOMContentLoaded',()=>{
    document.getElementById('botoni').addEventListener('click',()=>{
        login();
    })

})