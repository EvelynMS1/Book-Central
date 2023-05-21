$(document).ready(function() {

  // Upload photo functionality
  $('#edit-image-btn').on('click', function() {
    // trigger the click event of hidden file input
    $('#hidden-photo-upload').click();
  });

  // Handle about section edit button click
  $('#edit-about-btn').on('click', function() {
    // Implement functionality for editing about section
    // input field
  });

  $('#hidden-photo-upload').on('change', function() {
    // User has selected a file, upload it to your server here
    let file = $(this)[0].files[0];
    // Perform AJAX request to server to upload the file, depends on server-side logic
  });

  // Add friend functionality
  $('#addFriendButton').on('click', function() {
    let friendEmail = $('#friendEmail').val();
    // Perform AJAX request to server to add the friend, depends on server-side logic
  });


   // Implement functionality for adding books to the wishlist, etc.
  // function to loop through favorites list and present top three books
  // Display favorite books - this would usually be done on the server side and rendered with handlebars
  // Display number of books read - this would usually be done on the server side and rendered with handlebars
  let booksRead = 0; // This would usually come from your server
  $('#booksRead').text(booksRead);

  // Display number of friends - this would usually be done on the server side and rendered with handlebars
  let friendCount = 0; // This would usually come from your server
  $('#friendCounter').text(friendCount);

  // Display favorite books - this would usually be done on the server side and rendered with handlebars
  let favoriteBooks = []; // This would usually come from your server
  for (let i = 0; i < favoriteBooks.length; i++) {
    if (i === 3) break; // Limits displayed books to 3
    $('#favoriteBooks').append(`
      <div class="book-card col-md-4">
        <img src="${favoriteBooks[i].image}" alt="Book Image">
        <h3>${favoriteBooks[i].title}</h3>
        <p>${favoriteBooks[i].author}</p>
      </div>
    `);
  }
});