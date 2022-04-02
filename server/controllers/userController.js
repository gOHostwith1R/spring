const { User } = require('../models/models');
const bcrypt = require('bcrypt');
const tokenService = require('../service/TokenService');
const ApiError = require('../error/ApiError');
const { validationResult } = require('express-validator');
class UserController {
  async registration(req, res, next) {
    try {
      const { userName, password, repeatPassword, firstName, lastName, age } =
        req.body;
      const errors = validationResult(req);
      console.log(errors);
      if (!errors.isEmpty()) {
        console.log(errors);
      }
      const candidate = await User.findOne({ where: { userName } });
      if (candidate) {
        return next(ApiError.userExists('User such exists'));
      }
      if (password !== repeatPassword) {
        return next(ApiError.passwordsDontMatch(`Passwords don't match`));
      }
      const hashPassword = await bcrypt.hash(password, 5);
      const user = await User.create({
        userName,
        password: hashPassword,
        firstName,
        lastName,
        age,
      });

      const tokens = tokenService.generateToken({
        userName: user.dataValues.userName,
        firstName: user.dataValues.firstName,
      });
      await tokenService.saveToken(user.dataValues.id, tokens.refreshToken);
      res.cookie('refreshToken', tokens.refreshToken, {
        maxAge: 30 * 24 * 60 * 60 * 1000,
        httpOnly: true,
      });
      return res.json({ ...tokens, userName: user.dataValues.userName });
    } catch (e) {
      next(e);
    }
  }
  async login(req, res) {
    console.log(req);
    if (req.body.userName === 'admin' && req.body.password === '1234') {
      res.status(200).send('Ok');
    } else {
      res.status(403).send({ message: 'Forbidden' });
    }
  }
  async check(req, res) {}
}

module.exports = new UserController();
