import { checkingCredentials } from "./authSlice"

export const checkingAuthenticaction = ( email, password ) => {
    return async (dispatch) => {
        
        dispatch( checkingCredentials() )

    }
}

export const startGoogleSingIn = () => {
    return async (dispatch) => {
        
        dispatch( checkingCredentials() )

    }
}