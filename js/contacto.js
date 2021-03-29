function campoRequerido(input) {
    console.log('en la funcion campoRequerido');
    if (input.value.trim() === "") {
        input.className = 'form-control is-invalid';
        return false;
    } else {
        input.className = 'form-control is-valid';
        return true;
    }
}

function validarEmail(email) {
    // console.log(email);emilsearias@gmail.com
    let expresion = /\w+@\w+\.[a-z]{2,}$/;
    if (email.value.trim() != '' && expresion.test(email.value)) {
        email.className = 'form-control is-valid';
        return true;
    } else {
        email.className = 'form-control is-invalid';
        return false;
    }
}

function validarConsulta(texto) {
    if (texto.value.trim() != "" && texto.value.length >= 10) {
        texto.className = 'form-control is-valid';
        return true;
    } else {
        texto.className = 'form-control is-invalid';
        return false;
    }
}


let checkTerminos = document.querySelector('#terminos');

checkTerminos.addEventListener('change', function() {
    validarTerminos();
})

function validarTerminos() {
    console.log('desde la funcion del checkbox');
    if (checkTerminos.checked) {
        checkTerminos.className = 'form-check-input is-valid';
        return true;
    } else {
        checkTerminos.className = 'form-check-input is-invalid';
        return false;
    }
}


function validarGeneral(event) {
    event.preventDefault();
    console.log('desde la funcion validar general');
    if (campoRequerido(document.getElementById('nombre')) === true &&
        validarEmail(document.getElementById('email')) &&
        validarConsulta(document.getElementById('consulta')) &&
        validarTerminos()) {
        // aqui debo enviar el mail

        enviarEmail();
    } else {
        // indicar el error
        alert('debe corregir los datos cargados')
    }
}

function enviarEmail() {

    emailjs.send("service_xpq6501", "template_qdsvzkb", {
        from_name: document.getElementById('nombre').value,
        to_name: "lourdes",
        message: document.getElementById('consulta').value,
        email: document.getElementById('email').value
    }).then(function(response) {
        console.log(response);
        alert('los datos fueron enviados');
        document.getElementById('formContacto').reset();
    }, function(error) {
        console.log(error);
        alert('No se puedo enviar el mail')
    })
}