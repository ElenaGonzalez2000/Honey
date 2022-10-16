const img1 = '../images/productos/top (1).webp'
const img2 = '../images/productos/top (2).webp'
const img3 = '../images/productos/top (3).webp'
const img4 = '../images/productos/remera (2).webp'
const img5 = '../images/productos/remera (1).webp'
const img6 = '../images/productos/remera (3).webp'
const img7 = '../images/productos/short.webp'
const img8 = '../images/productos/jean (1).webp'
const img9 = '../images/productos/jean (2).webp'
const img10 = '../images/productos/abrigo (1).webp'
const img11 = '../images/productos/abrigo (3).webp'
const img12 = '../images/productos/abrigo (2).webp'

//funcion para crear los productos
class Producto {
    constructor(id, nombre, precio, stock, tipo, temporada, img, cantidad) {
        this.id = id
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
        this.tipo = tipo;
        this.temporada = temporada;
        this.imgUrl = img
        this.cantidad = cantidad
    }
}

//declaracion de productos
let productoA = new Producto(1, 'Top Adelle', 999, 50, 'top', 'primavera', img1, 1);
let productoB = new Producto(2, 'Top Jazmin', 890, 45, 'top', 'primavera', img2, 1);
let productoC = new Producto(3, 'Top Ameli', 990, 48, 'top', 'primavera', img3, 1);
let productoD = new Producto(4, 'Remera Dino', 1200, 25, 'remera', 'primavera', img4, 1);
let productoE = new Producto(5, 'Remera Ruth', 1150, 30, 'remera', 'primavera', img5, 1);
let productoF = new Producto(6, 'Remera Mar', 1100, 4, 'remera', 'invierno', img6, 1);
let productoG = new Producto(7, 'Short Nute', 3100, 30, 'short', 'primavera', img7, 1);
let productoH = new Producto(8, 'Jean Luna', 3500, 25, 'jean', 'primavera', img8, 1);
let productoI = new Producto(9, 'Jean Lola', 2900, 2, 'jean', 'invierno', img9, 1)
let productoJ = new Producto(10, 'Buzo Lila', 1800, 5, 'abrigo', 'invierno', img10, 1);
let productoK = new Producto(11, 'Campera Puffer', 6500, 5, 'abrigo', 'invierno', img11, 1);
let productoL = new Producto(12, 'Chaleco Puffer', 6200, 3, 'abrigo', 'invierno', img12, 1);


//variable que guarda los productos
const productos = [productoA, productoB, productoC, productoD, productoE, productoF, productoG, productoH, productoI, productoJ, productoK, productoL];


//filtro para saber los productos con stock:
const conStock = productos.filter((producto) => producto.stock > 0);
//filtro temporada de primavera:
const temporadaPrimavera = productos.filter((producto) => producto.temporada == 'primavera');
//filtro temporada invierno:
const temporadaInvierno = productos.filter((producto) => producto.temporada == 'invierno');
//filtros para dividir los productos entre precios:
const entre0y3mil = productos.filter((producto) => producto.precio > 0 && producto.precio <= 3000);
const entre3mily5mil = productos.filter((producto) => producto.precio >= 3000 && producto.precio <= 5000);
const entre5mily10mil = productos.filter((producto) => producto.precio >= 5000 && producto.precio <= 10000);
//filtros por tipo de ropa:
const topsYRemeras = productos.filter((producto) => producto.tipo == 'top' || producto.tipo == 'remera');
const jeansYShorts = productos.filter((producto) => producto.tipo == 'jean' || producto.tipo == 'short');
const abrigos = productos.filter((producto) => producto.tipo == 'abrigo');



const contenedorTienda = document.getElementById('contenedor-tienda'); //llamo al contenedor de la tienda
const contenedorCarrito = document.getElementById('cart-body')//body del carrito
const vaciarCarrito = document.getElementById('vaciarCart')//boton vaciar carrito 
const contadorCarrito = document.getElementById('contadorCarrito')//contador del carrito
const totalCarrito = document.getElementById('precioTotal')//calcular el total

let cart = []

document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('cart')) {
        cart = JSON.parse(localStorage.getItem('cart'))
        actualizarCarrito()
    }
})

vaciarCarrito.addEventListener('click', () => {
    cart.length = 0
    actualizarCarrito()
})

//cards de productos en la pagina tienda
productos.forEach((product) => {
    const div = document.createElement('div')
    div.classList.add('card')
    div.innerHTML = `
    <div class="card-img">
        <img src="${product.imgUrl}"" srcset="" alt="${product.nombre}">
    </div>
    <div class="card-info">
        <div class="card-name-precio">
        <h3 class="fuente">${product.nombre}</h3>
        <h4 class="fuente">$${product.precio}</h4>
        </div>
        <button ref='' id="agregar${product.id}" class="card-button"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"class="bi bi-plus-circle add-card" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5  0    0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/></svg>
        </button>
    </div>
        `
    contenedorTienda.appendChild(div)
    const boton = document.getElementById(`agregar${product.id}`);
    boton.addEventListener('click', () => {
        agregarCarrito(product.id)
    })
})

// agregar al carrito
const agregarCarrito = (prodId) => {
    //cantidad del mismo elemento en el carrito
    const existe = cart.some(product => product.id === prodId)
    if (existe) {
        const product = cart.map(product => {
            if (product.id === prodId) {
                product.cantidad++
            }
        })
    } else {
        const item = productos.find((prod) => prod.id === prodId)
        cart.push(item)
        console.log(cart)
    }
    actualizarCarrito()
}


// eliminar producto del carrito 
const eliminarDelCarrito = (prodId) => {
    const item = productos.find((prod) => prod.id === prodId)
    const indice = cart.indexOf(item)
    cart.splice(indice, 1)
    actualizarCarrito()
}



// actualizar carrito
const actualizarCarrito = () => {
    contenedorCarrito.innerHTML = ''
    cart.forEach((product) => {
        const div = document.createElement('div')
        div.classList.add('cart-card')
        div.innerHTML = `
        <div class="cart-info-box">
            <img src="${product.imgUrl}"  alt="" srcset="">
            <div class="cart-info-product">
                <h5>${product.nombre}</h5>
                <h6>$${product.precio}</h6>
                <p class="cantidadCart">✖ <span id="cantidad">${product.cantidad}</span></p>
            </div>
        </div>
        <div class="cart-buttons">
            <button onclick="eliminarDelCarrito(${product.id})" class="cart-button-delate">eliminar</button>
        </div>
        `
        contenedorCarrito.appendChild(div)
        localStorage.setItem('cart', JSON.stringify(cart))
    })
    contadorCarrito.innerText = cart.length
    totalCarrito.innerText = cart.reduce((acc, prod) => acc + prod.precio*prod.cantidad, 0)
}