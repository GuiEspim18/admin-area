import { createContext, Context, ReactElement, useState } from "react";
import { ILoginContext } from "../../interfaces/login-context/login-context";
import { ChildrenType } from "../../types/children/children.types";


/* Creating our context */

export const LoginContext: Context<ILoginContext> = createContext<ILoginContext>({} as ILoginContext);


/* Setting our context name */

LoginContext.displayName="LoginContext";


/* Creating our context provider */

export function LoginProvider({ children }: ChildrenType): ReactElement {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    return (
        <LoginContext.Provider value={{email, setEmail, password, setPassword}}>
            { children }
        </LoginContext.Provider>
    );
}