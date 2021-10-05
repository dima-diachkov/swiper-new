const onSaleProducts = [
   {
      id: 1,
      name: "Dowson DDR100 Acoustic Guitar",
      img: "img/dowsonddr100.jpg",
      price: 200
   },
   {
      id: 2,
      name: "Dowson DDR100 Acoustic Guitar",
      img: "img/dowsonddr100.jpg",
      price: 200
   },
   {
      id: 2,
      name: "Dowson DDR100 Acoustic Guitar",
      img: "img/dowsonddr100.jpg",
      price: 200
   },
   {
      id: 3,
      name: "Dowson DDR100 Acoustic Guitar",
      img: "img/dowsonddr100.jpg",
      price: 200
   }
]

function renderProducts(onSaleProducts) {
   const productContainer = document.querySelector('.conteiner');
   for (const product in onSaleProducts) {
      productContainer.innerHTML += 
      `<article class=swiper-slide>
       <img src="${product.img}" alt="${product.name}">
       <span>${product.name}</span>
       <span>${product.price}</span>
       <a href="#"><button>buy now</button></a>
      </article>`;
   }
}

renderProducts(onSaleProducts);