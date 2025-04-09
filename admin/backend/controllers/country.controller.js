const countryService = require('../services/country.service');

exports.getCountries = async (req, res) => {
  try {
    const countries = await countryService.getAllCountries();
    res.json(countries);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createCountry = async (req, res) => {
  try {
    const country = await countryService.createCountry(req.body);
    res.status(201).json(country);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};