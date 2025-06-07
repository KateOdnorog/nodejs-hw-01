import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
  try {
    const contactsList = await readContacts();
    const newGenerationContacts = [...Array(number)].map(() =>
      createFakeContact(),
    );
    await writeContacts([...contactsList, ...newGenerationContacts]);
    console.log('Дані успішно згенеровані');
  } catch (err) {
    console.error('Помилка генерації даних:', err);
  }
};

generateContacts(5);
