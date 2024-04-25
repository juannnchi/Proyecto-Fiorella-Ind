const shopContent = document.getElementById("shopContent");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modalContainer");

let carrito = [];

productos.forEach((product) => {
    let content = document.createElement("div");
    content.className = "card"
    content.innerHTML = `
    <img src="${product.img}">
    <h3 class="card-title">${product.nombre}</h3>
    <span class="card-price">$${product.precio}</span>
    `;
    
    shopContent.append(content);
    let comprar = document.createElement("button");
    comprar.innerText = "Agregar al carrito";
    comprar.className = "card-btn";

    content.append(comprar);

    comprar.addEventListener("click",() => {
        carrito.push({
            id: product.id,
            nombre: product.nombre,
            img: product.img,
            precio: product.precio,
        });
        console.log(carrito);
    });
});

verCarrito.addEventListener("click", () => {
    
    const modalHeader = document.createElement("div");
    modalHeader.className = "modal-header";
    modalHeader.innerHTML = `
        <h1 class="modal-title">Carrito</h1>
    `;

    modalContainer.append(modalHeader);
    
    const modalBtn = document.createElement("button");
    modalBtn.innerHTML = `
        <i class="bi bi-x"></i>
    `;
    
    modalBtn.className = "modal-close";
    modalContainer.append(modalBtn);
});
