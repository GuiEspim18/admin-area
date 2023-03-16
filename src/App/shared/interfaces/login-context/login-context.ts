import { Dispatch } from "react";

export interface ILoginContext {
    email: string;
    setEmail: Dispatch<string>;
    password: string;
    setPassword: Dispatch<string>;
}