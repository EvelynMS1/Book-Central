const router = require('express').Router();
const withAuth = require('../../util/auth')
const { Savedbook } = require('../../models');
router.post('/comments', withAuth, async (req, res) => {
  try {
    // will save to the table in savedbook model'
    const booktitle = await Savedbook.create({
      ...req.body,
      user_id: req.session.user_id,
    });
    console.log(booktitle);
    // req.session.save(() => {
    //     req.session.user= booktitle.get
    // ({plain:true});
    // req.session.logged_in = true;

    res.status(200).json(booktitle);
  }
  catch (err) {
    console.log(err);
    res.status(400).json(err);
  }


});
module.exports = router;