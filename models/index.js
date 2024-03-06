const { Sequelize,DataTypes} = require('sequelize');

const sequelize = new Sequelize('employeedb', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql'/* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
});

try {
    sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

  const db ={};
  db.Sequelize=Sequelize;
  db.Sequelize=sequelize;

  db.contact = require('./contact')(sequelize,DataTypes)
  db.user = require('./user')(sequelize,DataTypes)
  db.Sequelize.sync({ force: true });
  console.log("All models were synchronized successfully.");
  
  module.exports=db