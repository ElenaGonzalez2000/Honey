const productos = [productoA, productoC, productoE];



//simulando compra:

const mapProductos = productos.map((el) => el.nombre)
const mostrar = mapProductos.join('\n')
console.log(mostrar)

let alCarrito = prompt('puede elegir entre estos productos: \n' + mostrar + '\nEscriba el nombre del producto que quiere comprar o escriba 0 para salir');
switch (alCarrito) {
    case 'top adelle':
        let cuantosA = parseInt(prompt('por favor indique cuantos quiere'))
        if (cuantosA < productoA.stock) {
            console.log('el total de su compra seria de: $' + productoA.precio * cuantosA);
        }else {
            console.log('exedio el stock disponible, por favor vuelva a empezar')
        }
        break;
    case 'remera ruth':
        let cuantosC = parseInt(prompt('por favor indique cuantos quiere'))
        if (cuantosC < productoC.stock) {
            console.log('el total de su compra seria de: $' + productoC.precio * cuantosC);
        }else {
            console.log('exedio el stock disponible, por favor vuelva a empezar')
        }
        break;
        case 'jean tiza':
            let cuantosE = parseInt(prompt('por favor indique cuantos quiere'))
            if (cuantosE < productoE.stock) {
                console.log('el total de su compra seria de: $' + productoE.precio * cuantosE);
            }else {
                console.log('exedio el stock disponible, por favor vuelva a empezar')
            }
            break;
    default:
        break;
}