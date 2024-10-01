import { useCallback, useEffect, useState } from 'react'
import {API_URL} from "../config";

const useFetch = (endpoint, options = {}, shouldFetch = true) => {

    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const fetchData = useCallback(
        async (fetchOption = {}) => {
            setLoading(true)
            setError(null)

            const controller = new AbortController()
            const { signal } = controller

            try {

                const response = await fetch(`${API_URL}${endpoint}`, {
                    ...options, ...fetchOption, signal
                })

                if (!response.ok) {
                    throw new Error(`Error ${response.status}: ${response.statusText}`)
                }

                const result = await response.json()
                setData(result)

            } catch (error) {
                if (error.name !== "AbortError") {
                    setError(error.message || "Error inesperado")
                }
            } finally {
                setLoading(false)
            }

            return () => controller.abort()

        }, [endpoint, options])

    useEffect(() => {
        if (shouldFetch) {
            fetchData()
        }
    }, [shouldFetch, fetchData])
    return { data, loading, error, fetch: fetchData }
}

export default useFetch