import { useCallback, useEffect, useRef, useState } from 'react';
import { getPostsByLocation } from '../api/post';

const usePostsByLocation = (location) => {
  const [data, setData] = useState([]);

  const isLoadingRef = useRef(null);
  const lastRef = useRef(null);

  const fetchNextPage = useCallback(async () => {
    if (!isLoadingRef.current) {
      isLoadingRef.current = true;
      const { list, last } = await getPostsByLocation({
        after: lastRef.current,
        location,
      });

      const photos = list.map((item) => item.photos).flat();
      setData((prev) => (lastRef.current ? [...prev, ...photos] : photos));
      lastRef.current = last;

      isLoadingRef.current = false;
    }
  }, [location]);

  useEffect(() => {
    fetchNextPage();
  }, [fetchNextPage]);

  return { data, fetchNextPage };
};

export default usePostsByLocation;
