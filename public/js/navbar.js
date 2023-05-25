// This is a self-invoking anonymous function to avoid polluting the global namespace
(function() {
    // Get the dropdown button
    var dropdown = document.querySelector('.dropdown');
    var dropdownContent = document.querySelector('.dropdown-content');

    // When the user hovers over the dropdown button, show the dropdown content
    dropdown.addEventListener('mouseover', function() {
        dropdownContent.style.display = 'block';
    });

    // When the user hovers away from the dropdown, hide the dropdown content
    dropdown.addEventListener('mouseout', function() {
        dropdownContent.style.display = 'none';
    });

    // If the user clicks outside the dropdown, also hide the dropdown content
    window.addEventListener('click', function(event) {
        if (!dropdown.contains(event.target)) {
            dropdownContent.style.display = 'none';
        }
    });

    // assuming you have buttons with class 'addToCart' and 'addToWishlist'
    var addToCartButtons = document.querySelectorAll('.addToCart');
    var addToWishlistButtons = document.querySelectorAll('.addToWishlist');

    addToCartButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            // Add your addToCart functionality here
        });
    });

    addToWishlistButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            // Add your addToWishlist functionality here
        });
    });
})();
