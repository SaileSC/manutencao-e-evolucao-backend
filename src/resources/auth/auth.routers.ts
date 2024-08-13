import { Router } from "express";
import authController from "./auth.controller";

const router = Router();

router.post("/login", authController.login);
router.post("/logout", authController.logout);
router.post("/signup", authController.singup);

export default router;
