const {Sequelize, Model, DataTypes} = require('sequelize');
const connection = require('./index.js');

class Profile extends Model {}

Profile.init({
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4
  },
  name: {
    type: DataTypes.STRING
  },
  greeting: {
    type: DataTypes.INTEGER
  },
  job_desk:{
    type :DataTypes.STRING
  },
  name_file:{
    type :DataTypes.STRING
  },
  portofolio1_icon:{
    type :DataTypes.ENUM('github','linkedin','instagram','facebook','twitter')
  },
  portofolio1_link:{
    type :DataTypes.STRING
  },
  portofolio2_icon:{
    type :DataTypes.ENUM('github','linkedin','instagram','facebook','twitter')
  },
  portofolio2_link:{
    type :DataTypes.STRING
  },
  deskripsi:{
    type :DataTypes.STRING
  },
  deskripsi_aboutme:{
    type :DataTypes.STRING
  },
  experience:{
    type :DataTypes.STRING
  },
  education:{
    type :DataTypes.STRING
  },
  profile1_name_file:{
    type :DataTypes.STRING
  },
  profile2_name_file:{
    type :DataTypes.STRING
  },
  emai:{
    type :DataTypes.STRING
  },
  phone:{
    type :DataTypes.STRING
  }
},{
  timestamps: true,
  sequelize: connection,
  tableName: 'profile'
});

module.exports = Profile;