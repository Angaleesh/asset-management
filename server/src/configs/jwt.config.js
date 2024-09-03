import jsonwebtoken from "jsonwebtoken";

export const generateToken = async (data) => {
  return jsonwebtoken.sign(data, process.env.JWT_SECRET, { expiresIn: "3d" });
};
