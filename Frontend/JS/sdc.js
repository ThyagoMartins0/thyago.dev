const carousel = document.querySelector('.carousel');
let isMoving = false;

function moveCarousel(direction) {
    if (!isMoving) {
        isMoving = true;
        const currentPosition = carousel.scrollLeft;
        const itemWidth = carousel.firstElementChild.offsetWidth;
        const imagesPerSlide = 3;
        let newIndex;

        if (direction === 'next') {
            newIndex = (currentPosition + carousel.offsetWidth) / (itemWidth * imagesPerSlide) * imagesPerSlide;
            newIndex = Math.min(newIndex, carousel.scrollWidth - carousel.offsetWidth);
        } else {
            newIndex = (currentPosition - carousel.offsetWidth) / (itemWidth * imagesPerSlide) * imagesPerSlide;
            newIndex = Math.max(newIndex, 0);
        }

        carousel.scrollTo({
            left: newIndex * itemWidth,
            behavior: 'smooth'
        });

        setTimeout(() => {
            isMoving = false;
        }, 500); // Tempo de transição em milissegundos
    }
}

document.addEventListener('DOMContentLoaded', () => {
    setInterval(() => moveCarousel('next'), 3000); // Move para o próximo conjunto de 3 imagens a cada 3 segundos
});
