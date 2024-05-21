import dotenv from "dotenv";
dotenv.config();

const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME, PORT } = process.env;

export { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME, PORT };
