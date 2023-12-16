import { Router } from "express";
import { usuariosDelete, usuariosGet,
usuariosPatch, usuariosPost, usuariosPut } from "../controllers/user.js";

const router= Router()

router.get("/", usuariosGet);
router.post("/", usuariosPost);
router.put("/:id", usuariosPut);
router.patch("/", usuariosPatch);
router.delete("/", usuariosDelete);

export {router}