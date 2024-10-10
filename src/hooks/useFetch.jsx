import { useEffect, useState } from "react";
import { API_URL } from "../config";

const useFetch = (endpoint, options, shouldFetch = true) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [hasFetched, setHasFetched] = useState(false);

    const fetchData = async (fetchOption = undefined) => {
        setLoading(true);
        setError(null);

        try {
            const response = await fetch(`${API_URL}${endpoint}`, {
                ...options,
                ...fetchOption,
            });

            if (!response.ok) {
                const errorData = await response.json();
                
                throw new Error(errorData.message || `Error ${response.status}: ${response.statusText}`);
            }

            const result = await response.json();            
            setData(result);
        } catch (err) {
            if (err.name !== "AbortError") {
                setError(err.message || "Error inesperado");
            }
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (!shouldFetch || !endpoint || hasFetched) return
        fetchData()
        setHasFetched(true)
    }, [shouldFetch, endpoint])

    return { data, loading, error, fetch: fetchData }
}

export default useFetch;
