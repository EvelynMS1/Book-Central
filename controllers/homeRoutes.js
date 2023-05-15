const router = require('express').Router();
//response to route /
router.get('/', (req, res) => {
    res.render('home');
});

 //handlebar file for login
router.get('/login',(req,res) => {
    res.render('login', { pageTitle: 'Book Central'});
});

module.exports = router;