$(document).ready(function() {
    $('#wishlistDropdown').on('click', function() {
      // Perform AJAX request to server to fetch the wishlist items
      $.get('/wishlist', function(data) {
        // data should be an array of wishlisted items
        let wishlistItems = data;
  
        // Clear the dropdown
        $('.wishlist-dropdown').empty();
  
        // Add each item to the dropdown
        wishlistItems.forEach(function(item) {
          let cardHtml = `
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">${item.title}</h5>
                <p class="card-text">${item.author}</p>
                <button class="btn btn-link share-button" data-book-id="${item.id}">🔗</button>
              </div>
            </div>
          `;
          $('.wishlist-dropdown').append(cardHtml);
        });
  
        // Re-bind event handlers for share buttons after new elements are added
        $('.share-button').on('click', function(e) {
          e.preventDefault(); // Prevent redirect to book page when clicking on the share button
          let bookId = $(this).data('book-id');
  
          // Get friend's email, this could be done with a prompt, or UI element
          let friendEmail = prompt("Enter your friend's email:");
  
          // Implement AJAX request to server to share the book
        });
      });
    });
  });
  