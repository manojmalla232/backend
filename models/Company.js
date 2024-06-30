const mongoose = require('mongoose');

const CompanySchema = new mongoose.Schema({
  name: { type: String, required: true },
  reviewLink: { type: String, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
});

module.exports = mongoose.model('Company', CompanySchema);
