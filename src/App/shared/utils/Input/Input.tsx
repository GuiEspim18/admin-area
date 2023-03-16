import { ReactElement } from "react";
import { StyledInputContainer } from "../../../../assets/ui/global";
import { IInput } from "../../interfaces/input/input.interface";

function Input({type, label, value, setValue}: IInput): ReactElement {

    /* Setting email hook */

    const settingEmail = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setValue(event.target.value);
    }


    /* Return component */

    return (
        <StyledInputContainer>
            <input type={type} placeholder={label} value={value} onChange={(event) => settingEmail(event)} />
        </StyledInputContainer>
    );
    
}

export default Input;