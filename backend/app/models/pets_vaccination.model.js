module.exports = (sequelize, Sequelize) => {
    const Pet_vaccination = sequelize.define("Pets_vaccination", {
        card_num: {
            type: Sequelize.STRING
        },
        order: {
            type: Sequelize.INTEGER
        },
        date: {
            type: Sequelize.STRING
        },
        vaccine: {
            type: Sequelize.STRING
        },
        series: {
            type: Sequelize.STRING,
            allowNull = true
        },
    });

    return Pet_vaccination;
};