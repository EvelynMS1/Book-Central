//html routes rendering 
const router = require('express').Router();
const{User}= require('../models')
//response to route /
router.get('/', (req, res) => {
   res.render('login');


});
router.get('/users',async(req,res)=>{
   try{
      const userData = await User.findAll();
      const users = userData.map(user => user.get({plain:true})); 
      res.render ('homepage',{
         sentence:'user',
         users,
      })

   }catch(error){
      res.status(500).json({error});
   }

});

 //handlebar file for login
router.get('/homepage',(req,res) => {
    res.render('homepage', { pageTitle: 'Book Central'});
});
//endpoints
module.exports = router;