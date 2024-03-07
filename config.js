const app = require('./app');

// Example configuration
const config = {
    port: 3000,
    database: {
        host: 'localhost',
        username: 'admin',
        password: 'password',
        database: 'mydb',
    },
};

module.exports = config;