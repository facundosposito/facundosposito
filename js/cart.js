let urlcarrito ="https://japceibal.github.io/emercado-api/user_cart/25801.json"

document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(urlcarrito).then(function(resultObj){
        if (resultObj.status === "ok"){
            pdcarrito = resultObj.data
            mostrarinfocarrito(pdcarrito.articles)
            
        }
    });


function mostrarinfocarrito(pdcarrito){

        let icarrito="";
    
        for(let i=0; i<pdcarrito.length; i++){
            let producto=pdcarrito[i];
            icarrito +=`<tr><td><img src="${producto.image}"style="width:80px;">  ${producto.name}</td><td name='precio'>${producto.unitCost}</td><td><input name='cantidad' type='number' value=${producto.count} onchange='calcular()'></td><td name='subtotal' id='sub${i}'>${producto.unitCost*producto.count} </td></tr> `
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
    }
   }
   
   document.addEventListener('DOMContentLoaded',()=>{
       getJSONData('products.json').then( resultado=>{
           if (resultado.status=="ok"){
                arrayProducts = resultado.data;
                   mostrar(arrayProducts);                
           }
       })
    })