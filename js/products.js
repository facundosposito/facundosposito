let urljson ="https://japceibal.github.io/emercado-api/cats_products/101.json";
//obtener json url//
let obtenerJSON = async url => {
    const response = await fetch(url);
    if(!response.ok)
      throw new Error(response.statusText);
  
    const data = response.json();
    return data;
  }
//funcion que despliega lista de productos//
  obtenerJSON(urljson).then(data => {
    
  
    console.log(data);
  
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
                    <div class="d-flex w-100 justify-content-between">
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
//devolucion de errores en consola//
  ).catch(error => {
    console.error(error);
  });


