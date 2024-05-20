import {Student} from '../models/Student.js'


export async function  newStudent (id, name, lastName, email, password, phone, birthd, registration, grade) {
const user = await Student.findOne({
    where:{
        [Op.or]:[
            [{email: email},{id:id}]
        ]
    }
})
}