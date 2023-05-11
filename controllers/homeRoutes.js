const router = require('express').Router();
//response to route /
router.get('/',(req,res) => {
    //handlebar file
    res.render('test');
});
module.exports = router;