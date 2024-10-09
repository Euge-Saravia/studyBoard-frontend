import { useCallback, useEffect, useState } from "react";
import useFetch from "./useFetch";
import { useAuth } from "./useAuth";

const useGet = (endpoint) => {
  const [shouldGet, setShouldGet] = useState(false);
  const { authToken } = useAuth();

  const fetchOption = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      ...(authToken ? { Authorization: `Bearer ${authToken}` } : {}),
    },
  };

  const { data, loading, error, fetch } = useFetch(endpoint, fetchOption, shouldGet);

  const executeGet = useCallback(() => {
    console.log(data);
    setShouldGet(true);
  }, []);

  useEffect(() => {
    if (shouldGet) {
      fetch();
      setShouldGet(false);
    }
  }, [shouldGet, fetch]);

  return { data, loading, error, executeGet };
};

export default useGet;
