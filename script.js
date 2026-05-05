// 1. Lista completa y personalizada de 18 productos
const productos = [
    { id: 1, nombre: "Soda San Jorge Clasica", precio: 1.20, img: "img/Galleta.webp" },
    { id: 2, nombre: "Chocogol Chocolate", precio: 1.50, img: "img/recreo.jpg" },
    { id: 3, nombre: "San jorge Vainilla Clasica", precio: 0.80, img: "img/vainilla.jpg" },
    { id: 4, nombre: "Rellenitas de Fresa", precio: 1.30, img: "img/fresa.jpg" },
    { id: 5, nombre: "San Jorge Animalitos", precio: 1.00, img: "img/animalitos.webp" },
    { id: 6, nombre: "San Jorge Picaras", precio: 1.50, img: "img/picaras.webp" },
    { id: 7, nombre: "San Jorge vainilla Gourmet", precio: 1.10, img: "img/mantequilla.png" },
    { id: 8, nombre: "San Jorge Integrales", precio: 1.40, img: "img/integral.jpg" },
    { id: 9, nombre: "San Jorge Coconut", precio: 1.10, img: "img/coco.webp" },
    { id: 10, nombre: "Rellenitas de Limón", precio: 1.00, img: "img/limon.jpg" },
    { id: 11, nombre: "San Jorge Sabrochas", precio: 1.60, img: "img/chispas.jpg" },
    { id: 12, nombre: "San Jorge Municion", precio: 0.90, img: "img/rosquitas.jpg" },
    { id: 13, nombre: "San Jorge Nubbe Agua", precio: 2.50, img: "img/barquillos.webp" },
    { id: 14, nombre: "Rellenitas de Menta", precio: 1.30, img: "img/menta.jpg" },
    { id: 15, nombre: "San Jorge Blackout", precio: 4.50, img: "img/blackout.jpg" },
    { id: 16, nombre: "San Jorge Saladitas", precio: 1.20, img: "img/saladitas.jpg" },
    { id: 17, nombre: "San Jorge Crackers Saladas", precio: 0.70, img: "img/crackers.jpg" },
    { id: 18, nombre: "San Jorge Mini Rondelas", precio: 1.50, img: "img/rondelas.png" }
];

// Nota: Hemos eliminado el bucle 'for' para tener control total de cada producto.

const grid = document.getElementById('productos-grid');
const modal = document.getElementById('compraModal');
let carrito = [];

function mostrarProductos() {
    if(!grid) return; 
    grid.innerHTML = ""; 
    
    productos.forEach(p => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <img src="${p.img}" alt="${p.nombre}" onerror="this.src='https://via.placeholder.com/200x200?text=Sin+Imagen'">
            <h3>${p.nombre}</h3>
            <p class="precio">S/ ${p.precio.toFixed(2)}</p>
            <button class="btn-add" onclick="agregarAlCarrito(${p.id})">Añadir al Carrito</button>
            <button class="btn-pay" onclick="pagarAhora(${p.id})">Pagar Ya</button>
        `;
        grid.appendChild(card);
    });
}

function pagarAhora(id) {
    const p = productos.find(prod => prod.id === id);
    if(p) {
        document.getElementById('modalImg').src = p.img;
        document.getElementById('modalTitle').innerText = p.nombre;
        modal.classList.add('active');
    }
}

function cerrarModal() {
    modal.classList.remove('active');
}

function confirmarCompra() {
    alert("¡Pedido procesado con éxito!");
    cerrarModal();
}

function agregarAlCarrito(id) {
    carrito.push(id);
    document.getElementById('cart-count').innerText = carrito.length;
}

window.addEventListener('DOMContentLoaded', mostrarProductos);