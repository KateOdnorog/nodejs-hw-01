import { readContacts } from '../utils/readContacts.js';

export const getAllContacts = async () => {
  try {
    const contactsList = await readContacts();
    return contactsList;
  } catch (err) {
    console.error('Помилка при отриманні списку контактів:', err);
  }
};

console.log(await getAllContacts());
