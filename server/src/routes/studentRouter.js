import { Router } from "express";
import {
  newStudentHandler,
  deleteStudentHandler,
  getStudentHandler,
  changeStudentHandler,
} from "../handlers/studentHandlers.js";
const studentsRouter = Router();

studentsRouter.post("/", newStudentHandler);
studentsRouter.get("/searchUser/", getStudentHandler);
studentsRouter.put("/changeUser/:id", changeStudentHandler);
studentsRouter.delete("/delete/:id", deleteStudentHandler);

export default studentsRouter;
