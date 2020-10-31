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
const Shelter = db.shelters;

const Op = db.Sequelize.Op;
const Sequelize = require("sequelize");

Pet_main.hasOne(Pet_additional, { foreignKey: 'pet_num' });
Pet_main.hasOne(Pet_catch_info, { foreignKey: 'pet_num' });
Pet_main.hasOne(Pet_health, { foreignKey: 'pet_num' });
Pet_main.hasOne(Pet_images, { foreignKey: 'pet_num' });
Pet_main.hasOne(Pet_move, { foreignKey: 'pet_num' });
Pet_main.hasOne(Pet_responsible, { foreignKey: 'pet_num' });
Pet_main.hasMany(Pet_sanitation, { foreignKey: 'pet_num' });
Pet_main.hasMany(Pet_vaccination, { foreignKey: 'pet_num' });
Pet_main.hasOne(Pet_owners, { foreignKey: 'pet_num' });
Shelter.hasMany(Pet_main, { foreignKey: 'shelter_id' });

Pet_additional.belongsTo(Pet_main, { foreignKey: 'pet_num' });
Pet_catch_info.belongsTo(Pet_main, { foreignKey: 'pet_num' });
Pet_health.belongsTo(Pet_main, { foreignKey: 'pet_num' });
Pet_images.belongsTo(Pet_main, { foreignKey: 'pet_num' });
Pet_move.belongsTo(Pet_main, { foreignKey: 'pet_num' });
Pet_responsible.belongsTo(Pet_main, { foreignKey: 'pet_num' });
Pet_sanitation.belongsTo(Pet_main, { foreignKey: 'pet_num' });
Pet_vaccination.belongsTo(Pet_main, { foreignKey: 'pet_num' });
Pet_owners.belongsTo(Pet_main, { foreignKey: 'pet_num' });
Pet_main.belongsTo(Shelter, { foreignKey: 'shelter_id' });



exports.getAllPetsPartly = (req, res) => {

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
                    model: Pet_move
                },
                {
                    model: Pet_responsible
                },
                {
                    model: Shelter
                }
            ]
        })
        .then(data => {
            res.send({
                card_num: data.card_num,
                species: data.species,
                age: data.age,
                weight: data.weight,
                name: data.name,
                gender: data.gender,
                breed: data.breed,
                hair_color: data.hair_color,
                hair_type: data.hair_type,
                size: data.size,
                id_tag: data.Pets_additional.id_tag,
                shelter_name: data.Shelter.name,
                district: data.Pets_catch_info.district,
                date_in: data.Pets_move.date_in,
                reason: data.Pets_move.reason,
                socialised: data.Pets_additional.socialised
            });
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving shelters."
            });
        });
};


exports.deletePet = (req, res) => {
    let pet_id = req.params.id
    Pet_main.destroy({
            where: { id: pet_id }
        })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "pet was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete pet with id=${id}. Maybe pet was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete pet with id=" + id
            });
        });
}

exports.createPet = (req, res) => {
    let pet_id;
    let main = {
        card_num: req.body.main.card_num,
        species: req.body.main.species,
        age: req.body.main.age,
        weight: req.body.main.weight,
        name: req.body.main.name,
        gender: req.body.main.gender,
        breed: req.body.main.breed,
        hair_color: req.body.main.hair_color,
        hair_type: req.body.main.hair_type,
        ears_type: req.body.main.ears_type,
        tail_type: req.body.main.tail_type,
        size: req.body.main.size,
        enclosure: req.body.main.enclosure,
        shelter_id: req.body.main.shelter_id
    };
    let additional = {
        id_tag: req.body.additional.id_tag,
        ster_date: req.body.additional.ster_date,
        doctor: req.body.additional.doctor,
        socialised: req.body.additional.socialised,
        pet_num: pet_id
    };
    let catch_info = {
        order_num: req.body.catch_info.order_num,
        order_data: req.body.catch_info.order_data,
        district: req.body.catch_info.district,
        catch_report: req.body.catch_info.catch_report,
        catch_address: req.body.catch_info.catch_address,
        pet_num: pet_id
    };
    let move = {
        date_in: req.body.move.date_in,
        act: req.body.move.act,
        date_out: req.body.move.date_out,
        reason: req.body.move.reason,
        order: req.body.move.order,
        pet_num: pet_id
    };
    let responsible = {
        person: req.body.responsible.person,
        pet_num: pet_id
    };

    Pet_main.create(main)
        .then(data => {
            res.send(data);
            pet_id = data.id;
            Pet_additional.create(additional).then(data => {
                res.send(data)
            }).catch(err => {
                res.status(500).send({
                    message: err.message
                });
            });
            Pet_catch_info.create(catch_info).then(data => {
                res.send(data)
            }).catch(err => {
                res.status(500).send({
                    message: err.message
                });
            });
            Pet_move.create(move).then(data => {
                res.send(data)
            }).catch(err => {
                res.status(500).send({
                    message: err.message
                });
            });
            Pet_responsible.create(responsible).then(data => {
                res.send(data)
            }).catch(err => {
                res.status(500).send({
                    message: err.message
                });
            });
        })
        .catch(err => {
            res.status(500).send({
                message: err.message
            });
        });

}


exports.makeSanitation = (req, res) => {
    const san = req.body.sanitation;
    const pet_id = req.params.id;

    Pet_sanitation.destroy({
        where: { pet_num: pet_id }
    }).then(status => {
        Contact.create(san)
            .then(body => {
                res.status(status).send(body)
            })
            .catch(err => {
                res.status(500).send({
                    message: err.message || "Some error occurred while creating the sanitation."
                });
            });
    })

};

exports.getSanitation = (res, req) => {
    let pet_id = req.params.id;
    Pet_sanitation.findAll({
            where: {
                pet_num: pet_id
            },
            order: [
                ['id', 'ASC']
            ]
        })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message
            });
        });
}

exports.makeVaccination = (req, res) => {
    const vac = req.body.vaccination;
    const pet_id = req.params.id;


    Pet_sanitation.destroy({
        where: { pet_num: pet_id }
    }).then(status => {
        Contact.create(vac)
            .then(body => {
                res.status(status).send(body)
            })
            .catch(err => {
                res.status(500).send({
                    message: err.message || "Some error occurred while creating the vaccination."
                });
            });
    })


};

exports.getVaccination = (res, req) => {
    let pet_id = req.params.id;
    Pet_vaccination.findAll({
            where: {
                pet_num: pet_id
            },
            order: [
                ['id', 'ASC']
            ]
        })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message
            });
        });
}

exports.makeHealth = (req, res) => {
    const health = req.body.health;
    const pet_id = req.params.id;

    Pet_sanitation.destroy({
        where: { pet_num: pet_id }
    }).then(status => {
        Contact.create(health)
            .then(body => {
                res.status(status).send(body)
            })
            .catch(err => {
                res.status(500).send({
                    message: err.message || "Some error occurred while creating the vaccination."
                });
            });
    })


};

exports.getHealth = (res, req) => {
    let pet_id = req.params.id;
    Pet_health.findAll({
            where: {
                pet_num: pet_id
            },
            order: [
                ['id', 'ASC']
            ]
        })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message
            });
        });
}

exports.updatePet_main = (req, res) => {
    let pet_id = req.params.id;
    Pet_main.update(req.body, {
            where: { pet_num: pet_id }
        })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Pet_main was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Pet_main with pet_id=${id}`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Pet_main with pet_id=" + id
            });
        });
}

exports.updatePet_additional = (req, res) => {
    let pet_id = req.params.id;
    Pet_additional.update(req.body, {
            where: { pet_num: pet_id }
        })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Pet_additional was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Pet_additional with pet_id=${id}`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Pet_additional with pet_id=" + id
            });
        });
}

exports.updatePet_catch_info = (req, res) => {
    let pet_id = req.params.id;
    Pet_catch_info.update(req.body, {
            where: { pet_num: pet_id }
        })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Pet_catch_info was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Pet_catch_info with pet_id=${id}`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Pet_catch_info with pet_id=" + id
            });
        });
}

exports.updatePet_move = (req, res) => {
    let pet_id = req.params.id;
    Pet_move.update(req.body, {
            where: { pet_num: pet_id }
        })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Pet_move was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Pet_move with pet_id=${id}`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Pet_move with pet_id=" + id
            });
        });
}

exports.updatePet_responsible = (req, res) => {
    let pet_id = req.params.id;
    Pet_responsible.update(req.body, {
            where: { pet_num: pet_id }
        })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Pet_responsible was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Pet_responsible with pet_id=${id}`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Pet_responsible with pet_id=" + id
            });
        });
}



exports.updatePet_owner = (req, res) => {
    let pet_id = req.params.id;
    let owner = {
        legal_entity: req.body.legal_entity,
        guardian: req.body.guardian,
        individual: req.body.individual,
        pet_num: pet_id

    }
    Pet_owners.create(owner)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Pet_owners with pet_id=" + id
            });
        });
}


exports.createPet_owner


// exports.findAllForShelter = (req, res) => {
//     const id = req.params.id;

//     Contact.findAll({
//             where: {
//                 shelter_id: id
//             },
//             order: [
//                 ['id', 'ASC']
//             ]
//         })
//         .then(data => {
//             res.send(data);
//         })
//         .catch(err => {
//             res.status(500).send({
//                 message: err.message || "Some error occurred while retrieving contacts."
//             });
//         });
// };

// if (req.body.pet_additional) {
//     Pet_additional.update(req.body, {
//             where: { pet_num: pet_id }
//         })
//         .then(num => {
//             if (num == 1) {
//                 res.send({
//                     message: "Pet_additional was updated successfully."
//                 });
//             } else {
//                 res.send({
//                     message: `Cannot update Pet_additional with id=${id}`
//                 });
//             }
//         })
//         .catch(err => {
//             res.status(500).send(err);
//         });
// }
// if (req.body.pet_catch_info) {
//     Pet_catch_info.update(req.body, {
//             where: { pet_num: pet_id }
//         })
//         .then(num => {
//             if (num == 1) {
//                 res.send({
//                     message: "Pet_catch_info was updated successfully."
//                 });
//             } else {
//                 res.send({
//                     message: `Cannot update Pet_catch_info with id=${id}`
//                 });
//             }
//         })
//         .catch(err => {
//             res.status(500).send(err);
//         });
// }
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