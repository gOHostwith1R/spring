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
        userName: user.userName,
        firstName: user.firstName,
      });
      res.cookie('refreshToken', tokens.refreshToken, {
        maxAge: 30 * 24 * 60 * 60 * 1000,
        httpOnly: true,
      });
      return res.json({ ...tokens, userName: user.userName });
    } catch (e) {
      next(e);
    }
  }
  async login(req, res, next) {
    try {
      const { userName, password } = req.body;
      const user = await User.findOne({ where: { userName } });
      if (!user) {
        return next(ApiError.badRequest('User Name or password incorrect'));
      }
      const isCorrectPassword = await bcrypt.compare(password, user.password);
      if (!isCorrectPassword) {
        return next(ApiError.badRequest('User Name or password incorrect'));
      }
      const tokens = tokenService.generateToken({
        userName: user.userName,
        firstName: user.firstName,
      });
      res.cookie('refreshToken', tokens.refreshToken, {
        maxAge: 30 * 24 * 60 * 60 * 1000,
        httpOnly: true,
      });
      return res.json({ ...tokens, userName: user.dataValues.userName });
    } catch (e) {
      next(e);
    }
  }
  async check(req, res) {}
}

module.exports = new UserController();
