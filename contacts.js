const fs = require("fs").promises;
const path = require("path");

const contactsPath = path.join(__dirname, "db/contacts.json");

async function listContacts() {
    const data = await fs.readFile(contactsPath);
    const parsedContactsList = JSON.parse(data);
    console.log(parsedContactsList);

    return parsedContactsList;
}

async function getContactById(contactId) {
    const contacts = await listContacts();
    const result = await contacts.find(({ id }) => id === contactId);

    if (!result) {
        throw new Error(`Contact with id = ${contactId} not found`);
    }
    console.log(result);
    return result;
}

module.exports = {
    listContacts,
    getContactById
};