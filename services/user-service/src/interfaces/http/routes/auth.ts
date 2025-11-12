import { Hono } from "hono";
import { AuthController } from "../controllers/auth.controller";
import { Router } from "hono/router";

export const setUpAuthController = (controller: AuthController) => {
  const router = new Hono();

  router.get("/register", controller.registerUser);

  return router;
};
