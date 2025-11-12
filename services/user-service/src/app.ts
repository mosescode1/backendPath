import { logger } from "hono/logger";
import { compress } from "hono/compress";
import { cors } from "hono/cors";
import { Hono } from "hono";
import { prettyJSON } from "hono/pretty-json";
import { setUpAuthController } from "./interfaces/http/routes/auth";
import { PrismaUserRepository } from "./infastructure/prisma/prisma.user.repository";
import PrismaClient from "./infastructure/prisma/client";
import { UserUseCase } from "./applications/use-cases/user-usecase";
import { AuthController } from "./interfaces/http/controllers/auth.controller";
import { rateLimiter } from "hono-rate-limiter";

const app = new Hono();
app.use(logger());
app.use(prettyJSON());
app.use(
  cors({
    origin: "http://example.com",
    credentials: true,
  }),
);
app.use(
  rateLimiter({
    windowMs: 15 * 60 * 1000,
    limit: 100,
    standardHeaders: "draft-6",
    keyGenerator: (c) => "unizqu",
  }),
);

//NOTE Root health/info endpoint

// NOTE set up dependencies
const userRepo = new PrismaUserRepository(PrismaClient);
const userUseCase = new UserUseCase(userRepo);
const userController = new AuthController(userUseCase);

// NOTE setting up userROutes
const userRoutes = setUpAuthController(userController);
app.route("/auth", userRoutes);
export default app;
