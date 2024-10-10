import useFetch from "./useFetch";
import { useAuth } from "./useAuth";

const useDelete = (endpoint) => {
  const { authToken } = useAuth();
  const { data, loading, error, fetch } = useFetch(endpoint, {}, false);

  const executeDelete = () => {
    fetch({
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        ...(authToken && { Authorization: `Bearer ${authToken}` }),
      },
    });
  };

  return { data, loading, error, executeDelete };
};

export default useDelete;
