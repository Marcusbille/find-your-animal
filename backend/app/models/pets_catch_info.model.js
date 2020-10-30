module.exports = (sequelize, Sequelize) => {
    const Pet_catch_info = sequelize.define("Pets_catch_info", {
        card_num: {
            type: Sequelize.STRING
        },
        order_num: {
            type: Sequelize.STRING
        },
        order_date: {
            type: Sequelize.STRING
        },
        district: {
            type: Sequelize.STRING
        },
        catch_report: {
            type: Sequelize.STRING
        },
        catch_address: {
            type: Sequelize.STRING
        }
    });

    return Pet_catch_info;
};