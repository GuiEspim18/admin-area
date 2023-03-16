import { ReactElement } from "react";
import { StyledInputContainer } from "../../../../assets/ui/global";
import { IInput } from "../../interfaces/input/input.interface";

function Input({type, label}: IInput): ReactElement {
    return (
        <StyledInputContainer>
            <input type={type} placeholder={label} />
        </StyledInputContainer>
    );
}

export default Input;