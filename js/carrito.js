const pintarCarrito = () =>{

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
        <p>cantidad: <button id="menos">-</button>${product.cantidad}<button id="mas">+</button></p>
        <span>= $${product.cantidad * product.precio}</span>
        `;
        
        modalContainer.append(carritoContent);

        const eliminar = document.createElement("Button");
        eliminar.className = "eliminar-product";
        eliminar.setAttribute("id","eliminar");
        eliminar.innerHTML = `<i class="bi bi-x"></i>`;

        carritoContent.append(eliminar);
        eliminar.addEventListener("click", eliminarProducto); 
    });
    
    const total = carrito.reduce((acc, el) => acc + el.precio * el.cantidad, 0);
    
    const totalBuying = document.createElement("div");
    totalBuying.className = "total-content"
    totalBuying.innerHTML = `Total a pagar: $${total}.`;
    
    modalContainer.append(totalBuying);
    modalBtn.className = "modal-close";
    
    modalContainer.append(modalBtn);
    
};

verCarrito.addEventListener("click", pintarCarrito);

const eliminarProducto = () => {
    const foundId = carrito.find((element) => element.id);

    carrito = carrito.filter((carritoId) => {
        return carritoId !== foundId;
    });
    
    carritoCounter();
    pintarCarrito();
};

const carritoCounter = () => {

    const carritoLength = carrito.length;

    localStorage.setItem("carritoLength", JSON.stringify(carritoLength));

    cantidadCarrito.innerText = JSON.parse(localStorage.getItem("carritoLength"));
};

carritoCounter();