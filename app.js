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
    modalContainer.innerHTML = "";
    modalContainer.style.display = "block";
    modalContainer.classList.add("modal-container-active");
    
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

    modalBtn.addEventListener("click", () => {
        modalContainer.classList.remove("modal-container-active");
        modalContainer.style.display = "none";
    })
    
    modalBtn.className = "modal-header-btn";
    modalHeader.append(modalBtn);

    carrito.forEach((product) => {
        let carritoContent = document.createElement("div");
        carritoContent.className = "modal-content";
        carritoContent.innerHTML = ` 
        <img src="${product.img}">
        <h3>${product.nombre}</h3>
        <span>$${product.precio}</span>
        `;

        modalContainer.append(carritoContent);
    });

    const total = carrito.reduce((acc, el) => acc + el.precio, 0);

    const totalBuying = document.createElement("div");
    totalBuying.className = "total-content"
    totalBuying.innerHTML = `Total a pagar: $${total}.`;

    modalContainer.append(totalBuying);
});
