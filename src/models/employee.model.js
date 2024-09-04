import { BOOLEAN, STRING } from "sequelize";
import { sequelize } from "../configs/db.config";

export const Employee = sequelize.define("Employee", {
  name: { type: STRING, allowNull: false },
  email: { type: STRING, unique: true, allowNull: false },
  phone: { type: STRING },
  status: { type: BOOLEAN, defaultValue: true },
});
