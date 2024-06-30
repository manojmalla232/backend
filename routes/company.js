const express = require('express');
const router = express.Router();
const Company = require('../models/Company');

router.post('/add', async (req, res) => {
  const { name, reviewLink, username, password } = req.body;

  try {
    const newCompany = new Company({ name, reviewLink, username, password });
    await newCompany.save();
    res.status(201).json(newCompany);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
