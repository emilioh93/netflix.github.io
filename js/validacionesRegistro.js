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

function validarGeneral(event) {
    event.preventDefault();
    console.log("desde validar gral");
    if (campoObligatorio(document.getElementById("nombre")) &&
        validarEmail(document.getElementById("email")) &&
        validarNumeros(document.getElementById("telefono"))) {

        enviarEmail();

    } else {
        document.getElementById("alert").className = "alert alert-danger text-center";
        document.getElementById("alert").innerHTML = "Debe corregir los datos cargados";
    }
}

function enviarEmail() {
    emailjs.send("service_t768bpe", "template_vc5x6ep", {
        to_name: document.getElementById("nombre").value,
        from_name: "Administrador",
        message: `Email: ${document.getElementById("email").value} - Teléfono: ${document.getElementById("telefono").value} - Consulta: ${document.getElementById("consulta").value}`
    }).then(function(response) {
        console.log(response);
        document.getElementById("alert").className = "alert alert-success text-center";
        document.getElementById("alert").innerHTML = "Los datos fueron enviados al usuario";
        // alert("Los datos fueron enviados al usuario");
        document.getElementById("formSubsc").reset();
    }, function(error) {
        console.log(error);
        document.getElementById("alert").className = "alert alert-danger text-center";
        document.getElementById("alert").innerHTML = "Error en el envío. Inténtelo más tarde";
        // alert("Error en el envío. Inténtelo más tarde");
    });

}