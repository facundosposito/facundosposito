// codigo para entrega 3 //
let productos ;
const infoProducto = "PRODUCT_INFO_URL" + localStorage.getItem('id') + "EXT_TYPE";
const COMENTARIOSDELPRODUCTO = "PRODUCT_INFO_COMMENTS_URL" + localStorage.getItem('id') + "EXT_TYPE";

function mostrarlosproductos(productos){
      
   let infoDeLosProductos = ``; 
    
        infoDeLosProductos +=`
     
     <div "class="cat-list-container">
         <div class="row">
             <div clas="col-3">
    
             </div>
             <div class="col">
                 <div class="d-flex  justify-content-between">
                     <div class="mb-1">
                         <h1>`+ productos.name +` <br> </h1>
                         <h4> Precio</h4>
                         <p>`+productos.currency +` ` + productos.cost+`</p>
                         <h4> Categoria</h4>
                         <p> `+productos.category +` </p>
                         <h4> Descripción del producto</h4>
                         <p> `+ productos.description + ` </p>
                         <h4> Imagenes del Producto</h4>
                     </div> 
                     <small class="text-muted">` + productos.soldCount + `vendidos </small>
                     </div>   
                 </div>
             </div>
         </div>` 

        document.getElementById("cat-list-container").innerHTML=infoDeLosProductos;
    }
    

    function mostrarlasimagenes(imagnesDelProducto){
        let imagenesDeLosProductos = ``;
        for(let img of imagnesDelProducto){
            imagenesDeLosProductos+=`<div class="col"><img src="${img}"></div>`;
        }
        

    }
    document.addEventListener("DOMContentLoaded", function(i){
        let idDeLosproductos = localStorage.getItem("catID")
            getJSONData(PRODUCT_INFO_URL+localStorage.getItem('catID')+EXT_TYPE).then(function(resultObj){
                if (resultObj.status === "ok"){
                    productos = resultObj.data;
                    mostrarlasimagenes(productos.images);
                     
                }
    })
    document.getElementById("cat-list-container").innerHTML=idDeLosproductos;
})



document.addEventListener('DOMContentLoaded',()=>{
    getJSONData(PRODUCT_INFO_URL+localStorage.getItem('catID')+EXT_TYPE).then(function(resultObj){
      if (resultObj.status === "ok")
      {
          productos = resultObj.data;
          mostrarlosproductos(productos);
      }
   });
})

