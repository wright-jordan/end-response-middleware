export class EndResponseMiddleware {
    use(next) {
        return async function endResponseMiddleware(req, res, ctx) {
            await next(req, res, ctx);
            if (res.headersSent) {
                return;
            }
            res.statusCode = ctx.status;
            res.end(ctx.reply);
        };
    }
}
