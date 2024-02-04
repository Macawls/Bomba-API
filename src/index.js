import app from "./app";

export default {
  async fetch(request, env, ctx) {
    return app.fetch(request, env, ctx);
  }
};
