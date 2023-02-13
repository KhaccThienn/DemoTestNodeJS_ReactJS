const people = require("../models/people")

const peopleController = {
    getAll: (req, res) => {
        people.getAll((err, data) => {
            if (err) {
                res.json(err);
            } else {
                res.json(data);
            }
        });
    },
    getByID: (req, res) => {
        people.getByID(req.params.id, (err, data) => {
            if (err) {
                res.json(err);
            } else {
                res.json(data);
            }
        });
    },
    create: (req, res) => {
        req.body.avatar = `${req.get("host")+"/"+req.file.filename}`;
        people.create(req.body, (err, data) => {
            if (err) {
                res.json(err);
            } else {
                res.json(data);
            }
        });
    },

    update: (req, res) => {
        people.getByID(req.params.id, (err1, data1) => {
            if (err1) {
                res.json(err1);
            } else {
                if (!req.file) {
                    req.body.avatar = data1[0].avatar;
                } else {
                    req.body.avatar = `${req.get("host")+"/"+req.file.filename}`;
                }
                people.update(req.params.id, req.body, (err, data) => {
                    if (err) {
                        res.json(err);
                    } else {
                        res.json(data);
                    }
                });
            }
        });
    },

    delete: (req, res) => {
        people.delete(req.params.id, (err, data) => {
            if (err) {
                res.json(err);
            } else {
                res.json(data);
            }
        });
    }
};

module.exports = peopleController;