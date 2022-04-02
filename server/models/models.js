const sequelize = require('../db');
const { DataTypes } = require('sequelize');

const User = sequelize.define('user', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  userName: { type: DataTypes.STRING, unique: true },
  password: { type: DataTypes.STRING },
  firstName: { type: DataTypes.STRING },
  lastName: { type: DataTypes.STRING },
  age: { type: DataTypes.INTEGER },
});

const Card = sequelize.define('card', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  title: { type: DataTypes.STRING },
  subtitle: { type: DataTypes.STRING },
  avatar: { type: DataTypes.STRING },
  altCards: { type: DataTypes.STRING },
});

const Token = sequelize.define('token', {
  userId: {type: DataTypes.INTEGER },
  refreshToken: {type: DataTypes.STRING, required: true}
})

User.hasOne(Token);
Token.belongsTo(User);

module.exports = {
  User,
  Card,
  Token,
};
