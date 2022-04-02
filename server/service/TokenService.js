const jwt = require('jsonwebtoken');

class TokenService {
  generateToken(payload) {
    const accessToken = jwt.sign(payload, process.env.SECRET_KEY_ACCESS, {
      expiresIn: '1m',
    });
    const refreshToken = jwt.sign(payload, process.env.SECRET_KEY_REFRESH, {
      expiresIn: '30d',
    });
    return {
      accessToken,
      refreshToken,
    };
  }
  validateAccessToken(token) {
    try {
      return jwt.verify(token, process.env.SECRET_KEY_ACCESS);
    } catch (e) {
      return null;
    }
  }

  validateRefreshToken(token) {
    try {
      return jwt.verify(token, process.env.SECRET_KEY_REFRESH);
    } catch (e) {
      return null;
    }
  }
}

module.exports = new TokenService()