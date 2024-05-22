import { Router } from "express";
import { verifyToken } from "../auth/JWTPassport.js"; //import { verifyToken } from "../auth/JWTPassport.js";

import {
  newStudentHandler,
  deleteStudentHandler,
  getStudentHandler,
  getAllStudentsHandler,
  ChangePasswordHandler,
} from "../handlers/studentHandlers.js";
const studentsRouter = Router();

studentsRouter.post("/", newStudentHandler);
studentsRouter.get("/search/:id", verifyToken, getStudentHandler);
studentsRouter.get("/searchAll/", getAllStudentsHandler);
studentsRouter.put("/change/", ChangePasswordHandler);
studentsRouter.delete("/delete/:id", verifyToken, deleteStudentHandler);

export default studentsRouter;
