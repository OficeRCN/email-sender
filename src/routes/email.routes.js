import { Router } from "express";
import EnviarCorreo from "../controller/EmailController.js";

const emailRouter = Router();

emailRouter.post("/email", EnviarCorreo);

export default emailRouter;
