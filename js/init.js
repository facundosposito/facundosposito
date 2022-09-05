const CATEGORIES_URL = "https://japceibal.github.io/emercado-api/cats/cat.json";
const PUBLISH_PRODUCT_URL = "https://japceibal.github.io/emercado-api/sell/publish.json";
const PRODUCTS_URL = "https://japceibal.github.io/emercado-api/cats_products/";
const PRODUCT_INFO_URL = "https://japceibal.github.io/emercado-api/products/";
const PRODUCT_INFO_COMMENTS_URL = "https://japceibal.github.io/emercado-api/products_comments/";
const CART_INFO_URL = "https://japceibal.github.io/emercado-api/user_cart/";
const CART_BUY_URL = "https://japceibal.github.io/emercado-api/cart/buy.json";
/* cree constantes para cada productos */
const autos_URL ="https://japceibal.github.io/emercado-api/cats_products/101.json "
const juguetes_URL ="https://japceibal.github.io/emercado-api/cats_products/102.json"
const muebles_URL ="https://japceibal.github.io/emercado-api/cats_products/103.json"
const herramientas_URL ="https://japceibal.github.io/emercado-api/cats_products/104.json"
const computadoras_URL ="https://japceibal.github.io/emercado-api/cats_products/105.json"
const vestimenta_URL ="https://japceibal.github.io/emercado-api/cats_products/106.json"
const electrodomesticos_URL ="https://japceibal.github.io/emercado-api/cats_products/107.json"
const deporte_URL ="https://japceibal.github.io/emercado-api/cats_products/108.json"
const celulares_URL ="https://japceibal.github.io/emercado-api/cats_products/109.json"
const EXT_TYPE = ".json";

let showSpinner = function(){
  document.getElementById("spinner-wrapper").style.display = "block";
}

let hideSpinner = function(){
  document.getElementById("spinner-wrapper").style.display = "none";
}

let getJSONData = function(url){
    let result = {};
    showSpinner();
    return fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      }else{
        throw Error(response.statusText);
      }
    })
    .then(function(response) {
          result.status = 'ok';
          result.data = response;
          hideSpinner();
          return result;
    })
    .catch(function(error) {
        result.status = 'error';
        result.data = error;
        hideSpinner();
        return result;
    });
}

// desarollo una variable para que muestre todos los productos //
let showallproducts = localStorage.getItem('catID');
