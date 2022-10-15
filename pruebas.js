const listaDeProductos = [
    {
        id: 1,
        nombre: "Manzana",
        precio: 100,
        stock: 10
    },
    {
        id: 2,
        nombre: "Cebolla",
        precio: 120,
        stock: 10
    },
    {
        id: 3,
        nombre: "Pera",
        precio: 210,
        stock: 102,
    },
    {
        id: 4,
        nombre: "Frutilla",
        precio: 600,
        stock: 1
    },
    {
        id: 5,
        nombre: "Naranja",
        precio: 80,
        stock: 12
    }
]

let catalog = document.getElementById('items')//cards de productos 
let cartList = document.getElementById('carrito') // es un ul
let buttonEmpty = document.getElementById('boton-vaciar') // boton clean
let totalValue = document.getElementById('total') //calcular total 
let cart = []

buttonEmpty.addEventListener('click', emptyButtonHandler) //llamo a vaciar el carrito cuando hago click en el boton 

loadCartFromStorage() // guardar en el storage
renderCart()


listaDeProductos.forEach((prod) => {
    let container = document.createElement('div')
    container.classList.add('card', 'col-sm-4')
    //Body
    let cardBody = document.createElement("div")
    cardBody.classList.add('card-body')
    //Title
    let cardTitle = document.createElement("h5")
    cardTitle.classList.add('card-title')
    cardTitle.innerText = prod.nombre
    //Precio
    let cardPrice = document.createElement("p")
    cardPrice.classList.add('card-text')
    cardPrice.innerText = `$${prod.precio}`
    //Stock
    let cardStock = document.createElement("p")
    cardStock.classList.add('card-text')
    cardStock.innerText = `Stock: ${prod.stock}`
    //Button
    let cardButton = document.createElement("button")
    cardButton.classList.add('btn', 'btn-primary')
    cardButton.innerText = `Comprar`
    cardButton.setAttribute('mark', prod.id)
    cardButton.addEventListener('click', addProdToCart)

    cardBody.append(cardTitle)
    cardBody.append(cardPrice)
    cardBody.append(cardStock)
    cardBody.append(cardButton)
    container.append(cardBody)
    catalog.append(container)
})

function addProdToCart(event) {
    cart.push(event.target.getAttribute('mark'))
    renderCart()
}

function renderCart() { // esto actualiza el carrito 

    saveCartToStorage() // guardar en el storage

    cartList.innerHTML = '' // vacio el carrito 

    let cartWithoutRepeatedElements = [...new Set(cart)] //esto hace que los elemntos no se dupliquen y combierte al objeto en una array 

    cartWithoutRepeatedElements.forEach((itemId) => {
        let item = listaDeProductos.filter((producto) => {
            return producto.id === parseInt(itemId)
        })
        let quantity = cart.reduce((total, id) => {
            return id === itemId ? total += 1 : total
        }, 0)// calculo la cantidad de productos que compro


        let linea = document.createElement('li')
        linea.classList.add('list-group-item', 'text-right', 'mx-2')
        linea.innerText = `${quantity} x ${item[0].nombre} - $${item[0].precio}`

        let buttonDelete = document.createElement('button')
        buttonDelete.classList.add('btn', 'btn-danger', 'mx-5')
        buttonDelete.innerText = 'X'
        buttonDelete.dataset.item = itemId
        buttonDelete.addEventListener('click', deleteProduct)

        linea.append(buttonDelete)
        cartList.append(linea)
    })

    totalValue.innerText = calculateTotalPrice()
}

function deleteProduct(event) {
    let id = event.target.dataset.item
    cart = cart.filter((cartId) => {
        return cartId != id
    })
    renderCart()

}

function emptyButtonHandler() {
    cart = []
    cartList.innerHTML = ''
    totalValue.innerText = 0
}// funcion para vaciar el carrito

function calculateTotalPrice() {
    return cart.reduce((total, itemId) => {
        let item = listaDeProductos.filter((producto) => {
            return producto.id === parseInt(itemId)
        })

        return total + item[0].precio
    }, 0)
}

function saveCartToStorage() {
    localStorage.setItem('cart', JSON.stringify(cart))
}

function loadCartFromStorage() {
    if (localStorage.getItem('cart') !== null) {
        cart = JSON.parse(localStorage.getItem('cart'))
    }
}  // funcion para guardar en el storage 