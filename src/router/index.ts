import { Router } from "express";

import usuarioRuter from "../resources/user/user.router";
import authRouter from "../resources/auth/auth.routers";

const router = Router();

router.use(
  "/usuario",
  //#swagger.tags = ["Usuario"]
  usuarioRuter
);

router.use(
  "/auth",
  //#swagger.tags = ["Auth"]
  authRouter
);

export default router;
