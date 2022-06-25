import sequelize from "sequelize";
import db from "../config/db.js";

export const Testimoniales = db.define('testimoniales', {
  nombre: {
    type: sequelize.STRING
  },
  correo: {
    type: sequelize.STRING
  },
  mensaje: {
    type: sequelize.STRING
  },
  createdAt: {
    type: sequelize.DATE,
    defaultValue: sequelize.NOW
  },
  updatedAt: {
    type: sequelize.DATE,
    defaultValue: sequelize.NOW
  }
})