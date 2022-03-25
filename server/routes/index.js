const Router = require('express');
const router = new Router();
const loginRouter = require('./loginRouter');
const cardsRouter = require('./cardsRouter');

// router.use('/');
router.use('/user', loginRouter);
router.use('/', cardsRouter);

module.exports = router;