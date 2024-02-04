export const authentication = async (context, next) => {
  const bearer = context.req.headers.get("Authorization");

  if (bearer !== context.env.API_AUTH_KEY){
    context.status(401);
    return context.json({
      error: "Invalid Authorization Key"
    })
  }

  await next();
};
