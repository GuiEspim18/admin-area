import { ReactElement, useContext, useState } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { ButtonDiv, H2, StyledButton, StyledCard, StyledContainer } from "../../../assets/ui/global";
import { LoginContext } from "../../shared/common/context/Login.context";
import { ILoginContext } from "../../shared/interfaces/login-context/login-context";
import { Error } from "../../shared/utils/Alerts/Alerts";
import Input from "../../shared/utils/Input/Input";
import PasswordInput from "../../shared/utils/PasswordInput/PasswordInput";

function Login(): ReactElement {

    /* Vars */

    const { email, setEmail, password, setPassword } = useContext<ILoginContext>(LoginContext);

    const navigate: NavigateFunction = useNavigate();

    const [ invEmail, setInvEmail ] = useState(false);

    const [ invPassword, setInvPassword ] = useState(false);


    /* Submit form */

    function submit(event: Event): void {
        event.preventDefault()
        if (email.length > 0 && password.length > 0) {
            if (isEmailValid(email)) {
                navigate('/home');
            } else {
                setInvEmail(true) 
                Error("Digite um email válido!");
            }
        } else {
            setInvEmail(true)
            setInvPassword(true)
            Error("Preencha todos os campos obrigatórios!");
        }
    }


    function isEmailValid(email:string) {
        return /\S+@\S+\.\S+/.test(email);
    }


    /* Return component */

    return (
        <StyledContainer>
            <StyledCard>
                <form onSubmit={(event: any) => submit(event)}>
                    <H2>Login</H2>
                    <Input label="Email" type="text" value={email} invalid={invEmail} setValue={(value) => setEmail(value)} />
                    <PasswordInput label="Password" password={password} invalid={invPassword} setPassword={(value) => setPassword(value)} />
                    <ButtonDiv>
                        <StyledButton variant="contained" type="submit">Submit</StyledButton>
                    </ButtonDiv>
                </form>
            </StyledCard>
        </StyledContainer>
    );
}

export default Login;