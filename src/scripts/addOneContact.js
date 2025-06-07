import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const addOneContact = async () => {
  try {
    const contactsList = await readContacts();
    const newAddOneContact = createFakeContact();
    writeContacts([...contactsList, newAddOneContact]);
    console.log('Контакт успішно додано');
  } catch (err) {
    console.error('Помилка додавання контакту:', err);
  }
};

addOneContact();
