document.addEventListener("DOMContentLoaded", function () {
  const pages = document.querySelectorAll(".pg-img");
  let currentIndex = 0;

  function showPage(index) {
    pages.forEach((page, i) => {
      page.style.display = i === index ? "block" : "none";
    });
  }

  showPage(currentIndex); 

  document.querySelector(".left-ar").addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
      showPage(currentIndex);
    }
  });

  document.querySelector(".right-ar").addEventListener("click", () => {
    if (currentIndex < pages.length - 1) {
      currentIndex++;
      showPage(currentIndex);
    }
  });
});
