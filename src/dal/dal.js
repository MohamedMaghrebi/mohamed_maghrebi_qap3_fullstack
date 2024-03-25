
// dal.js

const pool = require('../services/SQL/auth_db');

// Function to get all data from the bcrypt_qap3_inf table
const getLogins = async () => {
    if(DEBUG) console.log("Login Method Hit")
    return new Promise(function(resolve,reject){
const sql = 'SELECT id, first_name, number, last_name, email, password FROM public."bcrypt_qap3_info"'
pool.query(sql,[],(err,result)=>{
    if(err){
        reject(err)
    } else{
        resolve(result.rows)
        console.log(result)
    }
})})

};
var addLogin = function(first_name, password, number, email, last_name) {
    if(DEBUG) console.log("logins.pg.dal.addLogin()");
    return new Promise(function(resolve, reject) {
    const sql = `INSERT INTO public."bcrypt_qap3_info"(first_name, password, number, email, last_name) \
        VALUES ($1, $2, $3, $4, $5);`;
        pool.query(sql, [first_name, password, number,email,last_name], (err, result) => {
        if (err) {
            if(DEBUG) console.log(err);
            console.log("Error in Add Login")
            reject(err);
        } else {
            resolve(result.rows);
        }
    });
    });
};

var getLoginByLoginId = function(id) {
    if(DEBUG) console.log("logins.pg.dal.getLoginByLoginId()");
    return new Promise(function(resolve, reject) {
      const sql = `SELECT id, first_name, password FROM public."bcrypt_qap3_info" WHERE id = $1`;
      pool.query(sql, [id], (err, result) => {
        if (err) {
          // logging should go here
          if(DEBUG) console.log(err);
          reject(err);
        } else {
          resolve(result.rows);
        }
      }); 
    }); 
  };

var deleteLogin = function(id) {
    if(DEBUG) console.log("logins.pg.dal.deleteLogin()");
    return new Promise(function(resolve, reject) {
      const sql = `DELETE FROM public."bcrypt_qap3_info" WHERE id = $1;`;
      pool.query(sql, [id], (err, result) => {
        if (err) {
            reject(err);
          } else {
            resolve(result.rows);
          }
      });
    });
  };

  var patchLogin = function(id, first_name, password, last_name) {
    if(DEBUG) console.log("logins.pg.dal.patchLogin()");
    return new Promise(function(resolve, reject) {
      const sql = `UPDATE public."bcrypt_qap3_info" SET first_name=$2, password=$3,last_name=$4 WHERE id=$1;`;
      pool.query(sql, [id, first_name,password,last_name], (err, result) => {
        if (err) {
            reject(err);
          } else {
            resolve(result.rows);
          }
      });
    });
  };

module.exports = {
    getLogins,
    addLogin,
    deleteLogin,
    getLoginByLoginId,
    patchLogin
    // insertData
    };

// Function to insert data into the bcrypt_qap3_info table
// const insertData = async (data) => {
// const { id, first_name, number, date, last_name, email, password } = data;
// const query = 'INSERT INTO bcrypt_qap3_info (id, first_name, number, date, last_name, email, password, client,login) VALUES ($1, $2, $3, $4, $5, $6, $7)';
// const values = [id, first_name, number, date, last_name, email, password];
// try {
//     await pool.query(query, values);
//     console.log('Data inserted successfully.');
// } catch (error) {
//     console.error('Error inserting data:', error);
//     throw error;
// }
// };

// Export the functions to be used in other modules
// module.exports = {
// getLogins,
// // insertData
// };




// var getMovies = function() {
//     if(DEBUG) console.log("logins.pg.dal.getLogins()");
//     return new Promise(function(resolve, reject) {
//       const sql = `SELECT movie_id, movie_name FROM public."Movies" \
//           ORDER BY id DESC LIMIT 7;`
//       dal.query(sql, [], (err, result) => {
//         if (err) {
//           // logging should go here
//           if(DEBUG) console.log(err);
//           reject(err);
//         } else {
//           resolve(result.rows);
//         }
//       }); 
//     }); 
//   };