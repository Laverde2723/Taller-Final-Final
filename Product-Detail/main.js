import { traerProductos } from "../Products/firebase.js";

const stars = document.querySelectorAll('.star');

stars.forEach(function(star,index) {
    star.addEventListener('click', function() {
        for (let i=0; i<=index; i++){
            stars[i].classList.add('checked');
        }
        for (let i=index+1; i<stars.length; i++){
            stars[i].classList.remove('checked');
        }
    })
})

const botones = document.querySelectorAll('.boton');

botones.forEach((boton) => {
  console.log('xd');
  boton.addEventListener('click', () => {
    
    botones.forEach((boton) => {
      boton.classList.remove('seleccionado');
    });
    boton.classList.add('seleccionado');
  });
});

const botones2 = document.querySelectorAll('.botonn');

botones2.forEach((botonn) => {
  botonn.addEventListener('click', () => {
    botones2.forEach((botonn) => {
      botonn.classList.remove('seleccionado');
    });
    botonn.classList.add('seleccionado');
  });
});


let allProducts = [];

arrayProducts()

async function arrayProducts() {
    /*let response = await fetch("https://apimocha.com/nathajson/products")
    let data = await response.json()
    data.forEach(element => {
        allProducts.push(element)
    })*/
    allProducts = await traerProductos()

    let url = window.location.search
let paras = new URLSearchParams(url)
let productId = paras.get('id').replace('"',"")

let product = allProducts.find((item)=>{
    let compare = item.id
    console.log(compare);
    return compare === productId;
})
console.log(product);

let container = document.getElementById('container')

container.innerHTML=`
<section-component></section-component>
`

const boton = document.querySelector('#carrito');

boton.addEventListener('click', () => {
  console.log('Producto añadido al carrito');
});

const openModal = document.querySelector('#carrito');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.modal__close');

openModal.addEventListener('click', (e)=>{
  e.preventDefault();
  modal.classList.add('modal--show');
});

closeModal.addEventListener('click', (e)=>{
  e.preventDefault();
  modal.classList.remove('modal--show');
});
}


