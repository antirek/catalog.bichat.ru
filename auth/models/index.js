const mongoose = require('mongoose');
const config = require('config');
mongoose.Promise = Promise;

const dbConnection = mongoose.createConnection(
    config.get('mongodb'), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

const {userSchema} = require('./user');

const User = dbConnection.model('users', userSchema);

module.exports = {
    User
}