const { User } = require('../models/models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

class UserController {
  async registration(req, res) {
    const { userName, password, firstName, lastName, age } = req.body;
    console.log(userName, password, firstName, lastName, age);
    // const candidate = await User.findOne({ where: { userName } });
    const hashPassword = await bcrypt.hash(password, 5);
    const user = await User.create({
      userName,
      password: hashPassword,
      firstName,
      lastName,
      age,
    });
    const token = jwt.sign({ userName, firstName }, process.env.SECRET_KEY, {
      expressIn: '24h',
    });
    return res.statusCode(200);
  }
  async login(req, res) {
    if (req.body.userName === 'admin' && req.body.password === '1234') {
      res.status(200).send('Ok');
    } else {
      res.status(403).send({ message: 'Forbidden' });
    }
  }
  async check(req, res) {

  }
}

module.exports = new UserController();
