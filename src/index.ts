import express, { Request, Response } from "express";
import dotenv from "dotenv";
import validateEnv from "./utils/validateEnv";
import router from "./router";
import cookieParser from "cookie-parser";
import { v4 as uuidv4 } from "uuid";
import session from "express-session";

import swaggerUi from "swagger-ui-express";
import swaggerFile from "./swagger-output.json";

dotenv.config();
validateEnv();

const app = express();
const PORT = process.env.BACKEND_PORT ?? 3333;

app.use(cookieParser());

app.use(
  session({
    genid: () => uuidv4(),
    secret: "Hi9Cf#mK98",
    resave: true,
    saveUninitialized: true,
  })
);

declare module "express-session" {
  interface SessionData {
    uid: string;
    tipoUsuarioid: string;
  }
}

app.use(express.json());

app.use("/api", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(router);
app.listen(PORT, () => {
  console.log(`Express app iniciado na porta ${PORT}.`);
});
