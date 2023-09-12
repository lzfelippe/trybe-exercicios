const fs = require('fs/promises');

const findById = async (id) => {
    const data = await fs.readFile('./simpsons.json', 'utf-8');
    const simpsons = JSON.parse(data);
    const personFound = simpsons.find((simpson) => Number(simpson.id) === id)
    if (!personFound) {
        throw new Error('id não enconstrado');
    }
    return personFound;
};

const main = async () => {
    const simpson = await findById(1);
    console.log(simpson);
};

main();