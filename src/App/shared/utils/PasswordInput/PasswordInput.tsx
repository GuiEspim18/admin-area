import { IconButton } from "@mui/material";
import { ReactElement } from "react";
import { StyledPasswordContainer } from "../../../../assets/ui/global";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { IPasswordInput } from "../../interfaces/password-input/password-input.interface";

function PasswordInput({ label }: IPasswordInput): ReactElement {
    return (
        <StyledPasswordContainer>
            <input type="password" placeholder={label} />
            <IconButton aria-label="view">
                <RemoveRedEyeIcon />
            </IconButton>
        </StyledPasswordContainer>
    );
}

export default PasswordInput;