const shopContent = document.getElementById('shopContent');
const verCarrito = document.getElementById('verCarrito');
const modalContainer = document.getElementById('modal-container')
const cantidad_carrito = document.getElementById('cantidad_carrito');




let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

const getProductos = async () => {
    const respuesta = await fetch("data.json");
    const data = await respuesta.json();
    // console.log(data);

    //-utilizo for each para recorrer el array
    data.forEach((bebidas) => { // elijo la palabra bebidas para que me represente cada uno de los productos del array
        let content = document.createElement("div")
        content.className = "cards";
        content.innerHTML = `                        
            <img src="${bebidas.imagen}"></img>
            <h3>${bebidas.nombre}</h3>
            <p class="precio">${bebidas.precio} $</p> 
            `
        shopContent.append(content)

        let boton_comprar = document.createElement("button")
        boton_comprar.innerText = "AGREGAR AL CARRITO"
        boton_comprar.className = "comprar"

        content.append(boton_comprar);

        boton_comprar.addEventListener("click", () => {
            // metodo some para buscar un producto repetido
            const repeat = carrito.some((repetirProducto) => repetirProducto.id === bebidas.id);
            if (repeat) {
                carrito.map((prod) => {
                    if (prod.id === bebidas.id) {
                        prod.cantidad++;
                    }
                });
            } else {
                carrito.push({
                    id: bebidas.id,
                    img: bebidas.imagen,
                    nombre: bebidas.nombre,
                    precio: bebidas.precio,
                    cantidad: bebidas.cantidad,
                    alcohol: bebidas.alcohol
                })
                contadorCarrito();
                saveLocal();
            }
        });

        let boton_verMas = document.createElement("button")
        boton_verMas.innerText = "VER MAS"
        boton_verMas.className = "ver_mas"

        content.append(boton_verMas);


        boton_verMas.addEventListener("click", () => {
            const url = bebidas.paginaHTML
            window.location.href = url;
        })
    });
}

getProductos();

// set item
const saveLocal = () => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
};


// carrousel
const carousel = document.querySelector('.carousel');
let currentIndex = 0;

function showSlide(index) {
    const newPosition = -index * 100 + '%';
    carousel.style.transform = 'translateX(' + newPosition + ')';
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % 3;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + 3) % 3;
    showSlide(currentIndex);
}

setInterval(nextSlide, 3000); // Cambia la imagen cada 3 segundos