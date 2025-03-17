const nodemailer = require('nodemailer');
const client = require('../config/db');

exports.handleFormData = async (data) => {
    console.log('Handling form data in service:', data);

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: process.env.EMAIL,
            pass: process.env.EMAIL_PASSWORD
        }
    });

    let mailOptions = {
        from: process.env.EMAIL,
        to: process.env.EMAIL,
        subject: 'New Form Submission',
        text: JSON.stringify(data, null, 2)
    };

    try{
        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully');

    } catch (error) {
        console.error('Error sending email:', error);
    }

    try {
        await client.connect();
        const database = client.db('form-submissions');
        const collection = database.collection('submissions');
        const result = await collection.insertOne(data);
        console.log('Form data saved to database:', result.ops[0]);
    } catch (error) {
        console.error('Error saving form data to database:', error);
    } finally {
        await client.close();
    }
    
};
