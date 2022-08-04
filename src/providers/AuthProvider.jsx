import React from "react";
import { auth } from "../firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";

export const AuthContext = React.createContext({})

export const AuthProvider = ({ children }) => {
    
    const [users, setUsers] = React.useState(null)
    const [loading, setLoading] = React.useState(true)


    React.useEffect(() => {
        const Listen = onAuthStateChanged(auth, user => {
            if (user) {
                setUsers({
                    id: user.uid,
                    name: user.displayName,
                    email: user.email,
                    photo: user.photoURL,
                })
                setLoading(false)
            } else {
                setLoading(false)
            }
        })
        return () => Listen()
    }, [])


    const value = React.useMemo(() => ({
        users, 
        loading
    }), [users, loading] )

    return <AuthContext.Provider value={value}> {children} </AuthContext.Provider>
}