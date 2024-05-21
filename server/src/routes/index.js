import { Router } from "express";
import studentsRouter from "./studentRouter.js";
const router = Router();

router.use("/students", studentsRouter);

export default router;
