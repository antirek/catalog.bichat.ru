const mongoose = require('mongoose');
const { Schema } = mongoose;

const companySchema = new Schema({
  companyId: String,
  title: String,
  description: String,
  logoUrl: String,
  name: String,
});

module.exports = {
  companySchema,
}