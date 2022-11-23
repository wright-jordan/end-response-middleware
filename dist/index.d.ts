/// <reference types="node" />
import type * as tsHTTP from "ts-http";
declare module "ts-http" {
    interface Context {
        status: number;
        reply: Buffer | string;
    }
}
export declare function EndResponse(): tsHTTP.Middleware;
