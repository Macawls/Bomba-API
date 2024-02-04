import { createClient } from "@supabase/supabase-js";
export const add = async (context) => {
  
  const supabaseClient = createClient(context.env.SUPABASE_URL, context.env.SUPABASE_API_KEY);

  const code = context.req.param("code").toString().toUpperCase();

  const { data, error } = await supabaseClient
    .from("join_code_deletion_queue")
    .insert({ code: code })
    .select();

  if (error) {
    context.status(500);
    return context.json({
      inDeletionQueue: false,
      error: error.message,
    });
  }

  return context.json({
    inDeletionQueue: true,
    joinCode: data[0],
    error: "none"
  });
};