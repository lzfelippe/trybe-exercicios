const fs = require('fs/promises');

const addMaggie = async () => {
    const fileContent = await fs.readFile('./simpsonsFamily.json', 'utf-8');
    const characters = JSON.parse(fileContent);
    const  familyWithNelson = characters.filter((simpson) => simpson.id !== '8');
    const newFamily = familyWithNelson.concat([{ id: '15', name: 'Maggie Simpson' }]);
    await fs.writeFile('./simpsonsFamily.json', JSON.stringify(newFamily, null, 2));
};

const main = async () => {
    addMaggie();
};

main();