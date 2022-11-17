import * as tsHTTP from "ts-http";

declare module "ts-http" {
  interface Context {
    status: number;
    reply: Buffer | string;
  }
}

export class EndResponseMiddleware implements tsHTTP.Middleware {
  use(next: tsHTTP.Handler): tsHTTP.Handler {
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
