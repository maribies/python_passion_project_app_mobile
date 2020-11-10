import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  const [status, setStatus] = useState("");

  useEffect(() => {
    const fetchData = async (url) => {
      setStatus("fetching");
      fetch(url)
        .then((results) => results.json())
        .then((results) => {
          setData(results);
          return setStatus("fetched");
        })
        .catch((error) => {
          setError(error);
          return setStatus("error");
        });
    };

    fetchData(url);
  }, [url]);

  return { status, data, error };
};
