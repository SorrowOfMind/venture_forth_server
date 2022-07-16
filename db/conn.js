const mysql = require('mysql');

const conn = mysql.createConnection(
    {
        host: process.env.HOST,
        user: process.env.USER,
        pswd: process.env.PASSWORD
    }
);

conn.connect(error => {
    if (error) {
        throw error
    }

    console.log("Database successfully connected!");
});

module.exports = conn;