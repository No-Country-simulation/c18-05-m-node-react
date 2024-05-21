import  {Router } from 'express'
import {studentHandle} from '../handlers/StudentHandler.js'

const routerStudent = Router()

routerStudent.get("/", studentHandle)




export default routerStudent