function campoRequerido(clave) {
    if (clave.value.trim() === "") {
        clave.className = 'form-control is-invalid';
        return false;
    } else {
        clave.className = 'form-control is-valid';
        return true;
    }
}

function validarMail(email) {
    let expresion = /\w+@\w+\.[a-z]{2,}$/;
    if (email.value.trim() != '' && expresion.test(email.value)) {
        email.className = 'form-control is-valid';
        return true;
    } else {
        email.className = 'form-control is-invalid';
        return false;

    }
}

function validarLogin(event) {
    event.preventDefault();
    if (validarMail(document.getElementById('email')) == true && campoRequerido(document.getElementById('clave'))) {
        if (document.getElementById('email').value == "admin@rollflix.com" && document.getElementById('clave').value == "admin") {

            window.location.href = "http://127.0.0.1:5500/netflix.github.io/admin.html"
        } else {
            alert("Usuario no valido")
        }

    } else {
        alert("Campos Incorrectos")
    }

}