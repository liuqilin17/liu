// See https://sequelize.org/master/manual/model-basics.html
// for more of what you can do here.
import { Sequelize, DataTypes, Model } from 'sequelize';
import { Application } from '../declarations';
import { HookReturn } from 'sequelize/types/hooks';

export default function (app: Application): typeof Model {
  const sequelizeClient: Sequelize = app.get('sequelizeClient');
  const users = sequelizeClient.define('users', {
  
    uname: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    openid:{
      type: DataTypes.STRING,
      allowNull: false
    },
    number:{
      type: DataTypes.STRING,
      allowNull: false
    },
    phone:{
      type: DataTypes.STRING,
      allowNull: false
    },
    wxNickName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    wxAvatar: {
      type: DataTypes.STRING,
      allowNull: true
    },
  }, {
    hooks: {
      beforeCount(options: any): HookReturn {
        options.raw = true;
      }
    }
  });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  (users as any).associate = function (models: any): void {
    // Define associations here
    // See https://sequelize.org/master/manual/assocs.html
  };

  return users;
}
