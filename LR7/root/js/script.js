const shop = document.getElementById("shop");
const template = document.getElementById("product");
const amount = 30;
let page = 1;

function updatePage(n) {
    page+=n;
    if (page < 1) {
        page = 1;
        return; 
    }
    document.getElementById("page_number").innerHTML = page;
    clearTemplates();
    getProducts();
}

function fillTemplates() {
    for (let i = 0; i < amount; i++) {
        shop.append(template.content.cloneNode(true))
    }
}

function clearTemplates() {
    let products = shop.getElementsByClassName("product");
    for (let i = 0; i < products.length; i++) {
        products[i].replaceWith(template.content.cloneNode(true));
    }
}


function fillData(data) {
    let products = shop.getElementsByClassName("product");
    for (let i = 0; i < products.length; i++) {
        if (i < data.products.length){
            products[i].getElementsByClassName("product__title")[0].innerHTML = data.products[i].title;
            products[i].getElementsByClassName("product__category")[0].innerHTML = data.products[i].category;
            products[i].getElementsByClassName("product__price")[0].innerHTML = data.products[i].price + '$';
            products[i].getElementsByClassName("product__image")[0].setAttribute("src", data.products[i].images[0]);
        }
        else
            products[i].style.display = 'none';
        
    }

}

async function getProducts() {
    await fetch(`https://dummyjson.com/products?limit=${amount}&skip=${amount*(page-1)}&select=title,price,category,images`).then(res => res.json()).then(res=>fillData(res));
}


fillTemplates();
getProducts();