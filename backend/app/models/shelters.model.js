module.exports = (sequelize, Sequelize) => {
    const Shelter = sequelize.define("Shelters", {
        name: {
            type: Sequelize.STRING
        },
        dependence: {
            type: Sequelize.STRING,
        },
        responsible: {
            type: Sequelize.STRING
        },
        address: {
            type: Sequelize.STRING
        },
        phone: {
            type: Sequelize.STRING,
            allowNull = true
        },
        chief: {
            type: Sequelize.STRING
        }
    });

    return Shelter;
};