{
    
}

function prepararDatosParaEnviar() {
    const usuario = "username123";  // Este debería ser obtenido de la sesión del usuario o autenticación
    const fecha = new Date().toISOString();  // Fecha actual en formato ISO

    let totalPedido = 0;
    const productos = carrito.map(item => {
        const totalLinea = item.precio * item.cantidad;
        totalPedido += totalLinea;
        return {
            nombreProducto: item.nombreProducto,
            precioUnitario: item.precio,
            cantidad: item.cantidad,
            totalLinea: totalLinea
        };
    });

    const datosPedido = {
        usuario,
        fecha,
        productos,
        totalPedido
    };

    return datosPedido;
}

function enviarPedido() {
    const datosPedido = prepararDatosParaEnviar();

    fetch('/api/pedidos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(datosPedido)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Pedido guardado:', data);
        alert('Pedido realizado con éxito');
    })
    .catch(error => {
        console.error('Error al realizar el pedido:', error);
        alert('Error al realizar el pedido');
    });
}
