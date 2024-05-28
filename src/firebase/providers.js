import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { FirebaseAuth } from "./config";


const googleProvider = new GoogleAuthProvider();


export const signInWithGoogle = async () => {


    try {
        const result = await signInWithPopup( FirebaseAuth, googleProvider );
        // const credentials = GoogleAuthProvider.credentialFromResult(result);
        // console.log({credentials});
        const {displayName, email, photoURL, uid } = result.user;

        return {
            ok: true,
            displayName, email, photoURL, uid
        }

    } catch (error) {
        console.log(error);
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
    // ...

        return {
            ok: false,
            errorMessage

        }
    }
}

export const RegistrerUserWithEmailPassword = async (email, password, displayName) => {
    // console.log(email, password, displayName, "Provider");
    try{
        const resp = await createUserWithEmailAndPassword(FirebaseAuth, email, password);
        const { uid, photoURL } = resp.user;
        // console.log(resp);
        //TODO:actuelizar el nombre de usuario
        await updateProfile(FirebaseAuth.currentUser, { displayName });
        return { ok: true,
             uid, displayName, email, photoURL
             }
    } catch (error) {
        // console.log(error);
        return{ ok: false, errorMessage: error.message }
    }
}

export const loginWithEmailPassword = async (email, password) => {
    try {
        const resp = await signInWithEmailAndPassword(FirebaseAuth, email, password);
        const { displayName, photoURL, uid } = resp.user;
        return {
            ok: true,
            displayName, photoURL, uid
        }

    }catch (error) {
        return { ok: false, errorMessage: error.message }
    }
}

export const logoutFirebase = async () => {
    return await FirebaseAuth.signOut();
}