import { ReactElement } from "react";
import { StyledInput, StyledInputContainer } from "../../../../assets/ui/global";
import { IInput } from "../../interfaces/input/input.interface";


function Input({type, label, value, setValue, invalid}: IInput): ReactElement {

    /* Setting email hook */

    function settingEmail(event: React.ChangeEvent<HTMLInputElement>): void {
        setValue(event.target.value);
    }


    /* Return component */

    return (
        <StyledInputContainer invalid={invalid}>
            <StyledInput invalid={invalid} type={type} placeholder={label} value={value} onChange={(event: any) => settingEmail(event)} />
        </StyledInputContainer>
    );
    
}

export default Input;