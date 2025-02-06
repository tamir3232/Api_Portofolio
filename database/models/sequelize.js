const Sequelize = require('sequelize');
const configs = require('../config/config.js');



const sequelize = new Sequelize(configs.database, configs.username, configs.password, { // database , username , password
    dialect: configs.dialect,
    host: configs.host,
    port: parseInt(configs.port)
  })
  

const check = async function checkDatabaseConnection() {
    try {
      await sequelize.authenticate(); // Mencoba koneksi ke database
      console.log("Koneksi ke database berhasil!");
    } catch (err) {
      console.error("Koneksi ke database gagal:", err);
    }
}


module.exports = {
    sequelize}
  