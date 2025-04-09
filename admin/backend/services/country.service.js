const Country = require('../models/Country.model');

exports.getAllCountries = async () => {
  return await Country.find();
};

exports.createCountry = async (countryData) => {
  const country = new Country(countryData);
  return await country.save();
};