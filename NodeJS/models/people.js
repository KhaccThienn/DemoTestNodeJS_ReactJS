const conn = require("../Database/connect");

const people = {
    getAll: (callback) => {
        let query = "SELECT p.*, pr.name as 'ProvinceName' FROM people p JOIN province pr ON p.province_id = pr.id";
        conn.query(query, (err, result) => {
            if (err) {
                callback(err, null);
            } else {
                callback(null, result);
            }
        }); 
    },
    getByID: (id, callback) => {
        let query = "SELECT * FROM people WHERE id = ?";
        conn.query(query, id, (err, result) => {
            if (err) {
                callback(err, null);
            } else {
                callback(null, result);
            }
        }); 
    },

    create: (data, callback) => {
        let query = "INSERT INTO people SET ?";
        conn.query(query, data, (err, result) => {
            if (err) {
                callback(err, null);
            } else {
                callback(null, result);
            }
        }); 
    },

    update: (id, data, callback) => {
        let query = "UPDATE people SET ? WHERE id = ?";
        conn.query(query, [data, id], (err, result) => {
            if (err) {
                callback(err, null);
            } else {
                callback(null, result);
            }
        }); 
    },

    delete: (id, callback) => {
        let query = "DELETE FROM people WHERE id = ?";
        conn.query(query, id, (err, result) => {
            if (err) {
                callback(err, null);
            } else {
                callback(null, result);
            }
        }); 
    }
};

module.exports = people;