const Institution = require('../models/Institution.model');

exports.getAllInstitutions = async () => {
  return await Institution.find();
};

exports.createInstitution = async (institutionData) => {
  const institution = new Institution(institutionData);
  return await institution.save();
};