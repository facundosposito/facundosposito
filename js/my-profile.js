function guardarcambios (){
    // Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()
}
document.addEventListener("DOMContentLoaded", ()=>{
    document.getElementById("botonguardar").addEventListener("click", ()=>{
  
        guardarcambios()
        datosuser()
    })

}) 




function datosuser (){
    
    let pnombre = document.getElementById('primernombre').value;
    let snombre = document.getElementById('segundonombre').value;
    let papellido = document.getElementById('primerapellido').value;
    let sapellido = document.getElementById('segundoapellido').value;
    let num = document.getElementById('telefono').value;
    
    
    if(pnombre==="" || snombre==="" || papellido==="" || sapellido==="" || num===""){
        document.getElementById('primernombre').classList.add
        document.getElementById('segundonombre').classList.add
        document.getElementById('primerapellido').classList.add
        document.getElementById('segundoapellido').classList.add
        document.getElementById('telefono').classList.add
        alert("entrealif")
    }else{ 
        localStorage.setItem('primernombre', pnombre);
        localStorage.setItem('segundonombre', snombre);
        localStorage.setItem('primerapellido', papellido);
        localStorage.setItem('segundoapellido', sapellido);
        localStorage.setItem('telefono', num);
        alert("entrealelse")
    }
    
}