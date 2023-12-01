const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(process.env.DATA_BASE_NAME,process.env.DATA_BASE_USER,process.env.DATA_BASE_PASSWORD,  {
  host: process.env.DATA_BASE_HOST,
  // host: 'postgres', //utilizar cuando se compila el codigo nodejs como container y se utiliza de manera colectiva en docker-compose
  dialect: 'postgres',
  port: 5432,
  define: {
    // timestamps: true,
    // freezeTableName: true,
    paranoid: true
  }
});

module.exports = sequelize;
