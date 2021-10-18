const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  userId: String,
  mobile: String,
  code: String,
});

module.exports = {
  userSchema,
}