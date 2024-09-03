import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import helmet from "helmet";
import routes from "./src/routes.js";
import notFound from "./src/middlewares/not-found.middleware.js";
import errorHandlerMiddleware from "./src/middlewares/error-handler.middleware.js";

const app = express();
dotenv.config();

app.use(bodyParser.json());
app.use(cors());
app.use(helmet());

app.listen(process.env.PORT, () => {
  console.log(`Server Running at Port ${process.env.PORT}`);
});

routes.forEach((router) => {
  app.use(router.url, router.route);
});

app.use(notFound);
app.use(errorHandlerMiddleware);
