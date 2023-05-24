const router = require('express').Router();
// const withAuth = require('../../util/auth');
const { Savedbook } = require('../../models');
router.post('/comments', async (req, res) => {
  try {
    // will save to the table in savedbook model'
    const booktitle = await Savedbook.create({
      ...req.body,
      user_id:req.session.user_id,
    
      // {...req.body,
      // user_id: req.session.user_id,
      // title: req.session.title}
  });
    console.log(booktitle);
//response to client in the format of the string for response body from the post on the server side 
    res.status(200).json(booktitle);
  }
  catch (err) {
    console.log(err);
    res.status(400).json(err);
  }


});
module.exports = router;