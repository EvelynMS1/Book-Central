// //html routes rendering 
// const router = require('express').Router();
// const { User, Savedbook } = require('../models');
// // const withAuth = require('../../Book-Central/util/auth');
// //response to route /
// router.get('/', (req, res) => {
//    res.render('login');

// });

// router.get('/login', (req, res) => {
//    if (req.session.loggedIn) {
//       res.redirect('/homepage');
//       return;
//    }
//    res.render('login');

// });
// //handlebar file for login
// router.get('/homepage', async (req, res) => {
//   try {
//     const userId = req.session.user_id;

//     // Find the current user by their ID
//     const user = await User.findOne({ where: { id: userId } });

//     if (user) {
//       // If the user is found, retrieve their associated books
//       const booksData = await Savedbook.findAll({
//         where: { user_id: userId },
//         // attributes: ['title', 'author'], // Include the book author in the response
//       });

//       const books = booksData.map((book) => book.get({ plain: true }));

//       res.render('homepage', { wishlist: books });
//     } else {
//       // User not found
//       res.render('homepage', { wishlist: [] });
//     }
//   } catch (error) {
//     // Handle any errors that occur during the database query
//     console.error('Error retrieving wishlist:', error);
//     res.json(error);
//   }
// });

// router.get('/checkout', (req, res) => {
//    res.render('checkout');
// });
// router.get('/signup',(req,res)=>{
//    res.render('signup');
// })

// router.get('/profile', async(req, res) => {
//   console.log('here');
//    try {
      
//     const userId = req.session.user_id;
//     console.log('userId:',userId); 
//      // Find the current user by their ID
//      const user = await User.findOne({ where: { id: userId} });
//       console.log('here',user);
//      if (user) {
//        // If the user is found, retrieve their associated book(s)
//        const booksData = await Savedbook.findAll({
//          where: { user_id: userId }, // Assuming there is a foreign key column 'userId' in the Book model
//          attributes: ['title'], // Specify the attributes/columns to retrieve (in this case, only the title)
//        });
//       //  const books = booksData.get({plain:true});
//        const books = booksData.map(book => book.get({ plain: true }));
//        console.log(books);
//        res.render('profile',{books});
      
//        if (books.length > 0) {
//          // At least one book associated with the user
//          const bookTitle = books[0].title;
//          console.log(books);
//          return bookTitle;
//        } else {
//          // User has no associated books
//          return null;
//        }
//      } else {
//        // User not found
//        return null;
//      }
//    } catch (error) {
//      // Handle any errors that occur during the database query
//      console.error('Error retrieving book title for current user:', error);
//      res.json(error);
//    }
//  });
  



   

// module.exports = router;

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

router.get('/homepage', async (req, res) => {
  try {
    const userId = req.session.user_id;
    const user = await User.findOne({ where: { id: userId } });

    if (user) {
      const booksData = await Savedbook.findAll({
        where: { user_id: userId },
      });

      const books = booksData.map((book) => book.get({ plain: true }));
      res.render('homepage', { wishlist: books });
    } else {
      res.render('homepage', { wishlist: [] });
    }
  } catch (error) {
    console.error('Error retrieving wishlist:', error);
    res.json(error);
  }
});

router.get('/checkout', (req, res) => {
   res.render('checkout');
});

router.get('/signup',(req,res)=>{
   res.render('signup');
})

router.get('/profile', async(req, res) => {
   try {
    const userId = req.session.user_id;
    const user = await User.findOne({ where: { id: userId} });

    if (user) {
       const booksData = await Savedbook.findAll({
         where: { user_id: userId },
         attributes: ['title'],
       });

       const books = booksData.map(book => book.get({ plain: true }));
       res.render('profile', {books});
      
       if (books.length > 0) {
         const bookTitle = books[0].title;
         return bookTitle;
       } else {
         return null;
       }
     } else {
       return null;
     }
   } catch (error) {
     console.error('Error retrieving book title for current user:', error);
     res.json(error);
   }
 });

module.exports = router;
