let urljson ="https://japceibal.github.io/emercado-api/cats_products/101.json";
let productos = []
//obtener json url//
  
//Obtenemos todos los Json de todas las categorias de productos//
 document.addEventListener('DOMContentLoaded',()=>{
  getJSONData(PRODUCTS_URL+localStorage.getItem('catID')+EXT_TYPE).then(function(resultObj){
    if (resultObj.status === "ok")
    {
        productos = resultObj.data.products;
        mostrarlosproductos(productos);
    }
 });
 document.getElementById('botonFiltro').addEventListener('click',()=>{
  filtrarproductos();
 })
 
 document.getElementById('botonLimpiarFiltro').addEventListener('click',()=>{
  limpiarFiltros();
 })
 
 document.getElementById('sortAsc').addEventListener('click',()=>{
  ordenAscendente();
 })

 document.getElementById('sortDesc').addEventListener('click',()=>{
  ordenDescendente();
 })

 document.getElementById('sortByCount').addEventListener('click',()=>{
  ordenRelevancia();
 })
 
})

    // codigo para mostrar los diferentes productos //
  const todoslosproductos = "PRODUCTS_URL" + localStorage.getItem('catID') + "EXT_TYPE";

    //obtener info json y genero html -innerHTML-//
    function mostrarlosproductos(array){
      
   
       let listaautos = ``;
        for(let i = 0; i <array.length; i++) {
           let productos = array[i]
          listaautos +=`
        
        <div onclick="productInfo(${productos.id})"  "class="list-group-item list-group-item-action">
            <div class="row">
                <div clas="col-3">
                    <img src="` + productos.image + `" alt="product image" class="img-thumbnail"> 
                </div>
                <div class="col">
                    <div class="d-flex  justify-content-between">
                        <div class="mb-1">
                            <h4>`+ productos.name +` - `+productos.currency +` ` + productos.cost+`</h4>
                            <p> `+ productos.description + `</p>
                        </div> 
                        <small class="text-muted">` + productos.soldCount + `vendidos </small>
                        </div>   
                    </div>
                </div>
            </div>` 

            document.getElementById("cat-list-container").innerHTML = listaautos;
    }
}

/* desarrollo codigo que lee la información del localstorage y la enviamos al html
para que el mismo pueda mostrarnos esa informacion en la barra de navegación */
let emailU= localStorage.getItem("EmailDelUsuario");

document.getElementById('CorreoDelUser').innerHTML=emailU
localStorage.getItem('EmailDelUsuario'); 


 /* Desarollo el codigo para  el punto 3 */
 
function filtrarproductos (){
  let precioMinimo = "" ;
  let precioMaximo = "" ;

  precioMinimo = document.getElementById('rangoFiltroMinimo').value;
  precioMaximo = document.getElementById('rangoFiltroMaximo').value;

  let filtros = productos.filter(pFiltros=>pFiltros.cost >= precioMinimo && pFiltros.cost <= precioMaximo)
  mostrarlosproductos(filtros);
}

function limpiarFiltros(){
  document.getElementById('rangoFiltroMinimo').value = "";
  document.getElementById('rangoFiltroMaximo').value = "";

  mostrarlosproductos(productos);
  
}


function ordenDescendente(){
  ordenProductos = productos.slice(0,productos.length);
  ordenProductos.sort((producto1, producto2)=>producto2.cost-producto1.cost);
  mostrarlosproductos(ordenProductos);
}

function ordenAscendente(){
  ordenProductos = productos.slice(0,productos.length);
  ordenProductos.sort((producto1, producto2)=>producto1.cost-producto2.cost);
  mostrarlosproductos(ordenProductos);
}

function ordenRelevancia(){
  pordenProductos = productos.slice(0,productos.length);
  ordenProductos.sort((producto1, producto2)=>producto2.soldCount-producto1.soldCount);
  mostrarlosproductos(ordenProductos);
}



 /* DESAFIATE busqueda en tiempo real 

let ProductosFiltrados = [];

function FyB(){
  let busquedarealizada = document.getElementById("BuscadorProductos").value;
  
  let ProductoBuscados = listado.filter( productos => {
    return productos.toLowerCase().indexOf(busquedarealizada.toLowerCase()) > -1;
  })
  
  function mostrarproductos(productos){
   
    
  }

  

  document.getElementById('BuscadorProductos').addEventListener('keyup',()=>{
  verificacion();
  })

}
*/
/* CODIGO PARA ENTREGA 3 */
function productInfo(id){
  localStorage.setItem('IDinfoP', id);
  window.location = "product-info.html";
}
