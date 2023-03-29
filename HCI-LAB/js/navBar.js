let hamburgerMenu = document.querySelector('#HamMenu');
let closeButton = document.querySelector('#xButton');
let sliderMenu = document.querySelector('#navMenus');

hamburgerMenu.onclick = function() {
    hamburgerMenu.classList.toggle('active');
    closeButton.classList.toggle('active');
    sliderMenu.classList.add('ON');
}

closeButton.onclick = function() {
    hamburgerMenu.classList.toggle('active');
    closeButton.classList.toggle('active');
    sliderMenu.classList.remove('ON');
}
