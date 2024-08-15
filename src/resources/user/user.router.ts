import { Router } from "express";
import UserController from "./user.controller";
import validadeBody from "../../middlewares/validadeBody";
import { createUsuarioScreema } from "./user.schemas";

const router = Router();

router.get("/", UserController.index);
router.get("/login/:login", UserController.searchLogin);
router.get("/name/:name", UserController.searchName);
router.get("/:id", UserController.read);
router.post("/", validadeBody(createUsuarioScreema), UserController.create);
router.put("/", UserController.update);
router.delete("/:id", UserController.remove);

export default router;
