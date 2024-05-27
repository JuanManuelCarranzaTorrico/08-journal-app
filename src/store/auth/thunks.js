import { signInWithGoogle, RegistrerUserWithEmailPassword} from "../../firebase/providers"
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

export const startCreatingUserWithEmailPassword = ( {email, password, displayName} ) => {
    // console.log(email, password, displayName, "Thunks");
    return async (dispatch) => {
        
        dispatch( checkingCredentials() );

        const { ok, uid, photoURL, errorMessage } = await RegistrerUserWithEmailPassword( email, password, displayName );

        if( !ok ) {
            return dispatch( logout( {errorMessage} ) );
        }

        dispatch( login({uid, email, displayName, photoURL}));
    }
}