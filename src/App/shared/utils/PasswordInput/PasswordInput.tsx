import { IconButton } from "@mui/material";
import {ReactElement, useState } from "react";
import { StyledInput, StyledPasswordContainer } from "../../../../assets/ui/global";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { IPasswordInput } from "../../interfaces/password-input/password-input.interface";

function PasswordInput({ label, password, setPassword, invalid }: IPasswordInput): ReactElement {

    /* Vars */

    const [view, setView] = useState<boolean>(false);


    /* Changing view */

    const changeView: VoidFunction = (): void => {
        if (view === false) {
            setView(true)
        } else {
            setView(false)
        }
    }


    /* Setting email hook */

    function settingPassword(event: React.ChangeEvent<HTMLInputElement>): void {
        setPassword(event.target.value);
    }


    /* Return component */

    return (
        <StyledPasswordContainer invalid={invalid}>
            <StyledInput invalid={invalid} type={view === false ? "password":"text"} placeholder={label} value={password} onChange={(event: any) => settingPassword(event)} />
            <IconButton aria-label="view" onClick={changeView}>
                {(view === false) && <RemoveRedEyeIcon />}
                {(view === true) && <VisibilityOffIcon />}
            </IconButton>
        </StyledPasswordContainer>
    );
    
}

export default PasswordInput; 