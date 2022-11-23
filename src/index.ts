import type * as tsHTTP from "ts-http";

declare module "ts-http" {
  interface Context {
    status: number;
    reply: Buffer | string;
  }
}

function use(next: tsHTTP.Handler): tsHTTP.Handler {
  return async function endResponseMiddleware(req, res, ctx) {
    await next(req, res, ctx);
    if (res.headersSent) {
      return;
    }
    res.statusCode = ctx.status;
    res.end(ctx.reply);
  };
}

export function EndResponse(): tsHTTP.Middleware {
  return {
    use,
  };
}
