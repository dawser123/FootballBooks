
export const slideLeft = (sliderId, offset) => {
    const slider = document.getElementById(sliderId);
    slider.scrollTo({
      left: slider.scrollLeft - offset,
      behavior: "smooth",
    });
  };
  
  export const slideRight = (sliderId, offset) => {
    const slider = document.getElementById(sliderId);
    slider.scrollTo({
      left: slider.scrollLeft + offset,
      behavior: "smooth",
    });
  };
  