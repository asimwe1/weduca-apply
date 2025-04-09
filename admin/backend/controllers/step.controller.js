const stepService = require('../services/step.service');

exports.getSteps = async (req, res) => {
  try {
    const steps = await stepService.getAllSteps();
    res.json(steps);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createStep = async (req, res) => {
  try {
    const step = await stepService.createStep(req.body);
    res.status(201).json(step);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};