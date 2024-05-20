import Sequelize from "sequelize";
// import {
//   USER_POSTGRET,
//   PASSWORD_POSGRET,
//   HOST_POSTGREST,
//   NAME_DB,
// } from "./src/config/envs.js";

const sequelize = new Sequelize("eduTech", "postgres", "2001", {
  host: "localhost",
  dialect: "postgres",
});

export default sequelize;
