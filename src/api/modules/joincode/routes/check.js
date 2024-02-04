import { createClient } from "@supabase/supabase-js";
export const check = async (context) => {
  
  const supabase = createClient(context.env.SUPABASE_URL, context.env.SUPABASE_API_KEY);
  
  const code = context.req.param("code").toString().toUpperCase();
  
  const { data, error } = await supabase
  .from("join_code_deletion_queue")
  .select()
  .eq("code", code);

  if (error){
    context.status(500);
    return context.json({
      inDeletionQueue: false,
      error: error.message
    })
  }

  if (data.length === 0){
    return context.json({
      inDeletionQueue: false,
      error: "none"
    })
  }

  return context.json({
    inDeletionQueue: true,
    error: "none"
  });
};
