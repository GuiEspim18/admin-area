import Login from "../../../../pages/Login/Login";

export const routes: Array<any> = [
    {
        path: "/login",
        component: <Login />,
        redirect: true
    },
    {
        path: "/home",
        component: <Login />,
        redirect: false
    },
]