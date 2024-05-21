import {  DataTypes } from "sequelize";
import { sequelize } from "../../db.js";

export const Parents = sequelize.define(
  "parents",
  {
    idParents: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    childrenName: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
    },

    fullName: {
      type: DataTypes.VIRTUAL,
      get() {
        return `${this.name} ${this.lastName}`;
      },
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
