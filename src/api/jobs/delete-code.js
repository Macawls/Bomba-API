import { Job } from "@trigger.dev/sdk";

export const createDeleteCodeJob = (
  joinCodeTtl,
  supabaseClient,
  supabaseDb,
) => {
  return new Job({
    id: "delete-join-code-from-queue",
    name: "Delete Added Join Code After Duration",
    version: "1.0.0",
    trigger: supabaseDb.onInserted({
      table: "join_code_deletion_queue",
    }),
    integrations: {
      supabaseClient
    },
    run: async (payload, io, ctx) => {
      const code = payload.record.code;

      await io.wait("Minimum time for host player to disconnect from relay instance", joinCodeTtl);

      await io.supabaseClient.runTask("delete-added-code", async (db) => {
        const { data, error } = await db
          .from("join_code_deletion_queue")
          .delete()
          .eq("code", code);

        return {
          data: data,
          error: error,
        };
      });
    },
  });
};
