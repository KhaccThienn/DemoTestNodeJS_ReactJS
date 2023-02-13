const mysql = require("mysql");

const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "db_bkap_test"
});

conn.connect((err) => {
    if (err) {
        console.log(err);   
    } else {
        console.log(`Connect to database success !`);
    }
});

module.exports = conn;