/// <reference types="node" />
import * as tsHTTP from "ts-http";
declare module "ts-http" {
    interface Context {
        status: number;
        reply: Buffer | string;
    }
}
export declare class EndResponseMiddleware implements tsHTTP.Middleware {
    use(next: tsHTTP.Handler): tsHTTP.Handler;
}
