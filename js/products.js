let urljson ="https://japceibal.github.io/emercado-api/cats_products/101.json";
//obtener json url//
let obtenerJSON = async url => {
    const response = await fetch(url);
    if(!response.ok)
      throw new Error(response.statusText);
  
    const data = response.json();
    return data;
  }
  
  
//Obtenemos todos los Json de todas las categorias de productos//
  obtenerJSON(PRODUCTS_URL + localStorage.getItem('catID') + EXT_TYPE).then(data => {
    
    console.log(data);
  
    // codigo para mostrar los diferentes productos //
  const todoslosproductos = "PRODUCTS_URL" + localStorage.getItem('catID') + "EXT_TYPE";

    //obtener info json y genero html -innerHTML-//
   let listaautos = ``;
    for(let i = 0; i <data.products.length; i++) {
        listaautos +=`
        
        <div class="list-group-item list-group-item-action">
            <div class="row">
                <div clas="col-3">
                    <img src="` + data.products[i].image + `" alt="product image" class="img-thumbnail"> 
                </div>
                <div class="col">
                    <div class="d-flex  justify-content-between">
                        <div class="mb-1">
                            <h4>`+ data.products[i].name +` - `+data.products[i].currency +` ` +data.products[i].cost+`</h4>
                            <p> `+ data.products[i].description + `</p>
                        </div> 
                        <small class="text-muted">` + data.products[i].soldCount + `vendidos </small>
                        </div>   
                    </div>
                </div>
            </div>` 

            document.getElementById("cat-list-container").innerHTML = listaautos;
    }
}

  ).catch(error => {
    console.error(error);
  });

 /* Desarollo el codigo para  el punto 3 */
 
 /* DESAFIATE Filtro y busqueda en tiempo real */

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

/* desarrollo codigo que lee la información del localstorage y la enviamos al html
para que el mismo pueda mostrarnos esa informacion en la barra de navegación */
let emailU= localStorage.getItem("EmailDelUsuario");

document.getElementById('CorreoDelUser').innerHTML=emailU
localStorage.getItem('EmailDelUsuario'); 

