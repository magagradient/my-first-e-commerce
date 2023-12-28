trabajo practico 2 UNTREF:

1- primero cree un array con objetos en el cual cada uno tenga un id, una imagen, precio, cantidad y un link con un html
con el detalle del producto.

2-utilizo for each para recorrer el array y le coloco un div con el objeto document para acceder al DOM y createElement para crear un div en el cual utilizo la propiedad innerHTML para colocarle el contenido identificandolo con la variable content donde le coloco una imagen,un h3, un precio con la clase "precio" para darle estilos con css<p>

3-creo un div padre en mi html donde voy a colocar todas las card con los productos, luego llevo este div al archivo js, capturo el id creando una variable (shopContent) y utilizando la propiedad getElementById , luego con la propiedad append coloco todo lo que este adentro de mi etiqueta content.

4-agrego un boton creando una variable que se llame boton_comprar accedo nuevamente al DOM con el objeto document y con createElement le agrego la etiqueta que me crea un botón ('button') despues con innerText le agrego un texto que va a estar dentro de la etiqueta 'button': "AGREGAR AL CARRITO", nuevamente utilizo append para terminar de agregarlo en mi variable content.

5-con la propiedad className le agrego una clase a mi div con la etiqueta "cards" y a mi botón con la etiqueta "comprar". Le agrego estilos a las card que se me crearon dinamicamente para cada bebida y al boton "AGREGAR AL CARRITO".

6-le doy funcionalidad agregandole un escuchador de eventos con addEventListener ubicando el boton_comprar (va a escuchar el evento que ocurra dentro de boton_comprar) el evento que quiero que escuche es "click", que escuche cuando el usuario hace click en ese button y luego con una funcion flecha le digo que mediante el metodo push le pasamos todo lo que queremos que vaya sumando al carrito como el id, imagen , nombre , cantidad y precio.

7-para que aparezca mi carrito en pantalla creo un modal para que cuando el usuario haga click en el carrito aparezcan los productos seleccionados con sus detalles, la cantidad que desea y su total. Entonces para detectar cuando el usuario haga click en el carrito lo capturo a travez de su id "verCarrito", creando la variable verCarrito y utilizando getElementByid y nuevamente usando el addEvenListener y "click". Despues le agrego una funcion flecha. 

8-declaro el modal: modalHeader y con createElement le agrego un "div" luego le asigo una clase y le agrego mas elementos html con innerHTML.
Mediante append lo conecto a su div padre el cual primero creo en mi index.html identificandolo como "modal-container", lo capturo en mi js mediante getElementById. 
Le agrego un boton para poder cerrar el carrito utilizando los mismo pasos que hice en los botones anteriores, tambien le asigno clase.
Mediante append le conecto el boton declarado: modalButton.

9-utilizo nuevamente forEach para recorrer y buscar que hay en el carrito, tambien le agrego elementos html (carritoContenido) de la misma forma que vengo haciendolo para mostrar el contenido que hay dentro de este y se lo agrego a un div padre.
Mediante append lo conecto a la variable utilizada. 

10-creo un footer del carrito el cual me muestre el total de la compra. Para poder
calcular el total utilizo el metodo reduce al cual le paso dos parametros y luego ejecuto la cuenta ( acc + el.precio * el.cantidad, 0) donde el acumulador arranca en 0 y se le va sumando el precio.

11-creo una nueva variable (totalCompra) dentro de la misma funcion en la que vengo trabajando y le agrego html y clase para terminar de crear el footer y poder darle estilos, lo llamo con append. 

12-con addEventlistener le digo que cuando escuche "click" en la X de mi modalButton se cierre el modal del carrito, agregandole mediante una funcion flecha directamente estilo sin recurrir al css un display "none" y tambien agrego un display "flex" directamente desde js para poder volver a verlo una vez cerrado y por ultimo tambien le agrego un html vacio sin etiqueta para que no se me repita la lista de la compra cuando cierre el carrito y lo vuelva a abrir. 

13-creo un nuevo js que se llame carrito.js en donde muevo el codigo que empece a escribir en mi main.js (solo la parte que ocurre todo lo que sucede en el carrito) y hago una modificacion del codigo creandole una funcion flecha (const paintCarrito)  y trasladando el escuchador de evento que cierra el modal del carrito fuera de la funcion y la invoco dentro de esta. 

14-continuando en el js del carrito creo un nuevo boton con la etiqueta "span" que me va a simular un button el cual va a elimiar el producto seleccionado del carrito. Creando una funcion flecha y utilizando addEventListener accedo al id del producto deseado. 

15-creo una nueva funcion que se llame delete_product donde con metodo find y metodo filter busco el id del producto que el usuario quiere eliminar.

16-utilzo el metodo some (el cual devuelve un false o un true) y creo una funcion flecha creando un condicion (if/else) donde busco un producto repetido para manejar las cantidades del producto.  

17-para saber cuantos productos hay en mi carrito y que se vayan mostrando en mi icono del nav, lo llamo a mi js con getElementById, le agrego estilos y un display "none" en mi css y luego creo una funcion flecha donde vaya pintando el numero de la cantidad agregandole display "block" y un innerText con la propiedad length el cual devuelve la cantidad de elementos, por ultimo llamo a la funcion dos veces, una cuando pinto el producto y otra cuando la elimino. ( contadorCarrito(); y paintCarrito();)

18-utilizo una nueva funcion para enviar elementos al localStorage a travez de setItem y le agrego JSON.stringify ya que el localStorage solamente recibe strings seguido por el nombre de la variable del array de mi carrito. Por ultimo llamo a la funcion saveLocal();

19-con el getItem guardo eso que el usuario haya enviado en donde utilizo JSON.parse para que cuando recuperamos la informacion volver a parsearla. A este lo coloco en mi carrito declarado al principio del código.

20-repito los dos ultimos pasos dentro de la funcion del contador del carrito y llamo a la funcion contadorCarrito(); 

21-agrego dos botones en el carrito uno de sumar y otro de restar a través de la etiqueta <span> y le agrego funcionalidad capturando los botones y agregandole un escuchador de eventos, esta vez utilizando un querySelector para capturarlos a través de la clase.

22-nuevamente utilizo una funcion con condiciones para manejar las cantidades de suma y resta.

23-creo un archivo de extensión JSON donde van a estar el array con las bebidas

24-le agrego asincronia y promesas al proyecto creando un funcion asincrona utilizando async-await y fetch y llamo a los productos que estan en el JSON. Invoco a la función. 

25-agrego boton ver mas para redirigir a un nuevo html en el que se encuentran los detalles de cada bebida.

26-creo un carrousel  le agrego imagen y descripcion a cada una de ellas, optimizo las imagenes y le doy funcionalidad con javascript. 

27-por ultimo le sumo un boton al carrito para finalizar la compra con un alert que dice "gracias por su compra". 
