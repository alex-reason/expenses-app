import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

import { auth } from "../firebase/config";
import { signOut } from "firebase/auth";

export const useLogout = () => {
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(false);
    const { dispatch } = useAuthContext();

    const logout = () => {
        setError(null);
        setIsPending(true);

        signOut(auth)
            .then(() => {
                console.log('user signed out')
                dispatch({ type: 'LOGOUT' })
            })
            .catch((err) => {
                setError(err)
            })
            .finally(() =>
                setIsPending(false)
            )
    }
    return { logout, error, isPending }
}

