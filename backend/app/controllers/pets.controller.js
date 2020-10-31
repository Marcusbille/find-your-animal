const db = require("../models");
const Pet_main = db.pets_main;
const Pet_additional = db.pets_additional;
const Pet_catch_info = db.pets_catch_info;
const Pet_health = db.pets_health;
const Pet_images = db.pets_images;
const Pet_move = db.pets_move;
const Pet_responsible = db.pets_responsible;
const Pet_sanitation = db.pets_sanitation;
const Pet_vaccination = db.pets_vaccination;
const Pet_owners = db.pets_owners;

const Op = db.Sequelize.Op;
const Sequelize = require("sequelize");

Pet_main.hasOne(Pet_additional, { foreignKey: 'card_num' });
Pet_main.hasOne(Pet_catch_info, { foreignKey: 'card_num' });
Pet_main.hasOne(Pet_health, { foreignKey: 'card_num' });
Pet_main.hasOne(Pet_images, { foreignKey: 'card_num' });
Pet_main.hasOne(Pet_move, { foreignKey: 'card_num' });
Pet_main.hasOne(Pet_responsible, { foreignKey: 'card_num' });
Pet_main.hasMany(Pet_sanitation, { foreignKey: 'card_num' });
Pet_main.hasMany(Pet_vaccination, { foreignKey: 'card_num' });
Pet_main.hasOne(Pet_owners, { foreignKey: 'card_num' });

Pet_additional.belongsTo(Pet_main, { foreignKey: 'card_num' });
Pet_catch_info.belongsTo(Pet_main, { foreignKey: 'card_num' });
Pet_health.belongsTo(Pet_main, { foreignKey: 'card_num' });
Pet_images.belongsTo(Pet_main, { foreignKey: 'card_num' });
Pet_move.belongsTo(Pet_main, { foreignKey: 'card_num' });
Pet_responsible.belongsTo(Pet_main, { foreignKey: 'card_num' });
Pet_sanitation.belongsTo(Pet_main, { foreignKey: 'card_num' });
Pet_vaccination.belongsTo(Pet_main, { foreignKey: 'card_num' });
Pet_owners.belongsTo(Pet_main, { foreignKey: 'card_num' });


// exports.create = (req, res) => {
//     if (!req.body.name) {
//         res.status(400).send({
//             message: "Content can not be empty!"
//         });
//         return;
//     }
//     const pet = {
//         name: req.body.name,
//         species: req.body.species,
//         breed: req.body.breed,
//         gender: req.body.gender,
//         passport: req.body.passport,
//         sterilised: req.body.sterilised,
//         eye_color: req.body.eye_color,
//         hair_color: req.body.hair_color,
//         hair_type: req.body.hair_type,
//         description: req.body.description,
//         size: req.body.size,
//         age: req.body.age,
//         disability: req.body.disability,
//         state: req.body.state,
//         shelter_id: req.body.shelter_id
//     };
//     Pet.create(pet)
//         .then(data => {
//             res.send(data);
//         })
//         .catch(err => {
//             res.status(500).send({
//                 message: err.message || "Some error occurred while creating the pet."
//             });
//         });
// };

exports.getAllPets = (req, res) => {
    Pet_main.findAll({
            where: {
                shelter_id: {
                    [Op.not]: null
                }
            },
            include: [{
                    model: Pet_additional
                }, {
                    model: Pet_catch_info
                },
                {
                    model: Pet_health
                },
                {
                    model: Pet_move
                },
                {
                    model: Pet_responsible
                },
                {
                    model: Pet_sanitation
                },
                {
                    model: Pet_vaccination
                },
                {
                    model: Pet_owners
                }
            ]
        })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving shelters."
            });
        });
};

// exports.findOne = (req, res) => {
//     const id = req.params.id;

//     Pet.findByPk(id)
//         .then(data => {
//             res.send(data);
//         })
//         .catch(err => {
//             res.status(500).send({
//                 message: "Error retrieving Pet with id=" + id
//             });
//         });
// };

// exports.update = (req, res) => {
//     const id = req.params.id;

//     Pet.update(req.body, {
//             where: { id: id }
//         })
//         .then(num => {
//             if (num == 1) {
//                 res.send({
//                     message: "Pet was updated successfully."
//                 });
//             } else {
//                 res.send({
//                     message: `Cannot update Pet with id=${id}. Maybe pet was not found or req.body is empty!`
//                 });
//             }
//         })
//         .catch(err => {
//             res.status(500).send({
//                 message: "Error updating Pet with id=" + id
//             });
//         });
// };

// exports.delete = (req, res) => {
//     const id = req.params.id;

//     Pet.destroy({
//             where: { id: id }
//         })
//         .then(num => {
//             if (num == 1) {
//                 res.send({
//                     message: "pet was deleted successfully!"
//                 });
//             } else {
//                 res.send({
//                     message: `Cannot delete pet with id=${id}. Maybe pet was not found!`
//                 });
//             }
//         })
//         .catch(err => {
//             res.status(500).send({
//                 message: "Could not delete pet with id=" + id
//             });
//         });
// };

// exports.deleteAll = (req, res) => {
//     Pet.destroy({
//             where: {},
//             truncate: false
//         })
//         .then(nums => {
//             res.send({ message: `${nums} Tutorials were deleted successfully!` });
//         })
//         .catch(err => {
//             res.status(500).send({
//                 message: err.message || "Some error occurred while removing all tutorials."
//             });
//         });
// };

// exports.findAllByShelter = (req, res) => {

//     Pet.findAll({
//             attributes: { exclude: ['description', 'shelter_id', 'state'] },
//             where: { shelter_id: req.params.shelter_id }
//         })
//         .then(data => {
//             res.send(data);
//         })
//         .catch(err => {
//             res.status(500).send({
//                 message: err.message || "Some error occurred while retrieving data."
//             });
//         });
// };