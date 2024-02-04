import { addMiddleware } from "@trigger.dev/hono";
import { TriggerClient } from "@trigger.dev/sdk";
import { Supabase, SupabaseManagement } from "@trigger.dev/supabase";
import { createDeleteCodeJob } from "../jobs/delete-code";


export const addTriggerClientMiddleware = (app, env) => {
  addMiddleware(app, (env) => {
    const client = new TriggerClient({
      id: "hono-client",
      apiKey: env.TRIGGER_API_KEY,
      apiUrl: env.TRIGGER_API_URL,
    });

    const supabaseManagement = new SupabaseManagement({
      id: "bomba-supabase-management",
      apiKey: env.SUPABASE_MANAGEMENT_TOKEN,
    });

    const supabaseDatabase = supabaseManagement.db(env.SUPABASE_URL);

    const supabaseClient = new Supabase({
      id: "bomba-supabase-client",
      projectId: env.SUPABASE_PROJECT_ID,
      supabaseKey: env.SUPABASE_API_KEY,
    });

    createDeleteCodeJob(
      env.JOIN_CODE_TTL,
      supabaseClient,
      supabaseDatabase
    ).attachToClient(client);

    return client;
  });
};