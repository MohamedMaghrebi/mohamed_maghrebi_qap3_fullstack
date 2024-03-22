
const Pool = require('pg').Pool
const pool = new Pool({
user: 'postgres',
host: 'localhost',
database: 'QAP3_FS',
password: 'Amir2022#',
port: 5432,
});

pool.connect((err) => {
    if (err) {
    console.error('Error connecting to the database', err);
    } else {
    console.log('Connected to the PostgreSQL database QAP3_FS');
    }
});

module.exports = pool;