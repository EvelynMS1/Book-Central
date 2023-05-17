//html routes rendering 
const router = require('express').Router();
//response to route /
router.get('/', (req, res) => {
    res.render('login');
});

 //handlebar file for login
router.get('/home',(req,res) => {
    res.render('home', { pageTitle: 'Book Central'});
});
//endpoints
module.exports = router;