//html routes rendering 
const router = require('express').Router();
const { User, Savedbook } = require('../models');
router.get('/', (req, res) => {
   res.render('login');

});

router.get('/login', (req, res) => {
   if (req.session.loggedIn) {
      res.redirect('/homepage');
      return;
   }
   res.render('login');

});
//handlebar file for login
router.get('/homepage', (req, res) => {
   res.render('homepage');
});

router.get('/checkout', (req, res) => {
   res.render('checkout');
});
router.get('/signup',(req,res)=>{
   res.render('signup');
})

router.get('/profile', async(req, res) => {
  console.log('here');
   try {
      
    const userId = req.session.user_id;
    console.log('userId:',userId); 
     // Find the current user by their ID
     const user = await User.findOne({ where: { id: userId} });
      console.log('here',user);
     if (user) {
       // If the user is found, retrieve their associated book(s)
       const booksData = await Savedbook.findAll({
         where: { user_id: userId }, // Assuming there is a foreign key column 'userId' in the Book model
         attributes: ['title'], // Specify the attributes/columns to retrieve (in this case, only the title)
       });
      //  const books = booksData.get({plain:true});
       const books = booksData.map(book => book.get({ plain: true }));
       console.log(books);
       res.render('profile',{books});
      
       if (books.length > 0) {
         // At least one book associated with the user
         const bookTitle = books[0].title;
         console.log(books);
         return bookTitle;
       } else {
         // User has no associated books
         return null;
       }
     } else {
       // User not found
       return null;
     }
   } catch (error) {
     // Handle any errors that occur during the database query
     console.error('Error retrieving book title for current user:', error);
     res.json(error);
   }
 });
  



   

module.exports = router;