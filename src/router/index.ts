import { Router } from "express";

import usuarioRuter from "../resources/user/user.router";
import authRouter from "../resources/auth/auth.routers";
import requestRouter from "../resources/request/request.router";

const router = Router();

router.use("/user", usuarioRuter);

router.use("/auth", authRouter);

router.use("/request", requestRouter);

export default router;
