
const toggle_Container = document.querySelector(".contenedor");
const toggle_cruz = document.querySelector(".burguer");
const toggle_velo = document.querySelector(".velo");

document.querySelector(".burguer").addEventListener("click", ()=>{
    toggle_velo.classList.toggle("showVelo");
    toggle_Container.classList.toggle("showContenedor");
    toggle_cruz.classList.toggle("showCruz");
    

});