const shopContent = document.getElementById("shopContent");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modalContainer");
const cantidadCarrito = document.getElementById("cant-carrito");

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

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

    const repeat = carrito.some((repeatProduct) => repeatProduct.id === product.id);

    if(repeat){
        carrito.map((prod) => {
            if(prod.id === product.id){
                prod.cantidad++;
            }
        });
    } else {
        carrito.push({
            id: product.id,
            nombre: product.nombre,
            img: product.img,
            precio: product.precio,
            cantidad: product.cantidad,
        });
    }
    carritoCounter();
    saveLocal();
    });
});

//SET TEM LOCAL STORAGE
const saveLocal = () => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
}




