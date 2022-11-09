let urlcarrito ="https://japceibal.github.io/emercado-api/user_cart/25801.json"
let subtotalenvio = 0
let subtotalenvio2 = 0
let porcentaje = 0.05
document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(urlcarrito).then(function(resultObj){
        if (resultObj.status === "ok"){
            pdcarrito = resultObj.data
            mostrarinfocarrito(pdcarrito.articles)
            calcular()
            total()
        }
    });
    // document.getElementById('envios').addEventListener('click',()=>{
    //     let valorenvio = document.getElementsByName('envios').value
    //     calcularenvio (valorenvio)
    // } )

function mostrarinfocarrito(pdcarrito){

        let icarrito="";
    
        for(let i=0; i<pdcarrito.length; i++){
            let producto=pdcarrito[i];
            icarrito +=`<tr><td><img src="${producto.image}"style="width:80px;">  ${producto.name}</td><td name='precio'>${producto.unitCost}</td><td><input name='cantidad' type='number' min='1' value=${producto.count} onchange='calcular()'></td><td name='subtotal' id='sub${i}'>${producto.unitCost*producto.count} </td></tr> `
        }
        document.getElementById('mostrarinfocarrito').innerHTML=icarrito;
        
    }
})



function calcular(){
    let cantidades = document.getElementsByName('cantidad')
    let precios = document.getElementsByName('precio')
    let subtotales = document.getElementsByName('subtotal')
    
    for (let i=0; i<cantidades.length; i++){

        let subtotal = parseFloat(cantidades[i].value) * parseFloat(precios[i].innerHTML);
        subtotales[i].innerHTML=subtotal
        document.getElementById('subtotal2').innerHTML= subtotal;
        subtotalenvio=subtotal
        
    }
    calcularenvio(porcentaje)
    total()
   }

function calcularenvio(valorenvio){
    subtotalenvio2 = subtotalenvio*valorenvio
    document.getElementById('costoenvio').innerHTML= subtotalenvio2;
    total()
}

document.getElementById("premium").addEventListener("click", ()=>{
    porcentaje = 0.15 
    calcularenvio(porcentaje)
})

document.getElementById("express").addEventListener("click", ()=>{
    porcentaje = 0.07
    calcularenvio(porcentaje)
})

document.getElementById("standar").addEventListener("click", ()=>{
    porcentaje = 0.05
    calcularenvio(porcentaje)
})

function total (){
    let totalfinal = subtotalenvio2 + subtotalenvio
    document.getElementById("total").innerHTML= totalfinal
}

function validacioncompra (){
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

document.getElementById("botoncompra").addEventListener("click", ()=>{
    validacioncompra()
})

document.getElementById("credito").addEventListener("click", ()=>{
    imputtransferencia.disabled = true
    numtarj.disabled = false
    codseg.disabled = false
    ventarj.disabled = false

})

document.getElementById("transferencia").addEventListener("click", ()=>{
    imputtransferencia.disabled = false
    numtarj.disabled = true
    codseg.disabled = true
    ventarj.disabled = true
})

function validacionmodal(){
    let credito = document.getElementById('credito')
    let numtarjeta = document.getElementById('numtarj')
    let codigoseg = document.getElementById('codseg')
    let vencimiento = document.getElementById('ventarj')
    let transf = document.getElementById('transferenciaj')
    let numcuenta = document.getElementById('imputtransferencia')
}




