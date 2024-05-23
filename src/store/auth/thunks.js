import { signInWithGoogle } from "../../firebase/providers"
import { checkingCredentials, login, logout } from "./authSlice"

export const checkingAuthenticaction = ( email, password ) => {
    return async (dispatch) => {
        
        dispatch( checkingCredentials() )

    }
}

export const startGoogleSingIn = () => {
    return async (dispatch) => {
        
        dispatch( checkingCredentials() )

        const result = await signInWithGoogle();
        if( !result.ok ) {
           return dispatch( logout(result.errorMessage));
        }else{
            dispatch( login( result ) )
        }

    }
}