const shopContent = document.getElementById("shopContent");

let carrito = [];

productos.forEach((product) => {
    let content = document.createElement("div");
    content.className = "card"
    content.innerHTML = `
        <img src="${product.img}">
        <h3 class="card-title">${product.nombre}</h3>
        <span class="card-price">$${product.precio}</span>
        <button class="card-btn">Agregar al carrito</button>
    `;

    shopContent.append(content);
});

