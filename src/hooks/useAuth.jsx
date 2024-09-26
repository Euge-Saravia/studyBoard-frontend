import { useEffect, useState } from 'react'
import { useCookies } from './useCookies'

export const useAuth = () => {

    const token = useCookies("authToken")
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    useEffect(()=>{
        if(token) {
            setIsAuthenticated(true)
        } else {
            setIsAuthenticated(false)
        }
    }, [token])
    return (
        isAuthenticated
    )
}
