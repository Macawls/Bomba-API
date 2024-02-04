import { Hono } from "hono";
import { authentication } from "./middlewares/authentication";
import joinCodeModule from "./modules/joincode";

const router = new Hono();

router.get("/", (context) => {
    return context.json({
      message: "Welcome to the Bomba API! 👋"
    })
})

// middleware for all routes
router.use("/*/:action/*", authentication);

// register modules
router.route("/joincode", joinCodeModule);

export default router;
