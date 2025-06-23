const express = require('express');
const contactRouter = express.Router();
const Contact = require('../models/contact');

contactRouter.post('/', async (req,res) => {
  try{
    const { name, email, message } = req.body;
    console.log('Received contact information:', { name, email, message });
    // Validate input
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'All fields are required' });
    }

  // Create a new instance of the Contact model and pass name, email, and message  from req.body to the name email, and message fields of newContact
    const newContact = new Contact({  
      name: name,
      email: email,
      message: message
    });

    // Save to database
    await newContact.save();

    // Respond with success
    res.status(201).json({ message: 'Contact information saved successfully' });


} catch (error){
console.log('Error saving contact information:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
})

module.exports = contactRouter;