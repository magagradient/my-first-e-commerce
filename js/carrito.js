const paintCarrito = () => {
    // console.log("funcionaaa");
    modalContainer.innerHTML = ""; // para que no vuelva a repetir la lista de la compra cuando cierre el carrito y lo volvi a abrir.
    modalContainer.style.display = "flex"; // para que no borre los productos seleccionados para siempre
    const modalHeader = document.createElement("div"); // header del carrito 
    modalHeader.className = "modal-header";
    modalHeader.innerHTML = `
    <h1 class="modal-header-title">CARRITO</h1>`; 
    
    modalContainer.append(modalHeader)
    
    const modalButton = document.createElement("h2")
    modalButton.innerText = 'X';
    modalButton.className = "modal-button";
    
    // para cerrar carrito 
    modalButton.addEventListener("click", () =>{
        modalContainer.style.display = "none";
    })
    
    modalHeader.append(modalButton)
    
    
    carrito.forEach((bebidas) => {
    let carritoContenido = document.createElement("div") // cuerpo div del carrito con los productos
    carritoContenido.className = "modal-content"
    carritoContenido.innerHTML = ` 
    <img src="${bebidas.img}" class="carrito-imagen">
    <div class="carrito-info">
    <h3>${bebidas.nombre}</h3>
    <p>${bebidas.precio} $</p>
    <div class="carrito-cantidad">
    <span class="restar"> - </span>
    <p>cantidad: ${bebidas.cantidad} </p>
    <span class="sumar"> + </span>
    </div>
    <p class="carrito-total">total: ${bebidas.cantidad * bebidas.precio}$ </p>
    <span class="eliminar-producto"> 🗑️ </span> `

    modalContainer.append(carritoContenido)

    let restar = carritoContenido.querySelector(".restar")  
    restar.addEventListener("click", () => {
        if(bebidas.cantidad !== 1) {
        bebidas.cantidad--;
    }
        saveLocal();
        paintCarrito();
    }); 

    let sumar = carritoContenido.querySelector(".sumar")
    sumar.addEventListener("click", () => {
        bebidas.cantidad++; 
        saveLocal()
        paintCarrito();
    });

    let eliminar = carritoContenido.querySelector(".eliminar-producto")

    eliminar.addEventListener("click", () => {
        delete_product(bebidas.id);s
    });
        });
    
        // footer del carrito para colocar el total de la compra:
    // para calcular el total con metodo reduce: acc(acumulador) + el (representa cada uno de los productos)
    const total = carrito.reduce((acc, el) => acc + el.precio * el.cantidad, 0);  
    
    //footer del modal
    const totalCompra = document.createElement("div");
    totalCompra.className = "total-contenido";
    totalCompra.innerHTML = `Total a pagar: ${total} $`;
    modalContainer.append(totalCompra); 


    const pagarButton = document.createElement("button");
    pagarButton.innerText = "PAGAR";
    pagarButton.className = "pagar-button";

    pagarButton.addEventListener("click", () => {
        alert("¡Gracias por tu compra!");
    });

    modalContainer.append(pagarButton);
    
};

verCarrito.addEventListener("click", paintCarrito)

// metodo find y metodo filter  para buscar el id del producto que el usuario quiere eliminar 
const delete_product = (id) => {
    const encontrarId = carrito.find((element)=>element.id === id)
    
    carrito = carrito.filter((carritoId) => {
        return carritoId !== encontrarId   
            });
            contadorCarrito();
            saveLocal();
            paintCarrito();
}

const contadorCarrito = () => {
    cantidad_carrito.style.display = "block";
    
    const carritoLength = carrito.length;

    localStorage.setItem("carritoLength", JSON.stringify(carritoLength));

    cantidad_carrito.innerText = JSON.parse(localStorage.getItem("carritoLength"));
}

contadorCarrito(); 