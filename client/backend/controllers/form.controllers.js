const { handleFormData } = require('../services/form.services');
const Message = require('../models/message.model');

exports.submitForm = async (req, res) => {
    console.log('Form submitted:', req.body);
    const { country, firstName, lastName, email, phone, title, isReferred, referredName, referredEmail, comments } = req.body;

    // Validate required fields
    if (!country || !firstName || !lastName || !email || !phone || !title || !comments) {
        return res.status(400).json({ error: 'All required fields must be filled out' });
    }

    // Create a new message instance
    const messageData = {
        country,
        firstName,
        lastName,
        email,
        phone,
        title,
        isReferred,
        referredName,
        referredEmail,
        comments
    };

    try {
        // Save the message to the database
        const message = new Message(messageData);
        await message.save();

        // Handle the form data (send email and save to database)
        await handleFormData(messageData);

        res.status(200).json({ message: 'Form submitted successfully' });
    } catch (error) {
        console.error('Error submitting form:', error);
        res.status(500).json({ error: 'An error occurred while submitting the form' });
    }
};
