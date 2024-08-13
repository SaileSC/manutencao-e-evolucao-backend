import { Router } from "express";
import UserController from "./user.controller";
import validadeBody from "../../middlewares/validadeBody";
import { createUsuarioScreema } from "./user.schemas";

const router = Router();

router.get("/", UserController.index);
router.post("/", validadeBody(createUsuarioScreema), UserController.create);
router.get("/:id", UserController.read);
router.put("/:id", validadeBody(createUsuarioScreema), UserController.update);
router.delete("/:id", UserController.remove);

export default router;
