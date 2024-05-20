import { DataTypes } from "sequelize";
import { sequelize } from "../../db.js";
import { Historial } from "./Historial.js";
import { Parents } from "./Parents.js";
import { Student } from "./Student.js";
import { Teacher } from "./Teacher.js";

export const Amind = sequelize.define(
  "admin",
  {
    email: {
      primaryKey: true,
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    active: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

Student.hasOne(Historial)
Historial.belongsTo(Student)

Parents.belongsTo(Historial)
Historial.belongsTo(Parents)