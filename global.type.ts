import "next-auth";

declare module "next-auth" {
    interface User {
        token?: string;
        user?: any;
    }
}

interface IProcessEnv {
    APP_URL: string;
}

declare global {
    namespace NodeJS {
        interface ProcessEnv extends IProcessEnv {}
    }
}

export {};
