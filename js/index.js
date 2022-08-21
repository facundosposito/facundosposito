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
    document.addEventListener('DOMContentLoaded',()=>{
        let email = sessionStorage.getItem('email');

        if (email==null){
            alert ("Debes ingresar a tu cuenta para navegar");
            location.href='login.html';
        }else{
        
            document.getElementById('email').innerHTML=email;
        }

        

    })
});