import { useCallback, useEffect, useState } from "react";
import useFetch from "./useFetch";
import { useAuth } from "./useAuth";

const usePost = (endpoint) => {
    const [body, setBody] = useState(null);
    const [shouldPost, setShouldPost] = useState(false);
    const { authToken } = useAuth();

    const fetchOption = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            ...(authToken ? { Authorization: `Bearer ${authToken}` } : {}),
        },
        body: body ? JSON.stringify(body) : null,
    };

    const { data, loading, error, fetch } = useFetch(endpoint, fetchOption, shouldPost);

    const executePost = useCallback((postData) => {
        setBody(postData);
        setShouldPost(true);
    }, []);

    useEffect(() => {
        if (shouldPost && body) {
            fetch(body);
            setShouldPost(false);
        }
    }, [shouldPost, fetch, body]);

    return { data, loading, error, executePost };
};

export default usePost;
