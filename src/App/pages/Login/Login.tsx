import { ReactElement } from "react";
import { ButtonDiv, H2, StyledButton, StyledCard, StyledContainer, StyledInputContainer } from "../../../assets/ui/global";
import Input from "../../shared/utils/Input/Input";
import PasswordInput from "../../shared/utils/PasswordInput/PasswordInput";

function Login(): ReactElement {
    return (
        <StyledContainer>
            <StyledCard>
                <H2>Login</H2>
                <Input label="Email" type="email" />
                <PasswordInput label="Password" />
                <ButtonDiv>
                    <StyledButton variant="contained">Submit</StyledButton>
                </ButtonDiv>
            </StyledCard>
        </StyledContainer>
    );
}

export default Login;