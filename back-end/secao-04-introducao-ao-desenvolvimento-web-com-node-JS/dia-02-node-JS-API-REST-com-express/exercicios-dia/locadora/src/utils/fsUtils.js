const fs = require('fs').promises;

const PATH_DATA = './movies.json';

const readData = async () => {
    const data = await fs.readFile(PATH_DATA, 'utf-8');
    const parseData = JSON.parse(data);
    return parseData;
};

// readData();

const readDataById = async (id) => {
    const data = await fs.readFile(PATH_DATA, 'utf-8');
    const movies = JSON.parse(data);
    const chosenMovie = movies.find((movie) => movie.id === id);
    return chosenMovie;  
};

// readDataById(2);

const writeData = async (data) => {
    await fs.writeFile(PATH_DATA, JSON.stringify(data));
};

module.exports = {
    readData,
    readDataById,
    writeData,
};