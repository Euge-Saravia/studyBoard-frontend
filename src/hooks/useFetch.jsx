import {  useEffect, useState } from 'react'
import { API_URL } from "../config";

const useFetch = (endpoint, options, shouldFetch = true) => {

    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const fetchData =
        async (fetchOption = undefined) => {
            setLoading(true)
            setError(null)

            try {
                const response = await fetch(`${API_URL}${endpoint}`, {
                    ...options, ...fetchOption
                })

                if (!response.ok) {
                    throw new Error(`Error ${response.status}: ${response.statusText}`)
                }

                const result = await response.json()
                setData(result)

            } catch (err) {
                if (err.name !== "AbortError") {
                    setError(err.message || "Error inesperado")
                }
            } finally {
                setLoading(false)
            }

        }

    useEffect(() => {
        if (!shouldFetch) return
        fetchData()
    }, [endpoint, shouldFetch])
    return { data, loading, error, fetchData }

}

export default useFetch