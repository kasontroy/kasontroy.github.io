;(function(){

	var slider = document.getElementById("slideshow"),
			sliderItems = slider.getElementsByTagName("li"),
			currentSlide = 0;

	function sliderInit(){
		//set first item to be current
		sliderItems[currentSlide].className = "is-current";
		setInterval(updateCurrent,3000);
	}
	function updateCurrent(){
		var currentSlideElem = sliderItems[currentSlide];
		
		if (currentSlide < sliderItems.length - 1){
			currentSlide++;
		} else{
			currentSlide = 0;
		}

		currentSlideElem.className = "";
		sliderItems[currentSlide].className = "is-current";

	}


	function init() {
    sliderInit();
  }

  init();
})();