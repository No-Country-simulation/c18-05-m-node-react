import { Router } from "express";
import studentsRouter from "./studentRouter.js";
import adminRouter from './adminRoutes.js'
import {debajaOdealta} from '../controllers/deleteController.js'

import historyRouter from './HistoriaRoutes.js'
const router = Router();

router.put("/delete/:email", debajaOdealta);


router.use("/students", studentsRouter);
router.use("/admin", adminRouter);
router.use("/historia", historyRouter );
export default router;
