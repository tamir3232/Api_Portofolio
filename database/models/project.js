const {Sequelize, Model, DataTypes} = require('sequelize');
const {sequelize} = require('./sequelize.js');
class Project extends Model {}
Project.init({
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4
    },
    title: {
        type: DataTypes.STRING
    },
    description: {
        type: DataTypes.STRING
    },
    photo1_project_name:{
        type :DataTypes.STRING
    },
    photo2_project_name:{
        type :DataTypes.STRING
    },
    photo3_project_name:{
        type :DataTypes.STRING
    },
    tools: {
        type: DataTypes.JSON
    },
    portofolio_link1:{
        type :DataTypes.STRING
    },
    portofolio_link2:{
        type :DataTypes.STRING
    },
    profile_id:{
        type :DataTypes.UUID,
        allowNull: false,
        references: {
            model: 'profiles',
            key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    }
    }, {
        timestamps: true,
        sequelize: sequelize,
        tableName: 'projects',
    }
);
    
module.exports = Project