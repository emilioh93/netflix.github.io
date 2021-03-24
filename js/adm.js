
//Creacion clase para pelicula
class Peli {
    constructor(codigo, nombre, categoria, descripcion, imagen, publicado){
        this.codigo = codigo
        this.nombre = nombre
        this.categoria = categoria
        this.descripcion = descripcion
        this.imagen = nombre
        this.publicado = publicado
    }
}

let pelicula = new Peli (1, 'Harry Poter', 'suspenso', 'sadsdada', 'harry.png', true)
console.log(pelicula)

//validacion de formulario
//validaciones individuales
//validar codigo
let codigo = document.getElementById('codigo')
codigo.addEventListener('blur', function(){
    console.log('desde validar codigo')
    validarCodigo();
})

function validarCodigo(){
    if(codigo.value.trim() === ''){
        codigo.className = 'form-control is-invalid'
        return false
    }else{
        codigo.className = 'form-control is-valid'
        return true
    }
}

//validar nombre
let nombre = document.getElementById('nombre')
nombre.addEventListener('blur', function(){
    console.log('desde validar nombre')
    validarNombre();
})

function validarNombre(){
    if(nombre.value.trim() === ''){
        nombre.className = 'form-control is-invalid'
        return false
    }else{
        nombre.className = 'form-control is-valid'
        return true
    }
}

//validar categoria
let categoria = document.getElementById('categoria')
categoria.addEventListener('blur', function(){
    console.log('desde validar categoria')
    validarCategoria();
})

function validarCategoria(){
    if(categoria.value.trim() === ''){
        categoria.className = 'form-control is-invalid'
        return false
    }else{
        categoria.className = 'form-control is-valid'
        return true
    }
}

//validar descripcion
let descripcionPelicula = document.getElementById('descripcionPelicula')
descripcionPelicula.addEventListener('blur', function(){
    console.log('desde validar descripcionPelicula')
    validarDescripcion();
})

function validarDescripcion(){
    if(descripcionPelicula.value.trim() === ''){
        descripcionPelicula.className = 'form-control is-invalid'
        return false
    }else{
        descripcionPelicula.className = 'form-control is-valid'
        return true
    }
}

//validar Imagen
let imagen = document.getElementById('imagen')
imagen.addEventListener('blur', function(){
    console.log('desde validar imagen')
    validaImagen();
})

function validaImagen(){
    if(imagen.value.trim() === ''){
        imagen.className = 'form-control is-invalid'
        return false
    }else{
        imagen.className = 'form-control is-valid'
        return true
    }
}

//Validacion general

function validarGeneral(){
    if(validarCodigo()&&validarNombre()&&validarCategoria()&&validarDescripcion()&&validaImagen()){
        alert('Todos los datos fueron validados')
        return true
    }else{
        alert('Algunos de los campos no fueron validados correctamente')
        return false
    }
}

//Creo areglo vacio para ingresar peliculas

listaPeliculas = []

//Funcion para agregar Pelicula

function agregarPeli(){
console.log('desde agregar peli')
if (validarGeneral()) {
    
    let codigo = document.getElementById('codigo').value
    console.log(codigo)
    let nombre = document.getElementById('nombre').value
    let categoria = document.getElementById('categoria').value
    let descripcionPelicula = document.getElementById('descripcionPelicula').value
    let imagen = document.getElementById('imagen').value

    let nuevaPelicula = new Peli (
        codigo,
        nombre,
        categoria,
        descripcionPelicula,
        imagen,
        publicado,
    )

    listaPeliculas.push(nuevaPelicula);

    localStorage.setItem('listaPelisKet', JSON.stringify(listaPeliculas))

}
}

//funcion guardar pelicula

function guardarPeli(event){
    event.preventDefault()
    console.log('desde guardar funkopop')
    if (validarGeneral()) {
        agregarPeli()
        alert('se agrego la pelicula')
    }else{
        alert('los datos no fueron validados')
    }
}