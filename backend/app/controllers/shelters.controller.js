const db = require("../models");
const Shelter = db.shelters;
const Op = db.Sequelize.Op;
const Sequelize = require("sequelize");


exports.getShelters = (req, res) => {
    Shelter.findAll().then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message
        });
    });
}