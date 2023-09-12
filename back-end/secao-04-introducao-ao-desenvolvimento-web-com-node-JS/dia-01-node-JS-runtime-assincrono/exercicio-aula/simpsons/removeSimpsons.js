const fs = require('fs/promises');

const removeSimpsons = async () => {
    const fileContent = await fs.readFile('./simpsons.json', 'utf-8');
    const characters = JSON.parse(fileContent);
    const charactersAtt = characters.filter((simpson) => simpson.id !== '10' && simpson.id !== '6');
    await fs.writeFile('./simpsons.json', JSON.stringify(charactersAtt, null, 2));
};

const main = async () => {
    removeSimpsons();
};

main();