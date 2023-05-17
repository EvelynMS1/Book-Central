//html routes rendering 
const router = require('express').Router();
//response to route /
router.get('/', (req, res) => {
   res.render('login');


});

 //handlebar file for login
// router.get('/homepage',(req,res) => {
//     res.render('homepage', { pageTitle: 'Book Central'});
// });
//endpoints
module.exports = router;