
// db.js

const { Pool } = require('pg').Pool

// Create a new Pool instance with connection configuration
const pool = new Pool({
user: 'postgres',
host: 'localhost',
database: 'bcrypt_qap3_info',
password: 'Amir2022#',
  port: 5432, // Default PostgreSQL port
});


pool.connect((err) => {
if (err) {
    console.error('Error connecting to the database', err);
} else {
    console.log('Connected to the PostgreSQL database bcrypt_qap3_info!');
}
});

module.exports = pool;

