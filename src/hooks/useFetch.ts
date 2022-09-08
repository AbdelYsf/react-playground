import { useEffect, useState } from "react";
import axios from "axios";

export const useFetch = (url: string) => {
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState<any>(null);
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setData(res.data);
      })
      .catch(setError)
      .finally(() => {
        setLoading(false);
      });
  }, [url]);

  return { data, isLoading, error };
};
