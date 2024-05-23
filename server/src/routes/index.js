import { Router } from "express";
import studentsRouter from "./studentRouter.js";
import teachersRouter from "./teacherRouter.js";
import adminRouter from "./adminRoutes.js";
import { debajaOdealta } from "../controllers/deleteController.js";

import historyRouter from "./HistoriaRoutes.js";
import loginRouter from "./loginRouter.js";
const router = Router();

router.put("/delete/:email", debajaOdealta);

router.use("/students", studentsRouter);
router.use("/admin", adminRouter);
router.use("/historia", historyRouter);
router.use("/teachers", teachersRouter);
router.use("/login", loginRouter);
export default router;
//Julio@Cesar2001
//appwebnotificationes@gmail.com
