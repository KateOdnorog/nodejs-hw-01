import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  try {
    const contactsList = await readContacts();
    await writeContacts([...contactsList.slice(0, -1)]);
    console.log('Останній контакт видалено');
  } catch (err) {
    console.error('Помилка видалення контакту:', err);
  }
};

removeLastContact();
