class ApiError extends Error{
  constructor(status, message) {
    super();
    this.status = status
    this.message = message
  }

  static userExists(message) {
    return new ApiError(409, message)
  }

  static passwordsDontMatch(message) {
    return new ApiError(401, message)
  }

  static badRequest(message) {
    return new ApiError(400, message);
  }

}

module.exports = ApiError