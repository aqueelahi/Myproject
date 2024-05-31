
const hairDescButton = document.getElementById("hairDescButton");
const hairDescSelect = document.getElementById("hairdesc");

hairDescButton.addEventListener("click",function () {
    const hairDesc = hairDescSelect.value;
    const resourcehtml = "coilyhaircare.html";
    window.location.href= coilyhaircare.html
});

const hairDescButton = document.getElementById("hairDescButton");
const hairDescSelect = document.getElementById("hairdesc");

hairDescButton.addEventListener("click",function () {
    const hairDesc = hairDescSelect.value;
    const resourcehtml = "coilyhaircare.html";
    window.location.href= coilyhaircare.html
});

const slidesContainer = document.getElementById("slides-container");
const slide = document.querySelector(".slide");
const prevButton = document.getElementById("slide-arrow-prev");
const nextButton = document.getElementById("slide-arrow-next");

nextButton.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft += slideWidth;
});

prevButton.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft -= slideWidth;
});
