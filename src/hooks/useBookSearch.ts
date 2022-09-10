import { useEffect, useState } from "react";

import axios from "axios";

export const useBookSearch = (query: string, pageNumber: number) => {
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [books, setBooks] = useState<any[]>([]);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    setBooks([]);
  }, [query]);

  useEffect(() => {
    let canceler: any;

    if (query.length > 0) {
      setLoading(true);
      axios({
        method: "GET",
        url: "http://openlibrary.org/search.json",
        params: { q: query, page: pageNumber },
        cancelToken: new axios.CancelToken((c) => (canceler = c)),
      })
        .then((res) => {
          setBooks((prevBooks: any[]) => {
            return [...prevBooks, ...res.data.docs.map((b: any) => b.title)];
          });
          setHasMore(res.data.docs.length > 0);

          console.log(res.data);
        })
        .catch((e) => {
          if (axios.isCancel(e)) return;
          setError(true);
        })
        .finally(() => {
          setLoading(false);
        });
    }

    if (canceler) return () => canceler();
  }, [query, pageNumber]);

  return { isLoading, error, books, hasMore };
};
