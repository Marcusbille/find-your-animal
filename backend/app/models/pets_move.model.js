module.exports = (sequelize, Sequelize) => {
    const Pet_move = sequelize.define("Pets_move", {
        card_num: {
            type: Sequelize.STRING
        },
        date_in: {
            type: Sequelize.STRING
        },
        act: {
            type: Sequelize.STRING
        },
        date_out: {
            type: Sequelize.STRING,
            allowNull: true
        },
        reason: {
            type: Sequelize.STRING,
            allowNull: true
        },
        order: {
            type: Sequelize.STRING,
            allowNull: true
        }
    });

    return Pet_move;
};