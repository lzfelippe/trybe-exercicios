const app = require('./app');
const sequelize = require('./db/connection');

const PORT = process.env.PORT || 3001;

const MODE = process.env.NODE_ENV || 'development';

app.listen(PORT, async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
        await sequelize.sync();
        console.log(`[${MODE}] Server listening on ${PORT}`);
    } catch (error) {
        console.error('Unable to connect to the database:', error);
        process.exit(1); // encerra com erro
    }
});