document.addEventListener("DOMContentLoaded", () => {
    const buttons = [
        { className: "tc1", imgId: "tc01", textClass: "tc11" },
        { className: "tc2", imgId: "tc02", textClass: "tc22" },
        { className: "tc3", imgId: "tc03", textClass: "tc33" },
        { className: "tc4", imgId: "tc04", textClass: "tc44" },
    ];

    const allImages = document.querySelectorAll(".tc-img");
    const allTexts = document.querySelectorAll(".tcSub p");
    const diSub = document.querySelector(".tcSub");

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