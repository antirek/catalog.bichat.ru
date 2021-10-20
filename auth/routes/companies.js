const express = require('express');
const {Company} = require('./../models');

const companiesRouter = express.Router();

companiesRouter.get('/', async (req, res) => {
  try {
    const companies = await Company.find();
    console.log('companies', companies);
    res.json(companies);    
  } catch (err) {
    console.log(err);
    res.json([]);
  }
});

module.exports = {companiesRouter};
