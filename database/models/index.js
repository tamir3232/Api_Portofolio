'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const process = require('process');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const configs = require('../config/config.js');
const Profile = require('./profile.js');
const Project = require('./project.js');
const db = {};


const sequelize = new Sequelize(configs.database, configs.username, configs.password, { // database , username , password
  dialect: configs.dialect,
  host: configs.host,
  port: parseInt(configs.port)
})

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf('.') !== 0 &&
      file !== basename &&
      file.slice(-3) === '.js' &&
      file.indexOf('.test.js') === -1
    );
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});



Profile.hasMany('project',{
  as: 'project',
  foreignKey: 'profile_id'

});

Project.belongsTo('profile',{
  as:'profile',
  foreignKey:'profile_id'
})


db.Sequelize = Sequelize;

module.exports = db;
