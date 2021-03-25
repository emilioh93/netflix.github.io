function validarNombre(input) {
    console.log("Se ejecutó onblur");
    // let input = document.querySelector("#nombre");
    // trim() nos quita los espacios vacíos. Así evito que el usuario ponga espacios para completar un campo
    if (input.value.trim() === "") {
        input.className = "form-control is-invalid"
        return false;
    } else {
        input.className = "form-control is-valid"
        return true;
    }
}

function validarTelefono(inputTel) {
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

function validarContrasenia(inputConsulta) {
    if (inputConsulta.value.trim() != "" && inputConsulta.value.length >= 10) {
        inputConsulta.className = "form-control is-valid";
        return true;
    } else {
        inputConsulta.className = "form-control is-invalid";
        return false;
    }
}

// let checkTerminos = document.querySelector("#terminos");
// checkTerminos.addEventListener("change", validarTerminos);

// function validarTerminos() {
//     console.log("desde la función de checkbox");
//     if (checkTerminos.checked) {
//         checkTerminos.className = "form-check-input is-valid";
//         return true;
//     } else {
//         checkTerminos.className = "form-check-input is-invalid";
//         return false;
//     }
// }

function validarGeneral(event) {
    // preventDefault() detiene el comportamiento por defecto, en este caso recargar la página
    event.preventDefault();
    console.log("desde validar gral");
    if (validarNombre(document.getElementById("nombre")) &&
        validarTelefono(document.getElementById("telefono")) &&
        validarEmail(document.getElementById("email")) &&
        validarContrasenia(document.getElementById("contrasenia"))) {

        enviarEmail();

    } else {
        document.getElementById("alert").className = "alert alert-danger text-center";
        document.getElementById("alert").innerHTML = "Debe corregir los datos cargados";
        // alert("Debe corregir los datos cargados");

    }
}

function enviarEmail() {
    emailjs.send("service_t768bpe", "template_vc5x6ep", {
        to_name: document.getElementById("nombre").value,
        from_name: "Administrador",
        message: `Email: ${document.getElementById("email").value} - Teléfono: ${document.getElementById("telefono").value} - Contrasenia: ${document.getElementById("contrasenia").value}`
    }).then(function(response) {
        console.log(response);
        document.getElementById("alert").className = "alert alert-success text-center";
        document.getElementById("alert").innerHTML = "Los datos fueron enviados al usuario";
        // alert("Los datos fueron enviados al usuario");
        document.getElementById("formRegistro").reset();
    }, function(error) {
        console.log(error);
        document.getElementById("alert").className = "alert alert-danger text-center";
        document.getElementById("alert").innerHTML = "Error en el envío. Inténtelo más tarde";
        // alert("Error en el envío. Inténtelo más tarde");
    });

}