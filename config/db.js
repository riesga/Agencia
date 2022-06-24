import sequelize from "sequelize";

const db = new sequelize('agenciaviajes', 'root', '12345678', {
  hosts: '127.0.0.1',
  port: '3306',
  dialect: 'mysql',
  define: {
    timestamps: false
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  operatorAliases: false
});

export default db;