eventListerners();


function eventListerners() {
    let ui = new UI()
    //navbar button
    document.querySelector('.nav__hamburguer').addEventListener('click', function () {
        ui.navbarClick()
    })
}


//constructor function UI 
function UI() { };
//UI methods
UI.prototype.navbarClick = function () {
    console.log('entro')

    let value = document.querySelector('.nav__hamburguer')
    let navbar = document.querySelector('.nav__list')
    if (value.classList.contains("change")) {
        console.log('contiene')
        value.classList.remove("change");
        navbar.classList.remove("nav__list--show");
     } else {
        value.classList.add("change");
     navbar.classList.add("nav__list--show");
     }
}