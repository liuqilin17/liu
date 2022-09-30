"use strict";
exports.__esModule = true;
// See https://sequelize.org/master/manual/model-basics.html
// for more of what you can do here.
var sequelize_1 = require("sequelize");
function default_1(app) {
    var sequelizeClient = app.get('sequelizeClient');
    var company = sequelizeClient.define('company', {
        name: {
            type: sequelize_1.DataTypes.STRING(100),
            allowNull: true,
            comment: '公司名称'
        },
        isVue: {
            type: sequelize_1.DataTypes.TINYINT,
            allowNull: true,
            comment: '是否要求vue'
        },
        isReact: {
            type: sequelize_1.DataTypes.TINYINT,
            allowNull: true,
            comment: '是否要求React\n'
        },
        skill: {
            type: sequelize_1.DataTypes.STRING(255),
            allowNull: true,
            comment: '其他技术要求\n'
        },
        areaid: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: true,
            comment: '地域id'
        },
        desc: {
            type: sequelize_1.DataTypes.TEXT,
            allowNull: true,
            comment: '公司描述\n'
        }
    }, {
        hooks: {
            beforeCount: function (options) {
                options.raw = true;
            }
        }
    });
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    company.associate = function (models) {
        // Define associations here
        // See https://sequelize.org/master/manual/assocs.html
    };
    return company;
}
exports["default"] = default_1;
