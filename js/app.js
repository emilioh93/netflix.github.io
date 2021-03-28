function campoRequerido(clave) {
    if (clave.value.trim() === "") {
        clave.className = 'form-control is-invalid';
    } else {
        clave.className = 'form-control is-valid';
    }
}

function validarMail(email) {
    let expresion = /\w+@\w+\.[a-z]{2,}$/;
    if (email.value.trim() != '' && expresion.test(email.value)) {
        email.className = 'form-control is-valid';
    } else {
        email.className = 'form-control is-invalid';

    }
}