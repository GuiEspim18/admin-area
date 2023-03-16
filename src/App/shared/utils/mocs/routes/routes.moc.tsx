import Home from "../../../../pages/Home/Home";
import Login from "../../../../pages/Login/Login";
import { LoginProvider } from "../../../common/context/Login.context";

export const routes: Array<any> = [
    {
        path: "/login",
        component: (
            <LoginProvider>
                <Login />
            </LoginProvider>
        ),
        redirect: true
    },
    {
        path: "/home",
        component: <Home />,
        redirect: false
    },
]