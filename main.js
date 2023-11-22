
document.addEventListener('DOMContentLoaded', function () {
  const listaCarrito = document.getElementById('cart-items');
  const totalElemento = document.getElementById('total');
  const botonesAgregarAlCarrito = document.querySelectorAll('.add-to-cart');

  
  const productos = [
    { id: 3, price: 1500.00, name: 'Sorrentinos', image: '/img/sorrentienda.jpg' },
    { id: 4, price: 1800.00, name: 'Ravioles', image: '/img/ravioltienda.jpg' },
    { id: 5, price: 1500.00, name: 'Ñoquis rellenos', image: '/img/ñoquipanceta.jpg' },
    { id: 6, price: 1300.00, name: 'Ñoquis', image: '/img/ñoqui.jpg' },
  ];  
  
  cargarCarrito();

  botonesAgregarAlCarrito.forEach(boton => {
    boton.addEventListener('click', agregarAlCarrito);
  });

  function agregarAlCarrito(evento) {
    const productoId = parseInt(evento.target.closest('li').getAttribute('data-id'));
    const productoSeleccionado = productos.find(producto => producto.id === productoId);

    if (productoSeleccionado) {
      agregarProductoAlCarrito(productoSeleccionado);
      actualizarTotal();
      guardarCarrito();
    }
  }

  function agregarProductoAlCarrito(producto) {
    const elementoCarrito = document.createElement('li');
    elementoCarrito.innerHTML = `
          <div class="product-item">
              <img src="${producto.image}" alt="${producto.name}">
              <p>${producto.name} - $${producto.price.toFixed(2)}</p>
              <button class="remove-from-cart">Eliminar</button>
          </div>`;
    elementoCarrito.setAttribute('data-id', producto.id);
    elementoCarrito.setAttribute('data-price', producto.price);

    listaCarrito.appendChild(elementoCarrito);
  }

  listaCarrito.addEventListener('click', function (evento) {
    if (evento.target.classList.contains('remove-from-cart')) {
      const elementoEliminar = evento.target.closest('li');
      elementoEliminar.parentNode.removeChild(elementoEliminar);
      actualizarTotal();
      guardarCarrito();
    }
  });

  function actualizarTotal() {
    const preciosElementosCarrito = Array.from(listaCarrito.children).map(item => parseFloat(item.getAttribute('data-price')));
    const total = preciosElementosCarrito.reduce((sum, precio) => sum + precio, 0).toFixed(2);
    totalElemento.textContent = `Total: $${ total }`;
    localStorage.setItem('totalCarrito', total);
  }

  function cargarCarrito() {
    const carritoGuardado = localStorage.getItem('carrito');
    const totalGuardado = localStorage.getItem('totalCarrito');

    if (carritoGuardado) {
      listaCarrito.innerHTML = carritoGuardado;
      totalElemento.textContent = `Total: $${ totalGuardado || '0.00' }`;
    }
  }

  function guardarCarrito() {
    localStorage.setItem('carrito', listaCarrito.innerHTML);
    actualizarTotal();
  }
});