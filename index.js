const yargs = require("yargs");
const { hideBin } = require("yargs/helpers");
const info = require("./contactsFunctions/contacts");

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const products = await info.listContacts();
      console.table(products);
      break;

    case "get":
      const contact = await info.getContactById(id);
      if (!contact) {
        throw new Error(`Contact with id = ${id} not found`);
      }
      console.log(contact);
      break;

    case "add":
      const newContact = await info.addContact(name, email, phone);
      console.log(newContact);
      break;

    case "remove":
      const removeProduct = await info.removeContact(id);
      if (!removeProduct) {
        throw new Error(`Contact with id = ${id} not found`);
      }
      console.log(removeProduct);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

const arr = hideBin(process.argv);
const { argv } = yargs(arr);

invokeAction(argv);
