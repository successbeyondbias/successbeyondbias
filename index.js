let slideIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.project-carousel img');
    if (index < 0) {
        slideIndex = slides.length - 1;
    } else if (index >= slides.length) {
        slideIndex = 0;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slides[slideIndex].style.display = 'block';
}

function prevSlide() {
    slideIndex--;
    showSlide(slideIndex);
}

function nextSlide() {
    slideIndex++;
    showSlide(slideIndex);
}


showSlide(slideIndex);


setInterval(nextSlide, 3000);


