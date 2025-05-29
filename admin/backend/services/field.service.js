const Field = require('../models/Field.model');

exports.getAllFields = async () => {
  return await Field.find();
};

exports.createField = async (fieldData) => {
  const field = new Field(fieldData);
  return await field.save();
};