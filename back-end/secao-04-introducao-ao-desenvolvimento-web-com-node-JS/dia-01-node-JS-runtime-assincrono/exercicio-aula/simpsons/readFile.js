const fs = require('fs').promises;

const readFile = async () => {
    try {
        const fileContent = await fs.readFile('./simpsons.json', 'utf-8');
        const characters = JSON.parse(fileContent);
        const characterString = characters.map(({id, name}) => `${id} - ${name}`);  
        characterString.forEach((string) => console.log(string));
    } catch (error) {
        console.log('Erro ao ler o arquivo: ', error);
    }
};

readFile();