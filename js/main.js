const img1 = "../images/productos/top (1).webp";
const img2 = "../images/productos/top (2).webp";
const img3 = "../images/productos/top (3).webp";
const img4 = "../images/productos/remera (2).webp";
const img5 = "../images/productos/remera (1).webp";
const img6 = "../images/productos/remera (3).webp";
const img7 = "../images/productos/short.webp";
const img8 = "../images/productos/jean (1).webp";
const img9 = "../images/productos/jean (2).webp";
const img10 = "../images/productos/abrigo (1).webp";
const img11 = "../images/productos/abrigo (3).webp";
const img12 = "../images/productos/abrigo (2).webp";

//funcion para crear los productos
class Producto {
  constructor(id, nombre, precio, stock, tipo, temporada, img, cantidad) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
    this.tipo = tipo;
    this.temporada = temporada;
    this.imgUrl = img;
    this.cantidad = cantidad;
  }
}

//declaracion de productos
let productoA = new Producto(
  1,
  "Top Frunce",
  4500,
  50,
  "top",
  "primavera",
  img1,
  1
);
let productoB = new Producto(
  2,
  "Top Morley",
  3990,
  45,
  "top",
  "primavera",
  img2,
  1
);
let productoC = new Producto(
  3,
  "Top White",
  3000,
  48,
  "top",
  "primavera",
  img3,
  1
);
let productoD = new Producto(
  4,
  "Remera Dino",
  4200,
  25,
  "remera",
  "primavera",
  img4,
  1
);
let productoE = new Producto(
  5,
  "Remera Bicolor",
  3250,
  30,
  "remera",
  "primavera",
  img5,
  1
);
let productoF = new Producto(
  6,
  "Remera Green",
  3500,
  4,
  "remera",
  "invierno",
  img6,
  1
);
let productoG = new Producto(
  7,
  "Short Pink",
  3900,
  30,
  "short",
  "primavera",
  img7,
  1
);
let productoH = new Producto(
  8,
  "Jean Mom",
  5500,
  25,
  "jean",
  "primavera",
  img8,
  1
);
let productoI = new Producto(
  9,
  "Jean Wide",
  8900,
  2,
  "jean",
  "invierno",
  img9,
  1
);
let productoJ = new Producto(
  10,
  "Buzo Oversize",
  7500,
  5,
  "abrigo",
  "invierno",
  img10,
  1
);
let productoK = new Producto(
  11,
  "Campera Puffer",
  16500,
  5,
  "abrigo",
  "invierno",
  img11,
  1
);
let productoL = new Producto(
  12,
  "Chaleco Puffer",
  13200,
  2,
  "abrigo",
  "invierno",
  img12,
  1
);

//variable que guarda los productos
const productos = [
  productoA,
  productoB,
  productoC,
  productoD,
  productoE,
  productoF,
  productoG,
  productoH,
  productoI,
  productoJ,
  productoK,
  productoL,
];

const contenedorTienda = document.getElementById("contenedor-tienda"); //llamo al contenedor de la tienda
const contenedorCarrito = document.getElementById("cart-body"); //body del carrito
const vaciarCarrito = document.getElementById("vaciarCart"); //boton vaciar carrito
const contadorCarrito = document.getElementById("contadorCarrito"); //contador del carrito
const totalCarrito = document.getElementById("precioTotal"); //calcular el total

let cart = [];

document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("cart")) {
    cart = JSON.parse(localStorage.getItem("cart"));
    actualizarCarrito();
  }
});

vaciarCarrito.addEventListener("click", () => {
  cart.length = 0;
  Toastify({
    className: "toastify",
    text: "Vaciaste el carrito",
    duration: 1000,
    close: false,
    gravity: "top", 
    position: "left", 
    stopOnFocus: false, 
    style: {
      background: "rgb(255, 176, 231)",
    },
    onClick: function () {},
  }).showToast();
  actualizarCarrito();
});

productos.forEach((product) => {
  const div = document.createElement("div");
  div.classList.add("card");
  div.innerHTML = `
    <div class="card-img">
        <img src="${product.imgUrl}"" srcset="" alt="${product.nombre}">
    </div>
    <div class="card-info">
        <div class="card-name-precio">
        <h3 class="fuente">${product.nombre}</h3>
        <h4 class="fuente">$${product.precio}</h4>
        </div>
    </div>
    <button ref='' id="agregar${product.id}" class="card-button">Agregar al carrito
        </button>
        `;
  contenedorTienda.appendChild(div);
  const boton = document.getElementById(`agregar${product.id}`);
  boton.addEventListener("click", () => {
    agregarCarrito(product.id);
  });
});

// agregar al carrito
const agregarCarrito = (prodId) => {
    const existe = cart.find((product) => product.id === prodId);

    if (existe) {
        existe.cantidad++;
    } else {
        const item = productos.find((prod) => prod.id === prodId);
        cart.push(item);
    }

    Toastify({
        className: "toastify",
        text: "Agregaste un producto al carrito",
        duration: 1000,
        close: false,
        gravity: "top",
        position: "left",
        stopOnFocus: false,
        style: {
            background: "rgb(255, 176, 231)",
        },
        onClick: function () { },
    }).showToast();

    actualizarCarrito();
};


// eliminar producto del carrito
const eliminarDelCarrito = (prodId) => {
    const index = cart.findIndex((item) => item.id === prodId);

    if (index !== -1) {
        cart.splice(index, 1);
        actualizarCarrito();

        Toastify({
            className: "toastify",
            text: 'Eliminaste un producto',
            duration: 1000,
            close: false,
            gravity: "top",
            position: "left",
            stopOnFocus: false,
            style: {
                background: "rgb(255, 176, 231)",
            },
            onClick: function () { }
        }).showToast();
    }
};


// actualizar carrito
const actualizarCarrito = () => {
  contenedorCarrito.innerHTML = "";
  localStorage.setItem("cart", JSON.stringify(cart));
  cart.forEach((product) => {
    const div = document.createElement("div");
    div.classList.add("cart-card", "border");
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
        `;
    contenedorCarrito.appendChild(div);
  });
  contadorCarrito.innerText = cart.length;
  totalCarrito.innerText = cart.reduce(
    (acc, prod) => acc + prod.precio * prod.cantidad,
    0
  );
};
