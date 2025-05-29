const EnglishTest = require('../models/EnglishTest.model');

exports.getAllTests = async () => {
  return await EnglishTest.find();
};

exports.createTest = async (testData) => {
  const test = new EnglishTest(testData);
  return await test.save();
};