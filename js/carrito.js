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
        <p>cantidad: <button id="restar">-</button>${product.cantidad}<button id="sumar">+</button></p>
        <span>= $${product.cantidad * product.precio}</span>
        <button id="eliminar"><i class="bi bi-x"></i></button>
        `;
        
        modalContainer.append(carritoContent);

        const restarBtn = carritoContent.querySelector("#restar");
        const sumarBtn = carritoContent.querySelector("#sumar");

        restarBtn.addEventListener("click", () => {
            product.cantidad !=1 ? product.cantidad-- : product.cantidad == 1;
            pintarCarrito();  
            saveLocal();
        });

        sumarBtn.addEventListener("click", () => {
                product.cantidad++;     
                pintarCarrito();
                saveLocal();
        });

        const eliminar = carritoContent.querySelector("#eliminar");
        eliminar.addEventListener("click", () => {
            eliminarProducto(product.id);
        })

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

const eliminarProducto = (id) => {
    const foundId = carrito.find((element) => element.id === id);

    carrito = carrito.filter((carritoId) => {
        return carritoId !== foundId;
    });
    carritoCounter();
    saveLocal();
    pintarCarrito();
};

const carritoCounter = () => {

    const carritoLength = carrito.length;

    localStorage.setItem("carritoLength", JSON.stringify(carritoLength));

    cantidadCarrito.innerText = JSON.parse(localStorage.getItem("carritoLength"));
};

carritoCounter();