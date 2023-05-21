//html routes rendering 
const router = require('express').Router();
const{User}= require('../models');
const withAuth = require('..');
//response to route /
router.get('/',(req,res)=>{
   res.render('login');

});
// router.get('/',(req, res) => {  
//    if (req.session.logged_in=true) {
//      res.redirect('/homepage');
     
//    } else{
//       next();
//    }




  
// {
//       loggedIn: req.session.loggedIn,
//    }

// x
// router.get('/api/users/login', (req, res) => {
//    // If a session exists, redirect the request to the homepage
   
 
//    res.render('login');
//  });
// router.get('/users',async(req,res)=>{
//    try{
//       const userData = await User.findAll();
//       const users = userData.map(user => user.get({plain:true})); 
//       res.render ('homepage',{
//          sentence:'user',
//          users,
//       })

//    }catch(error){
//       res.status(500).json({error});
//    }

// });
router.get('/login',(req,res)=>{
   if(req.session.loggedIn){
      res.redirect('/homepage');
      return;
   }
      res.render('login');
   
});
 //handlebar file for login
router.get('/homepage',(req,res) => {
    res.render('homepage');
});
// router.get('/login', (req, res) => {
//    // If a session exists, redirect the request to the homepage
//    if (req.session.logged_in) {
//      res.redirect('/homepage');
//      return;
//    }
 
//    res.render('homepage');
//  });
 
// router.get('', (req, res) => {
//    // If the user is already logged in, redirect the request to another route
//    if (req.session.logged_in) {
//      res.redirect('/homepage');
//      return;
//    }
 
//    res.render('login');
//  });
//endpoints
module.exports = router;