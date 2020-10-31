module.exports = (sequelize, Sequelize) => {
    const Pet_owners = sequelize.define("Pets_owners", {
        card_num: {
            type: Sequelize.STRING
        },
        legal_entity: {
            type: Sequelize.STRING,
            allowNull: true
        },
        guardian: {
            type: Sequelize.STRING,
            allowNull: true
        },
        individual: {
            type: Sequelize.STRING,
            allowNull: true
        }
    });

    return Pet_owners;
};