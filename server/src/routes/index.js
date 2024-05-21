import { Router } from "express";
import studentsRouter from "./studentRouter.js";
import adminRouter from './adminRoutes.js'
import {debajaOdealta} from '../controllers/deleteController.js'
import {login} from '../controllers/LoginController.js'
const router = Router();

router.put("/delete/:email", debajaOdealta);
router.post("/login", login);

router.use("/students", studentsRouter);
router.use("/admin", adminRouter);

export default router;
