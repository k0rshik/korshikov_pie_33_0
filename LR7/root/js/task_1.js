function setHtml(data) {
    let products = data.products;
    for (i in data.products){
        let product = data.products[i];
        
        document.getElementById("test").innerHTML += 
        `<div class="shop__product">${product.title}<br>${product.category}<br><img src="${product.images[0]}" class="product__img"><br>${product.price}\$<div>`;
    }
    
}

async function getProducts(amount = 30){
    let pivo = await fetch('https://dummyjson.com/products?limit=' + amount).then(res => res.json()).then(res=>setHtml(res));
}

getProducts(30);
