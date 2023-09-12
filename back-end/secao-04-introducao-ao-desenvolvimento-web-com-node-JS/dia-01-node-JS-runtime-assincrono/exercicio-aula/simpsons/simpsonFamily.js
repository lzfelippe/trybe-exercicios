const fs = require('fs/promises');

const simpsonFamily = async () => {
    const fileContent = await fs.readFile('./simpsons.json', 'utf-8');
    const characters = JSON.parse(fileContent);
    const familyIds = [1, 2, 3, 4];
    const family = characters.filter((simpson) => familyIds.includes(Number(simpson.id)));
    await fs.writeFile('./simpsonsFamily.json', JSON.stringify(family, null, 2));
};

const main = async () => {
    simpsonFamily();
};

main();