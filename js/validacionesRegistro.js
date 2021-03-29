function validarNombre(input) {
    console.log("Se ejecutó onblur de nombre");
    if (input.value.trim() === "") {
        input.className = "form-control is-invalid"
        return false;
    } else {
        input.className = "form-control is-valid"
        return true;
    }
}

function validarTelefono(inputTel) {
    console.log("Se ejecutó onblur de telefono");
    if (inputTel.value.trim() != "" && !isNaN(inputTel.value)) {
        inputTel.className = "form-control is-valid";
        return true;
    } else {
        inputTel.className = "form-control is-invalid";
        return false;
    }
}

function validarEmail(email) {
    console.log("Se ejecutó onblur de email");
    let expresion = /\w+@\w+\.[a-z]{2,}$/;
    if (email.value.trim() != "" && expresion.test(email.value)) {
        email.className = "form-control is-valid";
        return true;
    } else {
        email.className = "form-control is-invalid";
        return false;
    }
}

let pass1 = document.getElementById("contrasenia");
let pass2 = document.getElementById("contrasenia2");

function validarContrasenia1(contrasenia) {
    let expresion = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;
    console.log(pass1.value);
    if (contrasenia.value.trim() != "" && expresion.test(contrasenia.value)) {
        contrasenia.className = "form-control is-valid";
        return true;
    } else {
        contrasenia.className = "form-control is-invalid";
        return false;
    }
}

function validarContrasenia2(contrasenia) {
    console.log(pass2.value);
    if (pass1.value === pass2.value) {
        contrasenia.className = "form-control is-valid";
        return true;
    } else {
        contrasenia.className = "form-control is-invalid";
        return false;
    }
}

function validarPaquetes(paquetes) {
    if (paquetes.value === "basico") {
        console.log(paquetes.value);
    }
    if (paquetes.value === "estandar") {
        console.log(paquetes.value);
    }
    if (paquetes.value === "premium") {
        console.log(paquetes.value);
    }
}

let pagos = document.getElementById('pagos');

function validarPagos(pagos) {
    if (pagos.value == 0 ||
        pagos.value == "") {
        pagos.className = "form-control is-invalid";
        return false;
    } else {
        pagos.className = "form-control is-valid";
        return true;
    }
}

function validarGeneral(event) {
    event.preventDefault();
    console.log("desde validar gral");
    console.log("🚀 ~ file: validacionesRegistro.js ~ line 90 ~ validarPagos ~ validarPagos", validarPagos(document.getElementById("pagos")))
    console.log("🚀 ~ file: validacionesRegistro.js ~ line 90 ~ validarGeneral ~ validarTelefono", validarTelefono(document.getElementById("telefono")))
    console.log("🚀 ~ file: validacionesRegistro.js ~ line 90 ~ validarGeneral ~ validarEmail", validarEmail(document.getElementById("email")))
    console.log("🚀 ~ file: validacionesRegistro.js ~ line 90 ~ validarGeneral ~ validarNombre", validarNombre(document.getElementById("nombre")))
    if (validarNombre(document.getElementById("nombre")) &&
        validarEmail(document.getElementById("email")) &&
        validarTelefono(document.getElementById("telefono")) &&
        validarPagos(document.getElementById("pagos"))) {


        enviarEmail();

    } else {
        document.getElementById("alert").className = "alert alert-danger text-center";
        document.getElementById("alert").innerHTML = "Debe corregir los datos cargados";
    }
}

function enviarEmail() {
    let from_paquetes1 = document.getElementById("flexRadioBasico").checked;
    let from_paquetes2 = document.getElementById("flexRadioEstandar").checked;
    let from_paquetes3 = document.getElementById("flexRadioPremium").checked;

    let paquetes;

    if (from_paquetes1) {
        paquetes = document.getElementById("flexRadioBasico").value;
    }
    if (from_paquetes2) {
        paquetes = document.getElementById("flexRadioEstandar").value;
    }
    if (from_paquetes3) {
        paquetes = document.getElementById("flexRadioPremium").value;
    }

    emailjs.send("service_t768bpe", "template_ka586cf", {
        from_name: document.getElementById("nombre").value,
        from_telefono: document.getElementById("telefono").value,
        from_email: document.getElementById("email").value,
        from_contrasenia: document.getElementById("contrasenia").value,
        from_paquetes: paquetes,
        from_pago: document.getElementById("pagos").value,
    }).then(function(response) {
        console.log(response);
        Swal.fire(
            '¡Mensaje enviado!',
            'Los datos fueron enviados correctamente. Le informaremos cuando sea dado de alta.',
            'success'
        )
        document.getElementById("formRegistro").reset();
    }, function(error) {
        console.log(error);
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: '¡Algo salió mal! Asegúrate de haber completado los datos correctamente o inténtalo más tarde.',
        })
    });
}