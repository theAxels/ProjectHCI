var slideIndex = 1;
var dots = document.getElementsByClassName("dot");
var slides = document.getElementsByClassName("slides");

showSlides(slideIndex);

function currentSlides(n){
    showSlides(slideIndex = n-1);
}

function plusSlides(n){
    showSlides(slideIndex += (n-1));
}

function showSlides(n){
    var i;
    if(n > slides.length) {
        slideIndex = 1;
    }

    if (n < 1){
        slideIndex = slides.length;
    }

    for(i = 0; i < slides.length;i++){
        slides[i].style.display = "none";
    }

    for(j = 0; j < dots.length;j++){
        dots[j].className = dots[j].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    // console.log(dots)
}

//Auto
var slideIndex = 0;
showSlides();

function showSlides(){
    var i;
    // var slides = document.getElementsByClassName("slides");
    for(i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }
    slideIndex++;
    if(slideIndex > slides.length){
        slideIndex = 1;
    }

    for(j = 0; j < dots.length;j++){
        dots[j].className = dots[j].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

setInterval(showSlides, 4000);