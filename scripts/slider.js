var slideIndex = 2;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("feedback__img");
    if (n > slides.length) {slideIndex = 2}    
    if (n < 2) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "initial";
    slides[slideIndex-2].style.display = "initial";  
}
