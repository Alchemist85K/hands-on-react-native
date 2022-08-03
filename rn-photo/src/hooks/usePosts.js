import { useCallback, useEffect, useRef, useState } from 'react';
import { getPosts } from '../api/post';

const usePosts = () => {
  const [data, setData] = useState([]);
  const [refetching, setRefetching] = useState(false);

  const isLoadingRef = useRef(null);
  const lastRef = useRef(null);

  const fetchNextPage = useCallback(async () => {
    if (!isLoadingRef.current) {
      isLoadingRef.current = true;
      const { list, last } = await getPosts({ after: lastRef.current });
      if (list.length > 0) {
        setData((prev) => (lastRef.current ? [...prev, ...list] : list));
        lastRef.current = last;
      }
      isLoadingRef.current = false;
    }
  }, []);

  const refetch = async () => {
    setRefetching(true);
    lastRef.current = null;
    await fetchNextPage();
    setRefetching(false);
  };

  useEffect(() => {
    fetchNextPage();
  }, [fetchNextPage]);

  return { data, fetchNextPage, refetch, refetching };
};

export default usePosts;
