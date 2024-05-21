// models/index.js
import StudentsModel from "./Students.js";
import HistorialsModel from "./Historials.js";
import { sequelize } from "../../db.js";
import AdminModel from './Admin.js'

const Admin = AdminModel(sequelize);
const Students = StudentsModel(sequelize);
const Historials = HistorialsModel(sequelize);

// Definir relaciones aquí
Students.hasOne(Historials, { foreignKey: "studentId", as: "historial" });
Historials.belongsTo(Students, { foreignKey: "studentId", as: "student" });

export { Students, Historials, Admin };