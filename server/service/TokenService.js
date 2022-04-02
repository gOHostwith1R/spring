const jwt = require('jsonwebtoken');

class TokenService {
  generateToken(payload) {
    const accessToken = jwt.sign(payload, process.env.SECRET_KEY_ACCESS, {
      expiresIn: '15m',
    });
    const refreshToken = jwt.sign(payload, process.env.SECRET_KEY_REFRESH, {
      expiresIn: '30d',
    });
    return {
      accessToken,
      refreshToken,
    };
  }
}

module.exports = new TokenService()