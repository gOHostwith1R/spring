const Router = require('express');
const router = new Router();
const loginRouter = require('./loginRouter');

// router.use('/');
router.use('/user', loginRouter);

module.exports = router;