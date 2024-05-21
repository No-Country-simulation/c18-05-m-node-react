import bcrypt from "bcrypt";

export async function hahedPassword(password) {
  const saltRounds = 10;
  const passwordHash = await bcrypt.hash(password, saltRounds);
  return passwordHash;
}

export const checkPassword = async(password, hashedPassword) => {
  return await bcrypt.compare(password, hashedPassword)//esto devuelve true o false
}