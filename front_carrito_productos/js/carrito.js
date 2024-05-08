

function finalizarCompra() {
    console.log('Finalizar compra:', JSON.stringify(carrito));
    sessionStorage.clear();
    alert('Compra finalizada');
}

    
function agregarAlCarrito(nombreProducto, precio) {
    const indice = carrito.findIndex(item => item.nombreProducto === nombreProducto);
    if (indice !== -1) {
        carrito[indice].cantidad++;
    } else {
        carrito.push({ nombreProducto, precio, cantidad: 1 });
    }
    guardarCarrito();
    mostrarCarrito();
}
function guardarCarrito() {
    sessionStorage.setItem('carrito', JSON.stringify(carrito));
}

function eliminarDelCarrito(index) {
    carrito.splice(index, 1);
    guardarCarrito();
    mostrarCarrito();
}

function mostrarCarrito() {
    const carritoGuardado = sessionStorage.getItem('carrito');
    const itemsCarrito = document.getElementById('itemsCarrito');
    itemsCarrito.innerHTML = '';
    carrito.forEach((item, index) => {
        itemsCarrito.innerHTML += `<tr>
            <td>${item.nombreProducto}</td>
            <td>$${item.precio.toFixed(2)}</td>
            <td>${item.cantidad}</td>
            <td>$${(item.precio * item.cantidad).toFixed(2)}</td>
            <td><button onclick="eliminarDelCarrito(${index})">Eliminar</button></td>
        </tr>`;
    });
    calcularTotales();
}

function calcularTotales() {
    let subtotalValor = carrito.reduce((sum, item) => sum + (item.precio * item.cantidad), 0);
    document.getElementById('subtotal').innerHTML = subtotalValor.toFixed(2);
    document.getElementById('total').innerHTML = (subtotalValor * 1.1).toFixed(2); // Asumiendo un 10% de impuestos
}





