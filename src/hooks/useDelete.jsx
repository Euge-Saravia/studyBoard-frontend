import React, { useCallback, useEffect, useState } from 'react'
import useFetch from './useFetch'
import { useCookies } from './useCookies'

const useDelete = (endpoint) => {

    const [body, setBody] = useState(null)
    const [shouldDelete, setShouldDelete] = useState(false)

    const authToken = useCookies('authToken')

    const fetchOption = {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            ...(authToken ? { Authorization: `Bearer ${authToken}` } : {}),
        }
    }

    const { data, loading, error, fetch } = useFetch(endpoint, fetchOption, shouldDelete)

    const executeDelete = useCallback((deleteData) => {
        setShouldDelete(true);
    }, [])

    useEffect(() => {
        if (shouldDelete) {
            fetch()
            setShouldDelete(false)
        }
    }, [shouldDelete, fetch, body])

    return { data, loading, error, executeDelete }
}

export default useDelete