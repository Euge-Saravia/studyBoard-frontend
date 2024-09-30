import { useEffect, useState } from 'react'

export const useCookies = (cookieName) => {
    const [cookieValue, setCookieValue] = useState(null)

    useEffect(() => {
        let cookies = document.cookie
        if (cookies) {
            cookies = cookies.split("; ")
            let value = cookies.find((row) => row.startsWith(cookieName))
            // Ensure value exists and is not null before splitting
            if (value) {
                value = value.split("=")
                setCookieValue(value.length > 1 ? value[1] : null) // Check if there is a value after the '='
            } else {
                setCookieValue(null) // Set cookieValue to null if no match found
            }
        } else {
            setCookieValue(null) // Handle case where cookies string is empty
        }
    }, [cookieName])

    return cookieValue
}
