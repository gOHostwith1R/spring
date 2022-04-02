const Router = require('express');
const userController = require('../controllers/userController');
const router = new Router();
const { body } = require('express-validator');

router.post('/login', userController.login);
router.post(
  '/registration',
  body('userName').isLength({ min: 3 }),
  body('password')
    .isLength({ min: 4 })
    .matches(/^[A-Za-z0-9]+$/),
  body('repeatPassword')
    .isLength({ min: 4 })
    .matches(/^[A-Za-z0-9]+$/),
  body('fistName').isLength({ min: 4 }),
  body('lastName').isLength({ min: 4 }),
  userController.registration,
);
router.get('/refresh', userController.refresh);

module.exports = router;
