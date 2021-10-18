const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSessionSchema = new Schema({
  userId: String,
  authKey: String,
});

module.exports = {
  userSessionSchema,
}