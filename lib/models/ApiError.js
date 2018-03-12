class ApiError extends Error {
  constructor(message, code, status = 500, payload) {
    super(message, code);
    this.code = code;
    this.status = status;
    this.payload = payload;
  }
}

module.exports = ApiError;
