import { useCallback, useEffect, useState } from "react";
import useFetch from "./useFetch";
import { useAuth } from "./useAuth";

const useDelete = (endpoint) => {
  const [body] = useState(null);
  const [shouldDelete, setShouldDelete] = useState(false);
  const { authToken } = useAuth();

  const fetchOption = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      ...(authToken ? { Authorization: `Bearer ${authToken}` } : {}),
    },
  };

  const { data, loading, error, fetch } = useFetch(endpoint, fetchOption, shouldDelete);

  const executeDelete = useCallback((deleteData) => {
    setShouldDelete(true);
  }, []);

  useEffect(() => {
    if (shouldDelete) {
      fetch();
      setShouldDelete(false);
    }
  }, [shouldDelete, fetch, body]);

  return { data, loading, error, executeDelete };
};

export default useDelete;
