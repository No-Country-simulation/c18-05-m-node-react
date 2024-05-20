import express from "express";
// import cors from "cors";
import sequelize from "./db.js";
// import morgan from "morgan";
// import { PORT } from "./src/config/envs.js";

const server = express();
// server.use(express.json());
// server.use(cors());
// server.use(morgan(`dev`));
// server.use("/");

async function main() {
  await sequelize.sync({ alert: true });
  console.log(`sigo`);
  server.listen(3001, () => {
    //   console.log(`Server is running on ${PORT}`);
    console.log(`Server is running on 3001`);
  });
}

main();
