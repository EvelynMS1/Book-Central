const router = require('express').Router();

// const bookRoutes = require('./bookRoutes');
const userRoutes = require('./userRoutes');
const bookRoutes = require('./bookRoutes');

router.use('/users', userRoutes);
router.use('/book', bookRoutes);


module.exports = router;