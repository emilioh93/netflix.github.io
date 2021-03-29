//Creacion clase para pelicula
class Peli {
    constructor(codigo, nombre, categoria, descripcionPelicula, imagen, publicado) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.categoria = categoria;
        this.descripcionPelicula = descripcionPelicula;
        this.imagen = imagen;
        this.publicado = publicado;
    }
}

let pelicula = new Peli(
    1,
    "Harry Poter",
    "suspenso",
    "sadsdada",
    "harry.png",
    true
);
console.log(pelicula);

//validacion de formulario
//validaciones individuales
//validar codigo
let codigo = document.getElementById("codigo");
codigo.addEventListener("blur", function() {
    console.log("desde validar codigo");
    validarCodigo();
});

function validarCodigo() {
    if (codigo.value.trim() === "") {
        codigo.className = "form-control is-invalid";
        return false;
    } else {
        codigo.className = "form-control is-valid";
        return true;
    }
}

//validar nombre
let nombre = document.getElementById("nombre");
nombre.addEventListener("blur", function() {
    console.log("desde validar nombre");
    validarNombre();
});

function validarNombre() {
    if (nombre.value.trim() === "") {
        nombre.className = "form-control is-invalid";
        return false;
    } else {
        nombre.className = "form-control is-valid";
        return true;
    }
}

//validar categoria
let categoria = document.getElementById("categoria");
categoria.addEventListener("blur", function() {
    console.log("desde validar categoria");
    validarCategoria();
});

function validarCategoria() {
    if (categoria.value.trim() === "") {
        categoria.className = "form-control is-invalid";
        return false;
    } else {
        categoria.className = "form-control is-valid";
        return true;
    }
}

//validar descripcion
let descripcionPelicula = document.getElementById("descripcionPelicula");
descripcionPelicula.addEventListener("blur", function() {
    console.log("desde validar descripcionPelicula");
    validarDescripcion();
});

function validarDescripcion() {
    if (descripcionPelicula.value.trim() === "") {
        descripcionPelicula.className = "form-control is-invalid";
        return false;
    } else {
        descripcionPelicula.className = "form-control is-valid";
        return true;
    }
}

//validar Imagen
let imagen = document.getElementById("imagen");
imagen.addEventListener("blur", function() {
    console.log("desde validar imagen");
    validaImagen();
});

function validaImagen() {
    if (imagen.value.trim() === "") {
        imagen.className = "form-control is-invalid";
        return false;
    } else {
        imagen.className = "form-control is-valid";
        return true;
    }
}

//Validacion general

function validarGeneral() {
    if (
        validarCodigo() &&
        validarNombre() &&
        validarCategoria() &&
        validarDescripcion() &&
        validaImagen()
    ) {
        alert("Todos los datos fueron validados");
        return true;
    } else {
        alert("Algunos de los campos no fueron validados correctamente");
        return false;
    }
}

//Creo areglo vacio para ingresar peliculas

let listaPeliculas = [];

//Modal arreglo
const modalProducto = new bootstrap.Modal(
  document.getElementById("modalPelicula")
);

//limpiar formulario

modalProducto.hide();
let btnAgregar = document.getElementById('btnAgregar')
btnAgregar.addEventListener('click', function() {
    limpiarFormulario();
    modalProducto.show();
})

//variable bandera unirversal

let modificarPelicula = false;

//llamo a la funcion leer datos para tener actualizada la tabla

leerDatos();

//Funcion para agregar Pelicula

function agregarPeli() {
    console.log("desde agregar peli");
    let nuevaPelicula;

    if (validarGeneral()) {
        let codigo = document.getElementById("codigo").value;
        console.log(codigo);
        let nombre = document.getElementById("nombre").value;
        let categoria = document.getElementById("categoria").value;
        let descripcionPelicula = document.getElementById("descripcionPelicula")
            .value;
        let imagen = document.getElementById("imagen").value;
        let publicado = document.getElementById("publicado").value;

        nuevaPelicula = new Peli(
            codigo,
            nombre,
            categoria,
            descripcionPelicula,
            imagen,
            publicado
        );

        listaPeliculas.push(nuevaPelicula);

        localStorage.setItem("listaPelisKey", JSON.stringify(listaPeliculas));

        leerDatos();

        Swal.fire('Se agrego la Pelicula!!!');

        limpiarFormulario();

        modalProducto.hide();


    }
}

//funcion preparar pelicula

function prepararPeli(boton) {
    console.log(boton.id)

    let peliEncontrada = listaPeliculas.find((producto) => { return producto.codigo === boton.id })
    console.log(peliEncontrada)

    document.getElementById('codigo').value = peliEncontrada.codigo;
    document.getElementById('nombre').value = peliEncontrada.nombre;
    document.getElementById('categoria').value = peliEncontrada.categoria;
    document.getElementById('descripcionPelicula').value = peliEncontrada.descripcionPelicula;
    document.getElementById('imagen').value = peliEncontrada.imagen;

    //cambiar el estado de mi variable modificar Pelicula
    modificarPelicula = true;

    modalProducto.show();
}

//Funcion para  modificar Pelicula

function modificarPeli() {

    //tomar los valores modificados del formulario
    let codigo = document.getElementById('codigo').value;
    let nombre = document.getElementById('nombre').value;
    let categoria = document.getElementById('categoria').value;
    let descripcionPelicula = document.getElementById('descripcionPelicula').value;
    let imagen = document.getElementById('imagen').value;

    //buscar el objeto y modificar la Pelicula

    for (let i in listaPeliculas) {

        if (listaPeliculas[i].codigo === codigo) {
            listaPeliculas[i].nombre = nombre;
            listaPeliculas[i].categoria = categoria;
            listaPeliculas[i].descripcionPelicula = descripcionPelicula;
            listaPeliculas[i].imagen = imagen;
        }
    }

    //actualizo el local storage
    localStorage.setItem('listaPelisKey', JSON.stringify(listaPeliculas));

    Swal.fire(
        "Pelicula modificada",
        "La pelicula seleccionada se modifico correctamente!",
        "success"
    );

    leerDatos();

    limpiarFormulario();

    modalProducto.hide();


  modalProducto.hide();
}

//funcion para eliminar pelicula

function eliminarPeli(boton) {

    console.log(boton.id)

    Swal.fire({
        title: 'Estas seguro de eliminar la Pelicula',
        text: "No puedes volver atras luego de eliminar una Pelicula",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, borrala',
        cancelButtonText: 'Cancelar',
    }).then((result) => {
        if (result.isConfirmed) {
            let peliculaFiltrada = listaPeliculas.filter((producto) => producto.codigo != boton.id);
            console.log(peliculaFiltrada)


            listaPeliculas = peliculaFiltrada;


            //guardar los datos en local storage

            localStorage.setItem('listaPelisKey', JSON.stringify(listaPeliculas));

            leerDatos();


            Swal.fire(
                'Borrado!',
                'La pelicula seleccionada fue eliminada.',
                'success'
            )
        }
    })

}

// funcion guardar pelicula

function guardarPeli(event) {
    event.preventDefault();
    console.log("desde guardar Peli");
    if (modificarPelicula === true) {
        console.log('desde modificar pelicula')
        modificarPeli();

    } else {
        console.log('desde agregar pelicula')
        agregarPeli();
    }
}

//limpiar formulario
function limpiarFormulario() {
    document.getElementById("formPeli").reset();
    modificarPelicula = false

}

//funcion para leer datos
//esta funcion lee los datos del local storage
function leerDatos() {
    if (localStorage.length > 0) {
        let _listaPeliculas = JSON.parse(localStorage.getItem("listaPelisKey"));
        console.log(_listaPeliculas);

        if (listaPeliculas.length === 0) {
            console.log("desde leerdatos");
            listaPeliculas = _listaPeliculas;
        }

        dibujarTabla(_listaPeliculas);
    }
}

//dibujar datos en tabla

function dibujarTabla(_listaPeliculas) {
    //traigo el cuerpo de la tabla como objeto
    let tabla = document.getElementById("tablaPeli");

    //limpio los elementos hijos
    tabla.innerHTML = "";

    //
    let filas;

    for (let i in _listaPeliculas) {
        filas = `<tr>
        <td>${_listaPeliculas[i].codigo}</td>
        <td>${_listaPeliculas[i].nombre}</td>
        <td>${_listaPeliculas[i].categoria}</td>
        <td>
        ${_listaPeliculas[i].descripcionPelicula}
        </td>
        <td>${_listaPeliculas[i].imagen}</td>
        <td class="text-center"><input type="checkbox" /></td>
        <td class="text-center">
          <button class="btn btn-sm" onclick="eliminarPeli(this)" id="${_listaPeliculas[i].codigo}">
            <i class="fas fa-trash-alt"></i>
          </button>
          <button class="btn btn-sm" onclick="prepararPeli(this)" id="${_listaPeliculas[i].codigo}">
            <i class="fas fa-edit"></i>
          </button>
          <button class="btn btn-sm" onclick="" id="${_listaPeliculas[i].codigo}">
            <i class="fas fa-star"></i>
          </button>
        </td>
      </tr>`;

        tabla.innerHTML += filas;
    }
}