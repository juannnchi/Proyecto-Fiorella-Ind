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
        `;
        
        modalContainer.append(carritoContent);
    });
    
    const total = carrito.reduce((acc, el) => acc + el.precio, 0);
    
    const totalBuying = document.createElement("div");
    totalBuying.className = "total-content"
    totalBuying.innerHTML = `Total a pagar: $${total}.`;
    
    modalContainer.append(totalBuying);
    modalBtn.className = "modal-close";
    
    modalContainer.append(modalBtn);
    
    let carritoContent = document.createElement("div");  
};

verCarrito.addEventListener("click", pintarCarrito);