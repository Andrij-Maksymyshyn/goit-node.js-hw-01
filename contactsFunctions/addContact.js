const fs = require("fs/promises");
const listContacts = require("./listContacts");
const contactsPath = require("./contactsPath");

async function addContact(name, email, phone) {
  const contacts = await listContacts();
  const newContact = {
    id: new Date().getTime().toString(),
    name,
    email,
    phone,
  };

  contacts.push(newContact);

  await fs.writeFile(contactsPath, JSON.stringify(contacts));

  return newContact;
}

module.exports = addContact;
