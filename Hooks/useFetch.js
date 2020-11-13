import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  const [status, setStatus] = useState("");

  useEffect(() => {
    const fetchData = async (url) => {
      setStatus("fetching");

      await fetch(url)
        .then((results) => results.json())
        .then((results) => {
          setData(results);
        })
        .catch((error) => {
          setError(error);
        })
        .finally(() => {
          setStatus("fetched");
        });
    };

    fetchData(url);
  }, [url]);

  return { status, data, error };
};
