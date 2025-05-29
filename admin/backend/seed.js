// seed.js
const mongoose = require('mongoose');
const { connectDB } = require('./config/db');
const Country = require('./models/Country.model');
const Field = require('./models/Field.model');
const ApplicationStep = require('./models/ApplicationStep.model');
const Institution = require('./models/Institution.model');
const EnglishTest = require('./models/EnglishTest.model');
const Student = require('./models/Student.model');
const Application = require('./models/Application.model');
const {
  countriesWithDetails,
  fields,
  applicationSteps,
  institutionDetails,
  englishTests,
  sampleStudents,
} = require('./data/sampleData');

const seedData = async () => {
  try {
    await connectDB();
    console.log('Connection established');

    console.log('Clearing collections...');
    await Promise.all([
      Country.deleteMany({}),
      Field.deleteMany({}),
      ApplicationStep.deleteMany({}),
      Institution.deleteMany({}),
      EnglishTest.deleteMany({}),
      Student.deleteMany({}),
      Application.deleteMany({}),
    ]);
    console.log('Collections cleared');

    console.log('Seeding data...');
    const countries = await Country.insertMany(countriesWithDetails);
    await Field.insertMany(fields);
    await ApplicationStep.insertMany(applicationSteps);
    const institutions = await Institution.insertMany(institutionDetails);
    const tests = await EnglishTest.insertMany(englishTests.map(test => ({
      name: test.name,
      desc: test.desc,
      icon: 'placeholder-icon-url',
    })));
    const students = await Student.insertMany(sampleStudents);

    // Helper function to find institution by name
    const findInstitutionId = (name) => {
      const institution = institutions.find(i => i.name === name);
      if (!institution) {
        console.warn(`Institution not found: "${name}"`);
        return null;
      }
      return institution._id;
    };

    // Define sample applications here, after students and institutions are seeded
    const sampleApplications = [
      {
        student: students[0]._id, // Emma Wilson
        institution: findInstitutionId("University of Toronto"),
        program: "Computer Science",
        date: new Date("2023-09-15"),
        status: "approved",
      },
      {
        student: students[1]._id, // Michael Chen
        institution: findInstitutionId("McGill University"),
        program: "Business Administration",
        date: new Date("2023-09-14"),
        status: "pending",
      },
      {
        student: students[2]._id, // Sophia Rodriguez
        institution: findInstitutionId("University of British Columbia"),
        program: "Environmental Science",
        date: new Date("2023-09-12"),
        status: "rejected",
      },
      {
        student: students[3]._id, // James Johnson
        institution: findInstitutionId("University of Waterloo"),
        program: "Engineering",
        date: new Date("2023-09-10"),
        status: "approved",
      },
      {
        student: students[4]._id, // Olivia Thompson
        institution: findInstitutionId("Queen's University"),
        program: "Psychology",
        date: new Date("2023-09-08"),
        status: "pending",
      },
    ];

    // Filter out applications with missing institutions
    const validApplications = sampleApplications.filter(app => app.institution !== null);
    if (validApplications.length < sampleApplications.length) {
      console.warn(`Skipped ${sampleApplications.length - validApplications.length} applications due to missing institutions`);
    }

    if (validApplications.length > 0) {
      await Application.insertMany(validApplications);
      console.log('Applications seeded successfully');
    } else {
      console.warn('No valid applications to seed');
    }

    console.log('Data seeded successfully');
  } catch (error) {
    console.error('Seeding error:', error);
  } finally {
    mongoose.connection.close();
    console.log('Connection closed');
  }
};

seedData();