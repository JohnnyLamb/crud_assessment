var mongoose = require('mongoose');
var Schema   = mongoose.Schema;
var Animal = new Schema(
  {
    name: String,
    friendly: String
  }
);

process.env.DB_HOST = 'mongodb://localhost/animals';

mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/animals');

module.exports = mongoose.model('animals', Animal);
