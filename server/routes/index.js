const Router = require('express');
const router = new Router();
const userRouter = require('./userRouter');
const cardsRouter = require('./cardsRouter');

// router.use('/');
router.use('/user', userRouter);
router.use('/', cardsRouter);

module.exports = router;