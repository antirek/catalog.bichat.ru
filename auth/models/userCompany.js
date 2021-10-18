const mongoose = require('mongoose');
const { Schema } = mongoose;

const userCompanySchema = new Schema({
  userId: String,
  companyId: String,
});

module.exports = {
  userCompanySchema,
}