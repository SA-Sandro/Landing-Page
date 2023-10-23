const mein = document.querySelector("main");
const nombre = document.querySelector("#name");
const messageContainer = document.querySelector(".messageContainer");
const apellidos = document.querySelector("#surname");
const locate = document.querySelector("#locate");
const email = document.querySelector("#mail");
const contra = document.querySelector("#pass");
const phone = document.querySelector("#phone");

let incompleto = false;


document.getElementById("formulario1").addEventListener("click", function (e) {
    e.preventDefault();

    validarFormulario(); //Validamos si el formulario está completo o no


    let formulario = new FormData(document.querySelector("#formulario1"));
    fetch('http://localhost/landingPage_PHP/php/registrar.php', {
        method: 'POST',
        body: formulario
    })
        .then(res => res.json())
        .then(data => {
            if (data == true && incompleto == false) {

                messageContainer.innerHTML =
                    '<p class="correcto">Te has registrado correctamente</p>'
                cleaningForm();
                dissapearInner();
            } else {
                console.log("hola")
                messageContainer.innerHTML =
                    '<p class="incorrecto">Debes de rellenar todos los datos del formulario</p>'
                cleaningForm();
                dissapearInner();
            }
        })


});

function validarFormulario() {
    if (nombre.value == "" || apellidos.value == "" || locate.value == "" ||
        email.value == "" || contra.value == "" || phone.value == "") {
        incompleto = true;
    }
}

function dissapearInner() {
    setTimeout(function () {
        messageContainer.innerHTML = '';
        location.href = "/landingPage_PHP/inicioSesion.html"
    }, 4000);
}

const cleaningForm = () => {
    nombre.value = '';
    apellidos.value = '';
    locate.value = '';
    email.value = '';
    contra.value = '';
    phone.value = '';
}







