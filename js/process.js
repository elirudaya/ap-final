document.addEventListener("DOMContentLoaded", () => {
const images = [
    ".pcs1", ".pcs2", 
    ".pcs3", ".pcs4", 
    ".pcs5", ".pcs6",
    ".pcs7", ".pcs8", 
    ".pcs9", ".pcs10", 
    ".pcs11"
];

let currentIndex = 0;

document.querySelector(".processScreen").addEventListener("click", (e) => {
    if (e.target.closest('a') || e.target.closest('.pcs-back')) return;

    if (currentIndex < images.length) {
    const img = document.querySelector(images[currentIndex]);
    if (img) {
        img.style.display = "block";
    }
    currentIndex++;
    }
});
});