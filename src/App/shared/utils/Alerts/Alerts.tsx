import Swal from "sweetalert2";
import { error } from "../../../../assets/ui/main";


/** 
 * Error alert displays an error alert on screen
 */

export function Error(message: string): any {
    Swal.fire({
        text: message,
        icon: 'error',
        iconColor: error,
        toast: true,
        position: 'top',
        showConfirmButton: false,
        confirmButtonColor: error,
        timer: 3000,
        timerProgressBar: true
    })
}