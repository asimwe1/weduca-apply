const institutionService = require('../services/institution.service');

exports.getInstitutions = async (req, res) => {
  try {
    const institutions = await institutionService.getAllInstitutions();
    res.json(institutions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createInstitution = async (req, res) => {
  try {
    const institution = await institutionService.createInstitution(req.body);
    res.status(201).json(institution);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};