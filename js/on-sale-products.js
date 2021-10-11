const onSaleProducts = [
   {
      id: 1,
      name: "Dowson DDR100 Acoustic Guitar",
      img: "img/dowsonddr100.jpg",
      price: 200
   },
   {
      id: 2,
      name: "Dowson DDR100 Acoustic",
      img: "img/dowsonddr100.jpg",
      price: 200
   },
   {
      id: 2,
      name: "Dowson DDR100",
      img: "img/dowsonddr100.jpg",
      price: 200
   },
   {
      id: 3,
      name: "Dowson",
      img: "img/dowsonddr100.jpg",
      price: 200
   }
]

function renderProducts(onSaleProducts) {
   const productContainer = document.querySelector('.swiper-wrapper');
   for (const product of onSaleProducts) {
      productContainer.innerHTML += 
      `<div class=swiper-slide>
       <img src="${product.img}" alt="${product.name}">
       <span>${product.name}</span>
       <span>${product.price}</span>
       <a href="#"><button>buy now</button></a>
      </div>`;
   }
}

renderProducts(onSaleProducts);