import { useEffect, useState } from 'react'

export const useCookies = (cookieName) => {

    const [cookieValue, setCookieValue] = useState(null)

    useEffect(()=>{
        let cookies =document.cookie
        if (cookies) {
            cookies = cookies.split("; ")
            let value = cookies.find((row)=> row.startsWith(cookieName))
            value = value ? value.split("=") : null
            setCookieValue(value[1])
        } else{
            setCookieValue(false)
        }
    }, [cookieName])
    return (
        cookieValue
    )
}
