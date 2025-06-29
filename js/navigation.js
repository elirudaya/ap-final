document.addEventListener("DOMContentLoaded", () => {
    const buttons = [
        { className: "nvg1", imgId: "nvg11" },
        { className: "nvg2", imgId: "nvg22" },
        { className: "nvg3", imgId: "nvg33" },
        { className: "nvg4", imgId: "nvg44" },
        { className: "nvg5", imgId: "nvg55" },
        { className: "nvg6", imgId: "nvg66" },
        { className: "nvg7", imgId: "nvg77" },
        { className: "nvg8", imgId: "nvg88" },
        { className: "nvg9", imgId: "nvg99" },
        { className: "nvg10", imgId: "nvg100" }
    ];

    const allImages = document.querySelectorAll(".nvg-pic");

    buttons.forEach(({ className, imgId }) => {
        const trigger = document.querySelector(`.${className}`);
        const target = document.getElementById(imgId);

        if (trigger && target) {
        trigger.addEventListener("click", () => {
            allImages.forEach(pic => pic.classList.remove("visible"));
            target.classList.add("visible");
        });
        }
    });
});