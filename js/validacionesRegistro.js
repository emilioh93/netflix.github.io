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

// TODO: obligar al usuario a elegir una opción paquetes como en forma de pago

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

// TODO: obligar al usuario a elegir forma de pago

let pagos = document.getElementById("pago").selectedIndex;

function validarPagos(pagos) {
    if (pagos == null || pagos == 0) {
        pagos.className = "form-control is-invalid";
        return false;
    }
}

function validarGeneral(event) {
    event.preventDefault();
    console.log("desde validar gral");
    if (validarNombre(document.getElementById("nombre")) &&
        validarEmail(document.getElementById("email")) &&
        validarTelefono(document.getElementById("telefono"))) {

        enviarEmail();

    } else {
        document.getElementById("alert").className = "alert alert-danger text-center";
        document.getElementById("alert").innerHTML = "Debe corregir los datos cargados";
    }
}

function enviarEmail() {
    let from_paquetes1 = document.getElementById("flexRadioBasico").checked;
    let from_paquetes2 = document.getElementById("flexRadioEstandar").checked;
    console.log("🚀 ~ file: validacionesRegistro.js ~ line 104 ~ enviarEmail ~ from_paquetes2", from_paquetes2)
    let from_paquetes3 = document.getElementById("flexRadioPremium").checked;
    console.log("🚀 ~ file: validacionesRegistro.js ~ line 106 ~ enviarEmail ~ from_paquetes3", from_paquetes3)
    console.log("🚀 ~ file: validacionesRegistro.js ~ line 103 ~ enviarEmail ~ from_paquetes1", from_paquetes1)

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

    console.log(paquetes);




    emailjs.send("service_t768bpe", "template_ka586cf", {
        from_name: document.getElementById("nombre").value,
        from_telefono: document.getElementById("telefono").value,
        from_email: document.getElementById("email").value,
        from_contrasenia: document.getElementById("contrasenia").value,
        // FIXME: no se envía la información de paquetes
        from_paquetes: paquetes,
        from_pago: document.getElementById("pago").value,
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
console.log("🚀 ~ file: validacionesRegistro.js ~ line 146 ~ enviarEmail ~ paquetes", paquetes)
console.log("🚀 ~ file: validacionesRegistro.js ~ line 146 ~ enviarEmail ~ paquetes", paquetes)