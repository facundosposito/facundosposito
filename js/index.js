document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("autos").addEventListener("click", function() {
        localStorage.setItem("catID", 101);
        window.location = "products.html"
    });
    document.getElementById("juguetes").addEventListener("click", function() {
        localStorage.setItem("catID", 102);
        window.location = "products.html"
    });
    document.getElementById("muebles").addEventListener("click", function() {
        localStorage.setItem("catID", 103);
        window.location = "products.html"
    });
    document.getElementById("herramientas").addEventListener("click", function() {
        localStorage.setItem("catID", 104);
        window.location = "products.html"
    });
    document.getElementById("computadoras").addEventListener("click", function() {
        localStorage.setItem("catID", 105);
        window.location = "products.html"
    });
    document.getElementById("vestimenta").addEventListener("click", function() {
        localStorage.setItem("catID", 106);
        window.location = "products.html"
    });
    document.getElementById("electrodomesticos").addEventListener("click", function() {
        localStorage.setItem("catID", 107);
        window.location = "products.html"
    });
    document.getElementById("deporte").addEventListener("click", function() {
        localStorage.setItem("catID", 108);
        window.location = "products.html"
    });
    document.getElementById("celulares").addEventListener("click", function() {
        localStorage.setItem("catID", 109);
        window.location = "products.html"
    });


});
/* desarrollo una funcion que nos obliga a inciar sesion para navegar
la pagina y guarda determinada informacion del usuario en localStorage */

document.addEventListener('DOMContentLoaded',()=>{
    let EmailUsuario = localStorage.getItem('EmailDelUsuario'); 
     
    if (EmailUsuario==null){
        alert ("Debes ingresar a tu cuenta para navegar");
        location.href='login.html';
   
    }else{
            /* me da un error en la consola que no pude solucionar 
            pero funciona todo de igualmanera */
        document.getElementById(EmailUsuario).innerHTML = EmailUsuario;
    }
})

/* preguntar a fernando */
function CerrarSesion(){
    localStorage.removeItem('EmailDelUsuario');
    
    document.getElementById("CerrarLaSesion").addEventListener("click", ()=>{
        CerrarLaSesion();
})

}
/* desarrollo codigo que lee la información del localstorage y la enviamos al html
para que el mismo pueda mostrarnos esa informacion en la barra de navegación */
let emailU= localStorage.getItem("EmailDelUsuario");

document.getElementById('CorreoDelUser').innerHTML=emailU
localStorage.getItem('EmailDelUsuario'); 


