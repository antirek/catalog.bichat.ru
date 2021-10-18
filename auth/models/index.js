const mongoose = require('mongoose');
const config = require('config');
mongoose.Promise = Promise;

const dbConnection = mongoose.createConnection(config.get('mongodb'), {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const {userSchema} = require('./user');
const {userSessionSchema} = require('./userSession');
const {companySchema} = require('./company');
const {userCompanySchema} = require('./userCompany');

const User = dbConnection.model('users', userSchema);
const UserSession = dbConnection.model('usersessions', userSessionSchema);
const Company = dbConnection.model('companies', companySchema);
const UserCompany = dbConnection.model('usercompanies', userCompanySchema);

module.exports = {
  User,
  UserSession,
  Company,
  UserCompany,
}