import express from "express";
import cors from "cors";
import sequelize from "./db.js";
import * as dotenv from "dotenv";
dotenv.config();
import router from './src/routes/index.js'
import morgan from 'morgan'

const {
  PORT
} = process.env


const server = express();
server.use(express.json({limit:"50mb"}));
server.use(cors());
server.use(morgan(`dev`));
server.use("/", router);

async function main() {

try {
  await sequelize.sync({ force: true });
  server.listen(PORT, () => {
    //   console.log(`Server is running on ${PORT}`);
    console.log(`Server is running on 3001`);
  });
} catch (error) {
  console.log('Server is not Working');
}



 
}

main();
