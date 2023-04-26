function updateSliderValue(sliderId) {
  const slider = document.getElementById(`slider${sliderId}`);
  const sliderValue = document.getElementById(`slider-value${sliderId}`);
  sliderValue.textContent = slider.value;
}


