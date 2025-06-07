import { writeContacts } from '../utils/writeContacts.js';

export const removeAllContacts = async () => {
  try {
    await writeContacts([]);
    console.log('Всі контакти видалено');
  } catch (err) {
    console.error('Помилка видалення даних:', err);
  }
};

removeAllContacts();
