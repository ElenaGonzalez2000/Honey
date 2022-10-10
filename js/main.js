//funcion para crear los productos
class Producto {
    constructor(nombre, precio, stock, tipo, temporada) {
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
        this.tipo = tipo;
        this.temporada = temporada;
    }
}

//declaracion de productos
let productoA = new Producto('Top Adele', 999, 50, 'top', 'primavera');
let productoB = new Producto('Top Jazmin', 890, 45, 'top', 'primavera')
let productoC = new Producto('Remera Ruth', 1200, 15, 'remera', 'primavera')
let productoD = new Producto('Remera Caliz', 1100, 2, 'remera', 'invierno')
let productoE = new Producto('Jean Tiza', 3100, 30, 'jean', 'primavera');
let productoF = new Producto('Jean Luna', 3500, 20, 'jean', 'primavera');
let productoG = new Producto('Jean Lola', 2900, 0, 'jean', 'invierno')
let productoH = new Producto('Saco Lila', 1800, 5, 'abrigo', 'invierno');
let productoI = new Producto('Campera Puffer', 6500, 0, 'abrigo', 'invierno');

const productos = [productoA,productoB,productoC,productoD,productoE,productoF,productoG,productoH, productoI];
console.log(productos)

//filtro para saber los productos con stock
const conStock = productos.filter((producto) => producto.stock > 0 );
console.log(conStock)

//filtro temporada de primavera
const temporadaPrimavera = productos.filter((producto) => producto.temporada == 'primavera');
console.log(temporadaPrimavera)

//filtro temporada invierno 
const temporadaInvierno = productos.filter((producto) => producto.temporada == 'invierno');
console.log(temporadaInvierno)

//filtros para dividir los productos entre precios :

const entre0y3mil = productos.filter((producto) => producto.precio > 0 && producto.precio <= 3000);
console.log(entre0y3mil)

const entre3mily5mil = productos.filter((producto) => producto.precio >= 3000 && producto.precio <= 5000);
console.log(entre3mily5mil)

const entre5mily10mil = productos.filter((producto) => producto.precio >= 5000 && producto.precio <= 10000);
console.log(entre5mily10mil)

//filtros por tipo de ropa:

const topsYRemeras = productos.filter((producto) => producto.tipo == 'top'|| producto.tipo == 'remera');
console.log(topsYRemeras)

const jeansYShorts = productos.filter((producto) => producto.tipo == 'jean' || producto.tipo == 'short');
console.log(jeansYShorts)

const abrigos = productos.filter((producto) => producto.tipo == 'abrigo');
console.log(abrigos)


//simulando carrito
const carrito = []
carrito.push(productoA.precio, productoB.precio, productoE.precio)
console.log(carrito)
const total = carrito.reduce ((acumulador, precio) => acumulador + precio, 0)
console.log(total)
