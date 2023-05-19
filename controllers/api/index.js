const router = require('express').Router();

// const bookRoutes = require('./bookRoutes');
const userRoutes = require('./userRoutes');

router.use('/users', userRoutes);
// router.use('/bookShelf', bookRoutes);

module.exports = router;