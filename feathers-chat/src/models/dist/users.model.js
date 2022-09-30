"use strict";
exports.__esModule = true;
// See https://sequelize.org/master/manual/model-basics.html
// for more of what you can do here.
var sequelize_1 = require("sequelize");
function default_1(app) {
    var sequelizeClient = app.get('sequelizeClient');
    var users = sequelizeClient.define('users', {
        uname: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false
        },
        openid: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false
        },
        number: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false
        },
        phone: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false
        },
        wxNickName: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false
        },
        wxAvatar: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: true
        }
    }, {
        hooks: {
            beforeCount: function (options) {
                options.raw = true;
            }
        }
    });
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    users.associate = function (models) {
        // Define associations here
        // See https://sequelize.org/master/manual/assocs.html
    };
    return users;
}
exports["default"] = default_1;
