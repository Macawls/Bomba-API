import { Hono } from "hono";
import { check } from "./routes/check.js";
import { add } from "./routes/add.js";

import { verifyCodeFormatMiddleware } from "./middlewares/verifyCodeFormat";

const joinCodeModule = new Hono();

// Middleware
joinCodeModule.use("/:action/:code", verifyCodeFormatMiddleware);

// Endpoints
joinCodeModule.get("/check/:code", check);
joinCodeModule.post("/add/:code", add);

export default joinCodeModule;
