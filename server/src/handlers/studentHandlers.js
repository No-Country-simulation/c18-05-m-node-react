import {
  newStudents,
  deleteStudent,
  getStudent,
} from "../controllers/newStudentControllers.js";
export async function newStudentHandler(req, res) {
  try {
    const {
      name,
      lastName,
      email,
      password,
      phone,
      birthd,
      registration,
      grade,
    } = req.body;
    const resultStudent = await newStudents(
      name,
      lastName,
      email,
      password,
      phone,
      birthd,
      registration,
      grade
    );
    res.status(200).json({ message: "New Student", resultStudent });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

export async function deleteStudentHandler(req, res) {
  try {
    const { id } = req.params;
    const resultStudent = await deleteStudent(id);
    res.status(200).json({ message: "Delete Student", resultStudent });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

export async function getStudentHandler(req, res) {
  try {
    const { email } = req.body;
    const resultStudent = await getStudent(email);
    res.status(200).json({ message: "Get Student", resultStudent });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

export async function changeStudentHandler(req, res) {
  try {
    res.status(200).json({ message: "Change Student" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}
