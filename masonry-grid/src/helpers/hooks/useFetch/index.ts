import { useCallback, useEffect, useState } from "react";
import { TResult, THit, TUseFetchReturn } from "./types";

function useFetch(endpoint: string): TUseFetchReturn {
  const [photos, setPhotos] = useState<string[]>([]);
  const [isError, setIsError] = useState(false);
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const fetchPhotos = useCallback(async () => {
    try {
      setIsLoading(true);
      setMessage("Loading...");

      const data = await fetch(endpoint);
      const result: TResult = await data.json();

      result.hits.forEach((hit: THit) => {
        setPhotos((prevPhotos) => {
          return [...prevPhotos, hit.largeImageURL];
        });
      });
    } catch (error) {
      setIsError(true);
      setMessage("Something went wrong...");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }, [endpoint]);

  useEffect(() => {
    if (message.length === 0) return;
    const timeout = setTimeout(() => {
      setIsError(false);
      setMessage("");
    }, 5000);

    return () => clearTimeout(timeout);
  }, [message]);

  useEffect(() => {
    fetchPhotos();
  }, [fetchPhotos]);

  return [photos, isError, message, isLoading];
}

export { useFetch };
