import { useEffect, useState } from 'react'

export const useCookies = (cookieName) => {
    const [cookieValue, setCookieValue] = useState(null)

    useEffect(() => {
        let cookies = document.cookie
        if (cookies) {
            cookies = cookies.split("; ")
            let value = cookies.find((row) => row.startsWith(cookieName))
            if (value) {
                value = value.split("=")
                setCookieValue(value.length > 1 ? value[1] : null)
            } else {
                setCookieValue(null)
            }
        } else {
            setCookieValue(null)
        }
    }, [cookieName])
    
  return cookieValue

}