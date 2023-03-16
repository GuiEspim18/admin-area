import { Dispatch } from "react";

export interface IPasswordInput {
    label: string;
    password: string;
    setPassword: Dispatch<string>;
    invalid?: boolean
}