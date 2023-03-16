import { ReactElement, useContext } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { ButtonDiv, H2, StyledButton, StyledCard, StyledContainer } from "../../../assets/ui/global";
import { LoginContext } from "../../shared/common/context/Login.context";
import { ILoginContext } from "../../shared/interfaces/login-context/login-context";
import Input from "../../shared/utils/Input/Input";
import PasswordInput from "../../shared/utils/PasswordInput/PasswordInput";

function Login(): ReactElement {

    /* Vars */

    const { email, setEmail, password, setPassword } = useContext<ILoginContext>(LoginContext);

    const navigate: NavigateFunction = useNavigate();


    /* Submit form */

    const submit: VoidFunction = (): void => {
        if (email.length > 0 && password.length > 0) {
          navigate('/home');
        }
    }


    /* Return component */

    return (
        <StyledContainer>
            <StyledCard>
                <form>
                    <H2>Login</H2>
                    <Input label="Email" type="email" value={email} setValue={(value) => setEmail(value)} />
                    <PasswordInput label="Password" password={password} setPassword={(value) => setPassword(value)} />
                    <ButtonDiv onClick={submit}>
                        <StyledButton variant="contained">Submit</StyledButton>
                    </ButtonDiv>
                </form>
            </StyledCard>
        </StyledContainer>
    );
}

export default Login;