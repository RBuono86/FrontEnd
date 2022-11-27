$(document).ready( function() {
    $(window).scroll(function () {
        // checks if window is scrolled more then 500px, adds/removes solid class
        if ($(this).scrollTop() > 550) {
            $('.navbar').addClass('Solid');
            $('.back-to-top').removeClass('visible');
        }
    });
});

$(document).ready(function() {
    // Add smooth scrolling to all links
    $("a").on('click', function (event) {

        if (this.hash != "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            $('html, body').animate( {
                scrollTop: $(hash).offset().top
            }, 800, function () {
                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;     });
            } // end if
    });
});