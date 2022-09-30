// See https://sequelize.org/master/manual/model-basics.html
// for more of what you can do here.
import { Sequelize, DataTypes, Model } from 'sequelize';
import { Application } from '../declarations';
import { HookReturn } from 'sequelize/types/hooks';

export default function (app: Application): typeof Model {
  const sequelizeClient: Sequelize = app.get('sequelizeClient');
  const company = sequelizeClient.define('company', {

    name: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: '公司名称'
    },
    isVue: {
      type: DataTypes.TINYINT,
      allowNull: true,
      comment: '是否要求vue',
    },
    isReact: {
      type: DataTypes.TINYINT,
      allowNull: true,
      comment: '是否要求React\n'
    },
    skill: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: '其他技术要求\n'
    },
    areaid: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: '地域id'
    },
    desc: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: '公司描述\n'
    }
  }, {
    hooks: {
      beforeCount(options: any): HookReturn {
        options.raw = true;
      }
    }
  });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  (company as any).associate = function (models: any): void {
    // Define associations here
    // See https://sequelize.org/master/manual/assocs.html
  };

  return company;
}
