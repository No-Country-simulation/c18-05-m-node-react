import {DataTypes } from "sequelize";
import { sequelize } from "../../db.js";

export const Historial = sequelize.define("historial", {
  idHistorial: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  message: {
    type: DataTypes.TEXT,
  },
  date: {
    type: DataTypes.STRING,
  },
  teacherName: {
    type: DataTypes.STRING,
  },
  course: {
    type: DataTypes.STRING,
  },
});
