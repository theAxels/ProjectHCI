let topButton = document.getElementById("GoTopBtn")
window.onscroll = function(){
    scrollFunction();
}

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      topButton.style.display = "block";
    } else {
      topButton.style.display = "none";
    }
}

function topFunction() {
    document.documentElement.scrollTop = 0;
}