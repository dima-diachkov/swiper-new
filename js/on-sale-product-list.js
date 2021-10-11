async function getOnSaleProducts(productsUrl) {
    const response = await fetch(productsUrl);
    const onSaleProducts = await response.json();
}


function renderProducts(products) {
    const productContainer = document.querySelector('.swiper-wrapper');
    for (const product of products) {
        productContainer.innerHTML += 
            `<div class=swiper-slide>
                <img src="${product.img}" alt="${product.name}">
                <span>${product.name}</span>
                <span>${product.price}</span>
                <a href="#"><button>buy now</button></a>
            </div>`;
    }
}


async function loadAndRenderOnSaleProducts() {
    const products = getOnSaleProducts('on-sale-products.json');
    renderProducts(products);
}

loadAndRenderOnSaleProducts();
