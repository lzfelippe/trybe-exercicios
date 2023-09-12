const fs = require('fs/promises');

const addToFamily = async () => {
    const fileContent = await fs.readFile('./simpsonsFamily.json', 'utf-8');
    const characters = JSON.parse(fileContent);
    characters.push({ id: '8', name: 'Nelson Muntz' });
    await fs.writeFile('./simpsonsFamily.json', JSON.stringify(characters, null, 2));
};

const main = async () => {
    addToFamily();
};

main();