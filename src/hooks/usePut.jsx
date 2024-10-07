import { useCallback, useEffect, useState } from "react";
import useFetch from "./useFetch";
import { useAuth } from "./useAuth";

const usePut = (endpoint) => {
  const [body, setBody] = useState(null);
  const [shouldPut, setShouldPut] = useState(false);
  const { authToken } = useAuth();

  const fetchOption = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      ...(authToken ? { Authorization: `Bearer ${authToken}` } : {}),
    },
    body: body ? JSON.stringify(body) : null,
  };

  const { data, loading, error, fetch } = useFetch(endpoint, fetchOption, shouldPut);

  const executePut = useCallback((putData) => {
    setBody(putData);
    setShouldPut(true);
  }, []);

  useEffect(() => {
    if (shouldPut && body) {
      fetch();
      setShouldPut(false);
    }
  }, [shouldPut, fetch, body]);

  return { data, loading, error, executePut };
};

export default usePut;
