import type * as tsHTTP from "ts-http";
declare module "ts-http" {
    interface Context {
        status: number;
        reply: string;
    }
}
declare function use(next: tsHTTP.Handler): tsHTTP.Handler;
export declare function EndResponse(): {
    use: typeof use;
};
export {};
