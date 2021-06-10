import {Alert} from "@material-ui/lab";


export const loginError = () => {
    return (
        <div>
            <Alert severity="error">Incorrect password or username.</Alert>
        </div>
    )
}