import { readContacts } from '../utils/readContacts.js';

export const countContacts = async () => {
  try {
    const contactsList = await readContacts();
    return `Кількість контактів: ${contactsList.length}`;
  } catch (err) {
    console.error('Помилка при підрахунку даних:', err);
  }
};

console.log(await countContacts());
