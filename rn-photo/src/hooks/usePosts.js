import { useCallback, useEffect, useRef, useState } from 'react';
import { getPosts } from '../api/post';

const usePosts = (uid) => {
  const [data, setData] = useState([]);
  const [refetching, setRefetching] = useState(false);

  const isLoadingRef = useRef(null);
  const lastRef = useRef(null);

  const fetchNextPage = useCallback(async () => {
    if (!isLoadingRef.current) {
      isLoadingRef.current = true;
      const { list, last } = await getPosts({ after: lastRef.current, uid });
      if (list.length > 0) {
        setData((prev) => (lastRef.current ? [...prev, ...list] : list));
        lastRef.current = last;
      }
      isLoadingRef.current = false;
    }
  }, [uid]);

  const refetch = async () => {
    setRefetching(true);
    lastRef.current = null;
    await fetchNextPage();
    setRefetching(false);
  };

  useEffect(() => {
    fetchNextPage();
  }, [fetchNextPage]);

  const deletePost = ({ id }) => {
    setData((prev) => prev.filter((item) => item.id !== id));
  };

  const updatePost = (post) => {
    setData((prev) => prev.map((item) => (item.id === post.id ? post : item)));
  };

  return { data, fetchNextPage, refetch, refetching, deletePost, updatePost };
};

export default usePosts;
