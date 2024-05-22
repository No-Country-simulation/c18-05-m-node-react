import { hahedPassword } from "../utils/hasPassword.js";

import { Students } from "../models/index.js";
export async function newStudents(
  name,
  lastName,
  email,
  password,
  phone,
  birthd,
  registration,
  grade
) {
  const user = await Students.findOne({ where: { email } });
  if (user) {
    throw new Error("El usuario ya existe");
  }

  const userHashedPassword = await hahedPassword(password);
  const student = await Students.create({
    name,
    lastName,
    email,
    password: userHashedPassword,
    phone,
    birthd,
    registration,
    grade,
  });
  return student;
}

export async function deleteStudent(id) {
  const student = await Students.findOne({ where: { id } });
  if (!student) {
    throw new Error("El usuario no existe");
  }
  await student.destroy();
  return student;
}

export async function getStudent(id) {
  const user = await Students.findOne({ where: { id: id } });
  if (!user) {
    throw new Error("El usuario no existe");
  }

  return user;
}

export async function getAllStudents() {
  const students = await Students.findAll();
  if (!students) {
    throw new Error("No se encontraron usuarios");
  }
  return students;
}
