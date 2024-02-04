// Alphanumeric and specific length
export const verifyCodeFormatMiddleware = (context, next) => {
    const length = 6;
    
    const code = context.req.param("code");
    const isValidCode = new RegExp(`^[a-zA-Z0-9]{${length}}$`).test(code);

    if (!isValidCode) {
        if (!/^[a-zA-Z0-9]+$/.test(code)) {
            return context
                .json({ error: `Invalid format: '${code}' must be alphanumeric` });
        }

        if (code.length !== length) {
            return context.json({
                error: `Invalid format: '${code}' must have a length of ${length} characters`,
            });
        }

        return context.json({ error: 'Invalid format' });
    }

    return next();
};
