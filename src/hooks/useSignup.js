import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
// firebase imports
import { auth } from '../firebase/config';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';

export const useSignUp = () => {
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(false);
    const { dispatch } = useAuthContext();

    const signup = async (email, password, displayName) => {
        setError(null);
        setIsPending(true);
        
        createUserWithEmailAndPassword(auth, email, password)
            .then((response) => {
                if (!response) {
                    throw new Error('Could not complete')
                }
                // add display name
                updateProfile(auth.currentUser, { displayName })

                //dispatch
                dispatch({type: 'LOGIN', payload: response.user})

                setError(null);
            })
            .catch((err) => {
                setError(err.message)
            })
            .finally(() => setIsPending(false))
    }

    return { error, signup, isPending }
}
