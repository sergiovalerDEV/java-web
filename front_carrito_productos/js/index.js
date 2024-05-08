    function mostrarProductos() {
        // Aquí va el fetch
        const contenedorProductos = document.getElementById('productos');
        productos.forEach(producto => {
            contenedorProductos.innerHTML += `<div class="producto">
                ${producto.nombre} - $${producto.precio.toFixed(2)}
                <button onclick="agregarAlCarrito('${producto.nombre}', ${producto.precio})">Agregar al carrito</button>
            </div>`;
        });
    }

        
    function cargarCarrito() {
        const carritoGuardado = sessionStorage.getItem('carrito');
        return carritoGuardado ? JSON.parse(carritoGuardado) : [];
    }
    
    const carrito = cargarCarrito();
    mostrarProductos();
    mostrarCarrito();

