const ApplicationStep = require('../models/ApplicationStep.model');

exports.getAllSteps = async () => {
  return await ApplicationStep.find().sort('stepNumber');
};

exports.createStep = async (stepData) => {
  const step = new ApplicationStep(stepData);
  return await step.save();
};