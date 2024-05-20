import dotenv from "dotenv";
dotenv.config();

const { USER_POSTGRET, USER_PASSWORD, HOST_POSTGREST, PORT, NAME_DB } =
  process.env;

export default {
  USER_POSTGRET,
  USER_PASSWORD,
  HOST_POSTGREST,
  PORT,
  NAME_DB,
};
