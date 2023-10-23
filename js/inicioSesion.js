
document.querySelector(".btn").addEventListener("submit", function (e) {
    e.preventDefault();


    let formulario = new FormData(document.querySelector(".loginUsuario"));

    fetch('http://localhost/landingPage_PHP/php/autentificar.php', {
        method: "POST",
        body: formulario
    })
        .then(res => res.json())
        .then(data => {
            if (data == true) {
                alert("hola");
            } else {
                alert("cagaste");
            }
        })




})
