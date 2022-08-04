import React from "react"
import { AuthContext } from "./AuthProvider"

export const useAuth = () => {
    
    const value = React.useContext(AuthContext)
    
    return value
}
