// ======================blog slider starts=======================

window.addEventListener("load", function () {
    const blogSlider = document.querySelector(".blog-slider");
    const blogSliderWrapper = document.querySelector(".blog-slider--wrapper");
    const blogSliderMain = document.querySelector(".cards");
    const blogSliderItems = document.querySelectorAll(".card-item");
    const prevBtn = document.querySelector(".prev-btn img");
    const nextBtn = document.querySelector(".next-btn img");

    const sliderItemWidth = blogSliderItems[0].offsetWidth;
    const slideLength = blogSliderItems.length;

    let positionX = 0;
    let index = 0;

    prevBtn.addEventListener("click", function () {
        handleChangSlide(-1);
    });
    nextBtn.addEventListener("click", function () {
        handleChangSlide(1);
    });

    function handleChangSlide(dir) {
        if (dir == 1) {
            if (index >= 0 && index < slideLength - 3) {
                positionX = positionX - sliderItemWidth - 30;
                blogSliderMain.style = `transform: translate(${positionX}px)`;
                index++;
                console.log(index);
            }
        } else if (dir == -1) {
            if (index > 0 && index <= slideLength - 3) {
                positionX = positionX + sliderItemWidth + 30;
                blogSliderMain.style = `transform: translate(${positionX}px)`;
                index--;
                console.log(index);
            }
        }
    }
});
// ======================blog slider ends=======================
