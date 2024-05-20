import Sequelize from "sequelize";

import * as dotenv from "dotenv";
dotenv.config();

const {
  USER_POSTGRET,
  PASSWORD_POSGRET,
  HOST,
} = process.env



const sequelize = new Sequelize(
  `postgres:${USER_POSTGRET}:${PASSWORD_POSGRET}@${HOST}/eduTech`,
 {
  host: "localhost",
  dialect: "postgres",
});

export default sequelize;
