const express = require('express');
const { User } = require('./db/models/user.models');

const app = express();

app.get('/', (_req, res) => {
    console.log('mensagem');
    return res.json({
        message: 'working'
    });
});

app.get('/users', async (_req, res) => {
    const users = await User.findAll();
    return res.json(users);
});

module.exports = app;