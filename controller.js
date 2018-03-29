const HttpStatus = require('http-status-codes');

const hello = async (req, res) => {
  res.status(HttpStatus.OK).send("Hello World!")
};

module.exports = {
    hello
};
