document.addEventListener("DOMContentLoaded", () => {
    const buttons = [
        { className: "di1", imgId: "di01", textClass: "di11" },
        { className: "di2", imgId: "di02", textClass: "di22" },
        { className: "di3", imgId: "di03", textClass: "di33" },
        { className: "di4", imgId: "di04", textClass: "di44" },
        { className: "di5", imgId: "di05", textClass: "di55" },
        { className: "di6", imgId: "di06", textClass: "di66" },
        { className: "di7", imgId: "di07", textClass: "di77" }
    ];

    const allImages = document.querySelectorAll(".di-img");
    const allTexts = document.querySelectorAll(".diSub p");
    const diSub = document.querySelector(".diSub");

    buttons.forEach(({ className, imgId, textClass }) => {
        const trigger = document.querySelector(`.${className}`);
        const image = document.getElementById(imgId);
        const text = document.querySelector(`.${textClass}`);

        if (trigger && image && text) {
            trigger.addEventListener("click", () => {
                allImages.forEach(img => img.classList.remove("visible"));
                allTexts.forEach(p => p.style.display = "none");

                image.classList.add("visible");
                text.style.display = "block";

                diSub.classList.add("visible");
            });
        }
    });
});