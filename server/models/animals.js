var mongoose = require('mongoose');
var Schema   = mongoose.Schema;
var Animal = new Schema(
  {
    name: String,
    friendly: String
  }
);

process.env.DB_HOST = 'mongodb://localhost/animals';

mongoose.connect(process.env.DB_HOST || 'mongodb://heroku_9vt4f50f:939ukdae6tqj2c1d1gqjj834mq@ds053198.mongolab.com:53198/heroku_9vt4f50f');

module.exports = mongoose.model('animals', Animal);
