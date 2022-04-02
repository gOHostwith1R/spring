const { User } = require('../models/models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const tokenService = require('../service/TokenService');

class UserController {
  async registration(req, res) {
    const { userName, password, repeatPassword, firstName, lastName, age } =
      req.body;
    const candidate = await User.findOne({ where: { userName } });
    if (candidate) {
      throw new Error('User such already exists');
    }
    if (password !== repeatPassword) {
      throw new Error(`Passwords don't match`);
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
    return res.json({ ...tokens, userName: user.dataValues.userName });
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
