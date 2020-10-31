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
            let arr = [];
            data.forEach(e => {
                arr.push({
                    id: e.id,
                    card_num: e.card_num,
                    species: e.species,
                    age: e.age,
                    weight: e.weight,
                    name: e.name,
                    gender: e.gender,
                    breed: e.breed,
                    hair_color: e.hair_color,
                    hair_type: e.hair_type,
                    size: e.size,
                    id_tag: e.Pets_additional.id_tag,
                    shelter_name: e.Shelter.name,
                    district: e.Pets_catch_info.district,
                    date_in: e.Pets_move.date_in,
                    reason: e.Pets_move.reason,
                    socialised: e.Pets_additional.socialised
                })
            })
            res.send(arr);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving shelters."
            });
        });
};

exports.getOnePet = (req, res) => {
    Pet_main.findAll({
            where: {
                id: req.params.id
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
                },
            ]
        })
        .then(data => {
            res.send(data[0]);
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

exports.createPet_main = (req, res) => {
    let main = {
        card_num: req.body.card_num,
        species: req.body.species,
        age: req.body.age,
        weight: req.body.weight,
        name: req.body.name,
        gender: req.body.gender,
        breed: req.body.breed,
        hair_color: req.body.hair_color,
        hair_type: req.body.hair_type,
        ears_type: req.body.ears_type,
        tail_type: req.body.tail_type,
        size: req.body.size,
        enclosure: req.body.enclosure,
        shelter_id: req.body.shelter_id
    };
    Pet_main.create(main)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(err);
        });
}

exports.createPet_additional = (req, res) => {
    let pet_id = req.params.id
    let additional = {
        id_tag: req.body.id_tag,
        ster_date: req.body.ster_date,
        doctor: req.body.doctor,
        socialised: req.body.socialised,
        pet_num: pet_id
    };
    Pet_additional.create(additional)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(err);
        });
}

exports.createPet_catch_info = (req, res) => {
    let pet_id = req.params.id
    let catch_info = {
        order_num: req.body.order_num,
        order_data: req.body.order_data,
        district: req.body.district,
        catch_report: req.body.catch_report,
        catch_address: req.body.catch_address,
        pet_num: pet_id
    };
    Pet_catch_info.create(catch_info)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(err);
        });
}

exports.createPet_responsible = (req, res) => {
    let pet_id = req.params.id
    let responsible = {
        person: req.body.person,
        pet_num: pet_id
    };
    Pet_responsible.create(responsible)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(err);
        });
}

exports.createPet_move = (req, res) => {
    let pet_id = req.params.id
    let move = {
        date_in: req.body.move.date_in,
        act: req.body.move.act,
        date_out: req.body.move.date_out,
        reason: req.body.move.reason,
        order: req.body.move.order,
        pet_num: pet_id
    };
    Pet_move.create(move)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(err);
        });
}

exports.makeSanitation = (req, res) => {
    let san = req.body;
    let pet_id = req.params.id;

    Pet_sanitation.destroy({
        where: { pet_num: pet_id }
    }).then(status => {
        Contact.bulkCreate(san)
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

exports.getSanitation = (req, res) => {
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
    let vac = req.body;
    let pet_id = req.params.id;

    Pet_sanitation.destroy({
        where: { pet_num: pet_id }
    }).then(status => {
        Contact.bulkCreate(vac)
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

exports.getVaccination = (req, res) => {
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
    let health = req.body;
    let pet_id = req.params.id;

    Pet_sanitation.destroy({
        where: { pet_num: pet_id }
    }).then(status => {
        Contact.bulkCreate(health)
            .then(body => {
                res.status(status).send(body)
            })
            .catch(err => {
                res.status(500).send({
                    message: err.message
                });
            });
    })


};

exports.getHealth = (req, res) => {
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
            where: { id: pet_id }
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



exports.createPet_owner = (req, res) => {
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

exports.updatePet_owner = (req, res) => {
    let pet_id = req.params.id;
    Pet_owners.update(req.body, {
            where: { pet_num: pet_id }
        })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Pet_owner was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Pet_owner with pet_id=${id}`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Pet_owner with pet_id=" + id
            });
        });
}

exports.getPet_owner = (req, res) => {
    let pet_id = req.params.id;
    Pet_owners.findAll({
            where: {
                pet_num: pet_id
            }
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