const mongoose = require('mongoose');
const Contact = require('./backend/models/Contact');
require('dotenv').config({ path: './backend/.env' });

async function checkContacts() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected to MongoDB');
    const contacts = await Contact.find();
    console.log(`Found ${contacts.length} contacts:`);
    console.log(JSON.stringify(contacts, null, 2));
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

checkContacts();
