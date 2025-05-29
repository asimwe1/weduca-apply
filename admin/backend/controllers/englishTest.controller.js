const englishTestService = require('../services/englishTest.service');

exports.getTests = async (req, res) => {
  try {
    const tests = await englishTestService.getAllTests();
    res.json(tests);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createTest = async (req, res) => {
  try {
    const test = await englishTestService.createTest(req.body);
    res.status(201).json(test);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};