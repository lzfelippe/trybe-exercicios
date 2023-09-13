const express = require('express');
const { readDataById, readData, writeData } = require('./utils/fsUtils');

const app = express();

app.use(express.json());

app.get('/movies/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const movie = await readDataById(id);
        if (!movie) res.status(404).json({ message: 'Movie not found' });
        res.status(200).json(movie);
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

app.get('/movies', async (_req, res) => {
    try {
        const movies = await readData();
        res.status(200).json(movies);
    } catch (error) {
        res.status(404).json({ message: 'Movies not found' });
    }
});

app.post('/movies', async (req, res) => {
    const { movie, price } = req.body;
    try {
        const movies = await readData();
        const newMovie = { id: movies.length + 1, movie, price };
        movies.push(newMovie);
        await writeData(movies);
        res.status(201).json(newMovie);
    } catch (error) {
        res.status(401).json({ message: 'Registration not completed' });
    }
});

module.exports = app;