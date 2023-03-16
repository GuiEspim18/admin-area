import { Dispatch } from "react";

export interface IInput {
    type: string;
    label: string;
    value: string;
    setValue: Dispatch<string>;
}