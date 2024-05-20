import {Router } from 'express'
import routerStudent from './studentRoutes.js'

const router = Router()

router.use("/student", routerStudent)


export default router