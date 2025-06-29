document.addEventListener("DOMContentLoaded", function () {
    const sizeElements = [
        document.querySelector('.cap1'),
        document.querySelector('.cap2'),
        document.querySelector('.cap3'),
        document.querySelector('.cap4'),
        document.querySelector('.ring'),
        document.querySelector('.cyl1'),
        document.querySelector('.cyl2'),
        document.querySelector('.cyl3')
    ];

    sizeElements.forEach(el => el.style.display = 'none');

    let currentIndex = 0;

    document.querySelector('.ss01').addEventListener('click', function () {
        if (currentIndex < sizeElements.length) {
            sizeElements[currentIndex].style.display = 'block';
            currentIndex++;
        }
    });
});