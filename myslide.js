let slideIndex = -1;
    showSlides(slideIndex);

    function plusSlides(mySlides) {
        showSlides(slideIndex += n);
    }

    function showSlides(mySlides) {
        var i;
        var slides = document.getElementsByClassName("mySlides");

        // Loop back to the first slide if reached the end
        if (n > slides.length) {
            slideIndex = 1;
        } else if (n < 1) {
            slideIndex = slides.length;
        }

        // Hide all slides
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        // Display the current slide
        slides[slideIndex - 1].style.display = "inline-block";
