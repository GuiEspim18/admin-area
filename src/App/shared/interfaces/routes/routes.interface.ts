import { ReactElement } from "react";

export interface IRoutes {
    path: string;
    component: ReactElement;
    redirect: boolean
}