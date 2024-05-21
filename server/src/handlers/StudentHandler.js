export async function studentHandle(req, res) {
  try {
    const{name, lastName, email, password, phone, birthd, registration, grade, id} = req.body
    const resutl = await newStudent (name, lastName, email, password, phone, birthd, registration, grade, id)
    res(200).json({message: "studentHandler is working"});
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
}
