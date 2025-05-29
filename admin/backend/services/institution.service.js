const Institution = require('../models/Institution.model');

exports.getAllInstitutions = async () => {
  return await Institution.find();
};

exports.getInstitutionById = async (id) => {
  return await Institution.findById(id);
};

exports.createInstitution = async (institutionData) => {
  const institution = new Institution(institutionData);
  return await institution.save();
};