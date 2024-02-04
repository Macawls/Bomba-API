import { Hono } from "hono";
import { GreetingPage } from "./greeting";

const router = new Hono();

router.get("/", GreetingPage);

export default router;