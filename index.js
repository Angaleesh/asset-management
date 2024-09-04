import express from "express";
import dotenv from "dotenv";
import routes from "./src/routes.js";
import "./src/configs/db.config.js";
const app = express();
dotenv.config();

app.listen(process.env.PORT, () => {
  console.log(`Server Running at Port ${process.env.PORT}`);
});

routes.forEach((router) => {
  app.use(router.url, router.route);
});
