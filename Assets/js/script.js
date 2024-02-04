const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
  reloadOnContextChange: true,
  multiplier: 0.5,
  tablet: {
    smooth: true
  },
  smartphone: {
    smooth: true
  }
})


// hamburger menu
const menuIcon = document.querySelector(".hamburger-menu");

const navbar = document.querySelector(".navbar-m");

menuIcon.addEventListener("click", () => {
  navbar.classList.toggle("change");
});

// slider-1
const initSlider = () => {
  const sliders = document.querySelectorAll(".slider-div");

  sliders.forEach((slider) => {
    const imageList = slider.querySelector(".slider-wrapper .image-list");
    const slideButtons = slider.querySelectorAll(".slider-wrapper .slide-button");
    const sliderScrollbar = slider.querySelector(".right-slider .slider-scrollbar");
    const scrollbarThumb = sliderScrollbar.querySelector(".scrollbar-thumb");
    const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;

    // ... (Rest of the code remains unchanged)

    // Slide images according to the slide button clicks
    slideButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const direction = button.id === "prev-slide" ? -1 : 1;
        const scrollAmount = imageList.clientWidth * direction;
        imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
      });
    });

    // Show or hide slide buttons based on scroll position
    const handleSlideButtons = () => {
      slideButtons[0].style.display = imageList.scrollLeft <= 0 ? "none" : "flex";
      slideButtons[1].style.display =
        imageList.scrollLeft >= maxScrollLeft ? "none" : "flex";
    };

    // Update scrollbar thumb position based on image scroll
    const updateScrollThumbPosition = () => {
      const scrollPosition = imageList.scrollLeft;
      const thumbPosition =
        (scrollPosition / maxScrollLeft) *
        (sliderScrollbar.clientWidth - scrollbarThumb.offsetWidth);
      scrollbarThumb.style.left = `${thumbPosition}px`;
    };

    // Call these two functions when image list scrolls
    imageList.addEventListener("scroll", () => {
      updateScrollThumbPosition();
      handleSlideButtons();
    });
  });
};

window.addEventListener("resize", initSlider);
window.addEventListener("load", initSlider);


