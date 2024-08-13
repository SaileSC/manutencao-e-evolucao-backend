import { Router } from "express";
import requestController from "./request.controller";

const router = Router();

router.get("/", requestController.index);
router.post("/", requestController.create);

export default router;
