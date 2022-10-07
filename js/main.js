function Producto (nombre, precio, stock, tipo, temporada){
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
    this.tipo = tipo;
    this.temporada = temporada;
}

let productoA = new Producto('Top Adele', 999, 50, 'top', 'primavera');
let productoB = new Producto('Top Jazmin', 890, 45, 'top', 'primavera')
let productoC = new Producto('Remera Ruth', 1200, 15, 'remera', 'primavera')
let productoD = new Producto('Remera Caliz', 500, 2, 'remera', 'invierno')
let productoE = new Producto('Jean Tiza', 3100, 30, 'jean', 'primavera');
let productoF = new Producto('Jean Tiza', 2500, 20, 'jean', 'primavera');
let productoG = new Producto('Jean Lola', 2900, 0, 'jean', 'invierno')
let productoH = new Producto('Saquito Lila', 1800, 5, 'Saquito', 'invierno');

let productos = [productoA,productoB,productoC,productoD,productoE,productoF,productoG,productoH];

console.log(productos)