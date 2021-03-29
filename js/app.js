// localStorage.setItem("session", "");
let session = localStorage.getItem("session");
if (session === "admin") {
    document.getElementById('navRight').className = 'd-flex is-admin';
} else {
    document.getElementById('navRight').className = 'd-flex';
}

document.querySelector('.btn-logout').addEventListener("click", function(e) {
    e.preventDefault();
    localStorage.setItem("session", "");
    location.href = 'index.html'

});


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
    if (validarMail(document.getElementById('email')) === true && campoRequerido(document.getElementById('clave'))) {
        if (document.getElementById('email').value === "admin@rollflix.com" && document.getElementById('clave').value === "admin") {

            localStorage.setItem("session", "admin");


            location.href = 'admin.html'

        } else {

            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'No podemos encontrar una cuenta con esta dirección de email.'
            })
        }

    } else {

        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Debes completar los campos correctamente.'
        })
    }

}