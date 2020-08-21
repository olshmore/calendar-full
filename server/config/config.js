if (process.env.NODE_ENV === 'production') {
  module.exports = {
    secret: 'somesecret'
  };
} else {
  module.exports = {
    secret: 'othersecret'
  };
}
