const fieldService = require('../services/field.service');

exports.getFields = async (req, res) => {
  try {
    const fields = await fieldService.getAllFields();
    res.json(fields);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createField = async (req, res) => {
  try {
    const field = await fieldService.createField(req.body);
    res.status(201).json(field);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};