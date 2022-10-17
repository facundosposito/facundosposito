// codigo para entrega 3 //
let productos ;
let comentarios = PRODUCT_INFO_COMMENTS_URL + localStorage.getItem('IDinfoP') + EXT_TYPE;

function mostrarlosproductos(productos){
      

   let infoDeLosProductos = ``; 
    
        infoDeLosProductos +=`
     
     <div class="cat-list-container">
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
                        ${mostrarlasimagenes(productos.images)}
                        <br><br>
                        <h4> Comentarios del producto</h4>
                        

                     </div> 
                     <small class="text-muted">` + productos.soldCount + `vendidos </small>
                     
                     </div>   
                 </div>
             </div>
         </div>`
         
          
        document.getElementById("mostrarProducto").innerHTML=infoDeLosProductos;
    }
    


    function mostrarlasimagenes(array){
        let imgPRODUCTOS = ``;
        for (let index = 0; index < array.length; index++) {
            const element = array[index];
            imgPRODUCTOS +=`<img src="${element}" style="width:200px;">`
            
        }
        return imgPRODUCTOS;
    }

    
    getJSONData(comentarios).then(function(resultObj){
        if (resultObj.status === "ok"){
            comentariosArray = resultObj.data;
            mostrarComentarios(comentariosArray);
        }else{
            alert("No se pueden ver los comentarios")
        }
    })
        
    function mostrarComentarios(array){
        let comentariosPRODUCTO =``;
        for (let index = 0; index < array.length; index++) {
            const element = array[index];
            comentariosPRODUCTO +=`<div class="cat-list-container"> ${element.user}   ${element.dateTime} ${mostrarEstrellas(element.score)} <br> ${element.description}
            <br><br> </div> `
   
        }
        document.getElementById("mostrarComentarios").innerHTML+= comentariosPRODUCTO;
    }
    
    
    function mostrarEstrellas(score) {
            addScore=``;       
            for (let i = 1; i < 6; i++){
                if(score>=i){
                    addScore +=`★`;
                }else{
                    addScore +=`☆`;
                }
            } 
            return addScore
    }
    function mostrarPR(array){
        let productosR =``;
        
        for (let index = 0; index < array.length; index++) {
            const element = array[index];
            productosR +=`<div class="cat-list-container"> ${element.relatedProducts} </div>`
            
   
        }
        mostrarPR(array)
        document.getElementById("ProductosRelacionados").innerHTML+= productosR;
    }
   
    



document.addEventListener('DOMContentLoaded',()=>{
    getJSONData(PRODUCT_INFO_URL+localStorage.getItem('IDinfoP')+EXT_TYPE).then(function(resultObj){
      if (resultObj.status === "ok")
      {
          productos = resultObj.data;
          mostrarlosproductos(productos);
      }
   });
})


