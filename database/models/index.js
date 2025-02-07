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
const sequelize = require('./sequelize.js');


Profile.hasMany(Project,{
  as: 'projects',
  foreignKey: 'profile_id'

});

Project.belongsTo(Project,{
  as:'profile',
  foreignKey:'profile_id'
})



module.exports = {Profile, Project, sequelize};
