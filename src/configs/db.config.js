import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();

export const sequelize = new Sequelize(
  process.env.DB_BASE,
  "postgres",
  process.env.DB_PASS,
  {
    host: "localhost",
    dialect: "postgres",
  }
);

if (sequelize) {
  console.log("Database Connected Successfully");
}
sequelize.sync({ force: true }).then(() => {
  console.log("Database & tables created!");
});
