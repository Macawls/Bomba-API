import { Hono } from "hono";
import apiRouter from "./api/router.js";
import pageRouter from "./pages/router";
import { serveStatic } from 'hono/cloudflare-workers'
import { addTriggerClientMiddleware } from "./api/middlewares/trigger-client";

const app = new Hono();


// https://hono.dev/getting-started/cloudflare-workers#serve-static-files
app.get('/*', serveStatic({ root: './' }))
app.get('/favicon.ico', serveStatic({ path: './favicon.ico' }))

// Trigger.Dev Client, route is /api/Trigger
addTriggerClientMiddleware(app);

// Routes
app.route("/", pageRouter)
app.route("/api", apiRouter);

export default app;