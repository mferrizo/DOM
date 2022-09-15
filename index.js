// BIENVENIDA Y DESDE EL BOTON ASI SE VE EL HTML COMPLETO Y LOS CAMBIOS DESPUES
let btnPedido = document.getElementById("btnPedido")
btnPedido.addEventListener("click", respuestaClick)
function respuestaClick(){
    let compraCajanavidad = confirm("Bienvenido, Usted esta por elegir los productos que se incluiran en su caja navideña")
    sistemadeStock()

}

//CREACION DE OBJETOS CON CLASE CONSTRUCTORA
class articulo{
    constructor(id, categoria, producto, precio, cantidad){
        this.id = id,
        this.categoria = categoria,
        this.producto = producto,
        this.precio = precio,
        this.cantidad = cantidad
    }//SE AGREGA UN METODO Y MUESTRA UNO A UNO POR ALERT Y POR CONSOLA
    verDatos(){
        alert(`Stock en En Sistema:\nID: ${this.id}\nCategoria: ${this.categoria}\nProducto: ${this.producto}\nPrecio de Costo: ${this.precio}\nStock: ${this.cantidad} `)
        console.log(`Stock en En Sistema:\nID: ${this.id}\nCategoria: ${this.categoria}\nProducto: ${this.producto}\nPrecio de Costo: ${this.precio}\nStock: ${this.cantidad} `)
    }
}

//CREA LA INSTANCIACION DE LOS OBJETOS - STOCK DE ARTICULOS PARA LA VENTA CON CANTIDAD EN INVENTARIO - TIENE STOCK PARA CUANDO PUEDA DESCONTARLO POR CADA VENTA
const producto1 = new articulo(1, "Caja", "Verde", 75, 11)
const producto2 = new articulo(2, "Caja", "Roja", 100, 8)
const producto3 = new articulo(3, "Sidra", "Real", 400, 17)
const producto4 = new articulo(4, "Sidra", "Del Valle", 450, 9)
const producto5 = new articulo(5, "Pan Dulce", "Nevares", 300, 26)
const producto6 = new articulo(6, "Pan Dulce", "Aires de Lujan", 350, 20)
const producto7 = new articulo(7, "Turron", "Georgalos", 100, 14)
const producto8 = new articulo(8, "Turron", "Arcor", 120, 18)
const producto9 = new articulo(9, "Budin", "Nevares", 200, 88)
const producto10 = new articulo(10, "Budin", "Aires de Lujan", 250, 33)
const producto11 = new articulo(11, "Lata de Conserva", "Durazno en Almibar Molto", 500, 10)
const producto12 = new articulo(12, "Lata de Conserva", "Anana en Almibar", 600, 12)
const producto13 = new articulo(13, "Confitados", "Garrapiñadas Georgalo", 60, 90)
const producto14 = new articulo(14, "Confitados", "Confites de Mani", 90, 90)

//CUPONES DE DESCUENTOS DISPONIBLES - TIENEN STOCK PARA CUANDO PUEDA DESCONTAR STOCK AL HACER UNA VENTA
const descuentos5 = new articulo(55,"Descuento", "Del 5% sobre el Total", 0.05, 4)
const descuentos10 = new articulo(110,"Descuento", "Del 10% sobre el Total", 0.10, 4)
const descuentos15 = new articulo(115,"Descuento", "Del 15% sobre el Total", 0.15, 4)

//ARRAY CON LOS PRODUCTOS TOTALES (SE USA EN STOCK TOTAL Y PARA LA CREACION DE ARTICULOS NUEVOS)
const stock = [producto1, producto2, producto2, producto3, producto4, producto5, producto6, producto7, producto8, producto9, producto10, producto11, producto12, producto13, producto14]

//ARRAY LIMITADOS PARA CATEGORIA DE PRODUCTOS ESPECIFICOS- (VER COMO AGREGAR NUEVOS ARTICULOS AUTOMATICAMENTE)
const cajaN = [producto1, producto2]
const sidraN = [producto3, producto4]
const panDulceN = [producto5, producto6]
const turronN = [producto7, producto8]
const budinN = [producto9, producto10]
const lataN = [producto11, producto12]
const confitadosN = [producto13, producto14]

//ARRAY DE CUPONES DE DESCUENTOS
const descuentos = [descuentos5, descuentos10, descuentos15]

//FUNCION QUE BUSCA ARTICULO POR ID. USA FIND, PEGA 3 VALORES CON RETURN, SEPARADOS POR COMA
//CADA CATEGORIA TIENE SU CONSTANTE DE BUSQUEDA PARA NO EXCEDER QUE POR ERROR CARGUEN ARTICULOS DE OTRAS CATEGORIA (VER COMO SUMAR AUTOMATICAMENTE NUEVOS)
//SI EL USUARIO PONE 0, DEJA VACIO O PONE UN ID QUE ESTA FUERA DE LA CONSTANTE DEVUELVE 0 A LA SUMA FINAL Y MARCA COMO ARTICULO SINC ARGAR
function cajas(){
    let buscarProducto = prompt(`Elija el color de su Caja:\nPara ${producto1.producto} a $${producto1.precio} Ingrese ${producto1.id}\nPara ${producto2.producto} a $${producto2.precio} Ingrese ${producto2.id}\nSi NO  desea CAJA Presione ENTER O INGRESE 0`)
    let idEncontrado = cajaN.find((cajaNavidad)=> cajaNavidad.id == buscarProducto)
    if(idEncontrado == undefined) {
        alert(`Articulo sin Cargar`)
        return [0,"No Ingresado", "Articulo"]
    } else{
        alert(`Usted Eligio ${idEncontrado.categoria} ${idEncontrado.producto} a $${idEncontrado.precio} - (Valor sin Impuestos)`)      
        return [idEncontrado.precio, idEncontrado.producto, idEncontrado.categoria]
    }
}
function sidras(){
    let buscarProducto = prompt(`Elija su Bebida con alcohol:\nSidra ${producto3.producto} a $${producto3.precio} Ingrese ${producto3.id}\nSidra ${producto4.producto} a $${producto4.precio} Ingrese ${producto4.id}\nSi NO  desea SIDRA Presione ENTER O INGRESE 0`)
    let idEncontrado = sidraN.find((cajaNavidad)=> cajaNavidad.id == buscarProducto)
    if(idEncontrado == undefined) {
        alert(`Articulo sin Cargar`)
        return [0,"No Ingresado", "Articulo"]
    } else{
        alert(`Usted Eligio ${idEncontrado.categoria} ${idEncontrado.producto} a $${idEncontrado.precio} - (Valor sin Impuestos)`)      
        return [idEncontrado.precio, idEncontrado.producto, idEncontrado.categoria]
    }
}
function panDulces(){
    let buscarProducto = prompt(`Elija su Pan Dulce:\nPara ${producto5.producto} a $${producto5.precio} Ingrese ${producto5.id}\nPara ${producto6.producto} a $${producto6.precio} Ingrese ${producto6.id}\nSi NO  desea PAN DULCE Presione ENTER O INGRESE 0`)
    let idEncontrado = panDulceN.find((cajaNavidad)=> cajaNavidad.id == buscarProducto)
    if(idEncontrado == undefined) {
        alert(`Articulo sin Cargar`)
        return [0,"No Ingresado", "Articulo"]
    } else{
        alert(`Usted Eligio ${idEncontrado.categoria} ${idEncontrado.producto} a $${idEncontrado.precio} - (Valor sin Impuestos)`)      
        return [idEncontrado.precio, idEncontrado.producto, idEncontrado.categoria]
    }
}
function turrones(){
    let buscarProducto = prompt(`Elija su Turron:\nPara ${producto7.producto} a $${producto7.precio} Ingrese ${producto7.id}\nPara ${producto8.producto} a $${producto8.precio} Ingrese ${producto8.id}\nSi NO  desea TURRON Presione ENTER O INGRESE 0`)
    let idEncontrado = turronN.find((cajaNavidad)=> cajaNavidad.id == buscarProducto)
    if(idEncontrado == undefined) {
        alert(`Articulo sin Cargar`)
        return [0,"No Ingresado", "Articulo"]
    } else{
        alert(`Usted Eligio ${idEncontrado.categoria} ${idEncontrado.producto} a $${idEncontrado.precio} - (Valor sin Impuestos)`)      
        return [idEncontrado.precio, idEncontrado.producto, idEncontrado.categoria]
    }
}
function budines(){
    let buscarProducto = prompt(`Elija su Budin:\nPara ${producto9.producto} a $${producto9.precio} Ingrese ${producto9.id}\nPara ${producto10.producto} a $${producto10.precio} Ingrese ${producto10.id}\nSi NO  desea BUDIN Presione ENTER O INGRESE 0`)
    let idEncontrado = budinN.find((cajaNavidad)=> cajaNavidad.id == buscarProducto)
    if(idEncontrado == undefined) {
        alert(`Articulo sin Cargar`)
        return [0,"No Ingresado", "Articulo"]
    } else{
        alert(`Usted Eligio ${idEncontrado.categoria} ${idEncontrado.producto} a $${idEncontrado.precio} - (Valor sin Impuestos)`)      
        return [idEncontrado.precio, idEncontrado.producto, idEncontrado.categoria]
    }
}
function latas(){
    let buscarProducto = prompt(`Elija la Conserva:\nPara ${producto11.producto} a $${producto11.precio} Ingrese ${producto11.id}\nPara ${producto12.producto} a $${producto12.precio} Ingrese ${producto12.id}\nSi NO  desea CONSERVA Presione ENTER O INGRESE 0`)
    let idEncontrado = lataN.find((cajaNavidad)=> cajaNavidad.id == buscarProducto)
    if(idEncontrado == undefined) {
        alert(`Articulo sin Cargar`)
        return [0,"No Ingresado", "Articulo"]
    } else{
        alert(`Usted Eligio ${idEncontrado.categoria} ${idEncontrado.producto} a $${idEncontrado.precio} - (Valor sin Impuestos)`)      
        return [idEncontrado.precio, idEncontrado.producto, idEncontrado.categoria]
    }
}
function confitadosS(){
    let buscarProducto = prompt(`Elija su Confitado:\nPara ${producto13.producto} a $${producto13.precio} Ingrese ${producto13.id}\nPara ${producto14.producto} a $${producto14.precio} Ingrese ${producto14.id}\nSi NO  desea CONFITADOS Presione ENTER O INGRESE 0`)
    let idEncontrado = confitadosN.find((cajaNavidad)=> cajaNavidad.id == buscarProducto)
    if(idEncontrado == undefined) {
        alert(`Articulo sin Cargar`)
        return [0,"No Ingresado", "Articulo"]
    } else{
        alert(`Usted Eligio ${idEncontrado.categoria} ${idEncontrado.producto} a $${idEncontrado.precio} - (Valor sin Impuestos)`)      
        return [idEncontrado.precio, idEncontrado.producto, idEncontrado.categoria]
    }
}

//FUNCION DESCUENTOS DESDE UN ARRAY CON CUPON (ID)
function DescuentosS(){
    let buscarProducto = prompt(`SI TIENE UN CUPON DE DESCUENTO INGRESELO.\nSi NO tiene Presione ENTER O INGRESE `)
    let idEncontrado = descuentos.find((cajaNavidad)=> cajaNavidad.id == buscarProducto)
    if(idEncontrado == undefined) {
        alert(`SIN DESCUENTO`)
        return [0,"0", "Descuento"]
    } else{
        alert(`Usted Ingreso ${idEncontrado.categoria} ${idEncontrado.producto}`)      
        return [idEncontrado.precio, idEncontrado.producto, idEncontrado.categoria]
    }
}

//FUNCION PARA MOSTRAR EL STOCK
function mostrarStock(array){
    alert("Su Stock sera mostrado en PopUp y Tambien por Consola")
    console.log("Su Stock sera mostrado en PopUp y Tambien por Consola")
    array.forEach((deposito)=>{
        deposito.verDatos()
    })
}

    //PEQUEÑO LOGIN DE USUARIO PARA FUNCIONES ADMINISTRATIVAS
function loginNuevoproducto(){
    let ComienzaEn = true
    let intentos = 0
    do{
        let usuario = prompt(`Bienvenido ${nombreCliente}, ingrese el usuario hablitado para esta area`)
        if(usuario.toLowerCase() == "admin"){
            console.log(`Ingresando a la opcion deseada`)
            ComienzaEn = false
            nuevoProducto()
        }else{
            intentos=intentos + 1
            console.log("Usuario incorrecto, vuelva a intentarlo. Intento n° " + intentos)
        }
    }while((ComienzaEn) && (intentos < 3))2
    console.log (intentos)
    sistemadeStock()
}
function loginEliminar(){
    let ComienzaEn = true
    let intentos = 0
    do{
        let usuario = prompt(`Bienvenido ${nombreCliente}, ingrese el usuario hablitado para esta area`)
        if(usuario.toLowerCase() == "admin"){
            console.log(`Ingresando a la opcion deseada`)
            ComienzaEn = false
            eliminamosArticulo()
        }else{
            intentos=intentos + 1
            console.log("Usuario incorrecto, vuelva a intentarlo. Intento n° " + intentos)
        }
    }while((ComienzaEn) && (intentos < 3))2
    console.log (intentos)
    sistemadeStock()
}

//FUNCION PARA AGREGAR STOCK
function nuevoProducto(array){
    let CategoriaNueva = prompt("Ingrese la Categoria del Producto")
    let productoNuevo = prompt("Ingrese el Nuevo Producto")
    let precioSiniva = prompt("Ingrese el precio de costo del producto")
    let stockNew = prompt("Ingrese el Stock del producto")
    let productoCreado = new articulo(stock.length, CategoriaNueva, productoNuevo, precioSiniva,stockNew)
    array.push(productoCreado)
    alert(`El Articulo ha sido agregado exitosamente.Por Favor Reviselo en Stock en la opcion 1`)
}

//BORRAR UN ARTICILO CON SPLICE (Ver de mejorar a futuro, esta raro)
function eliminamosArticulo(stock){
    let posicion1 = prompt("Para eliminar un producto, indique el ID del mismo")
    let posicion2 = prompt("Indique el ID del producto siguiente para poder eliminar el primero. Si desea eliminar mas de uno, indique el ID del producto hasta donde quiera que sean eliminados.")
    borrarArticulo = confirm("Desea eliminar el/los productos seleccionados?")
        if (borrarArticulo == true){
            stock.splice(posicion1, posicion2)
            alert("El/los productos fueron eliminados de la base de datos. Revise el menú para confirmar")
        }else{
            alert("Seleccione otra opción del menú")
        }
    }   

//AGREGANDO DOM AL TRABAJO
// let btnTexto = document.getElementById("btnTexto")
// btnTexto.innerText = "Click para Ingresar"


let Titulo = document.getElementById("Titulo")
Titulo.innerText = "Caja Navideña Personalizada"// Cambia Textos

let descripcion = document.getElementById("descripcion")
descripcion.innerText = "Arma tu propia caja para estas fiestas!" //Cambia Textos
// descripcion.remove()

let detalle = document.getElementById("detalle") //Agrega HTML y Clase
detalle.innerHTML =   "<h2>Descuentos</h2><p>Descuento del 5% Codigo 055<p><p>Descuento del 10% Codigo 110<p><p>Descuento del 15% Codigo 115<p>" 
detalle.className = "card-text"

let administrador = document.getElementById("administrador")


//FINALZIACION DEL LA FACTURACION DEL PEDIDO
function cajaNavidad() {
    let nombreCliente  = prompt("Ingrese su nombre").toUpperCase()
    //LLAMA A LA FUNCION ESPECIFICA DEL ARTICULO, TOMA LOS DATOS DEL RETURN Y DIVIDE LOS RESULTADOS PARA USARLOS EN DIFERENTES PARTES
    let [precioC, productoC, categoriaC] = cajas()
    let [precioS, productoS, categoriaS] = sidras()
    let [precioP, productoP, categoriaP] = panDulces()
    let [precioT, productoT, categoriaT] = turrones()
    let [precioB, productoB, categoriaB] = budines()
    let [precioL, productoL, categoriaL] = latas()
    let [precioCO, productoCO, categoriaCO] = confitadosS()

    // LLAMA AL CUPON DE DESCUENTO
    let [precioD, productoD, categoriaD] = DescuentosS()

    //Sumo todos los precios de todos los Articulos y resto el descuento elegido si corresponde
    let cajaNavidad2 = precioC + precioS + precioP + precioT + precioB + precioL + precioCO
    let impuesto = cajaNavidad2 * 0.21
    let precioFinal = cajaNavidad2 + impuesto
    let porcentajeDescuento = precioFinal * precioD
    let descuentoTotal = precioFinal - porcentajeDescuento

    //Mensaje hacia el usuario segun la compra


    let resultado = document.getElementById("resultado")//INSERTO EL DETALLE FINAL DE LA COMPRA Y LO MUESTRO AL HTML CON DOM
    resultado.className = "resultado"
    resultado.innerHTML = `<P>Gracias por su compra ${nombreCliente}</P><P>Su Canasta Navideña Contiene:</p><ul>${categoriaC} ${productoC} $${precioC}</ul><ul>${categoriaS} ${productoS} $${precioS}</ul><ul>${categoriaP} ${productoP} $${precioP}</ul><ul>${categoriaT} ${productoT} $${precioT}</ul><ul>${categoriaB} ${productoB} $${precioB}</ul><ul>${categoriaL} ${productoL} $${precioL}</ul><ul>${categoriaCO} ${productoCO} $${precioCO}</ul><p>
    \nSUBTOTAL: $${cajaNavidad2}</p><p>IVA 21%: $${impuesto}</p><p>PRECIO FINAL: $${precioFinal}</p><p>${categoriaD} ${productoD} $${porcentajeDescuento}</p><p>TOTAL CON DESCUENTO INCLUIDO: $${descuentoTotal}</p>`

    //REMUEVO EL CONTENIDO DEL HTML CON DOOM PARA INSERTAR CORRECTAMENTE EL RESULTADO
    Titulo.remove()
    descripcion.remove()
    detalle.remove()
    administrador.remove()

    //CAMBIO EL TEXTO DEL BOTON AL FINALIZAR EL PEDIDO PARA VOLVER A EMPEZAR
    btnPedido.innerText = "Volver a Ingresar al Menu"
}

//MENU DEL SISTEMA
function sistemadeStock(){
    let ingresoUsuario = parseInt(prompt(`Ingrese el número de la opción que desea realizar:
                        1 - Ver Stock disponible 
                        2 - Para cargar un Pedido de Venta
                        3 - Agregar un Articulo al Stock (solo admin)
                        4 - Borrar un Articulo al Stock (solo admin)
                        0 - Para salir
                        `))
    menu(ingresoUsuario)
}
//SWICH DEL MENU DEL SISTEMA
function menu(opcionSeleccionada){
    switch(opcionSeleccionada){
        case 0:
            salir = true
            alert(`Gracias por Utilizar nuestro sistema de Stock`)
    break    
        case 1:
            mostrarStock(stock)
    break 
        case 2: 
            cajaNavidad()
    break 
        case 3: 
            loginNuevoproducto(stock)
    break
        case 4: 
            loginEliminar(stock)
    break
        default: 
            alert(`Si Finalizo su trabajo y desea salir, presione 0 por favor`)
    }
}
