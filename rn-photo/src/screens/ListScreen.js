import { StyleSheet, View } from 'react-native';
import { useEffect, useState, useRef, useCallback } from 'react';
import { getPosts } from '../api/post';
import PostList from '../components/PostList';
import { WHITE } from '../colors';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const ListScreen = () => {
  const { top } = useSafeAreaInsets();

  const [data, setData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const isLoadingRef = useRef(false);
  const lastRef = useRef(null);

  const getList = useCallback(async () => {
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
    setRefreshing(true);
    lastRef.current = null;
    await getList();
    setRefreshing(false);
  };

  useEffect(() => {
    getList();
  }, [getList]);

  return (
    <View style={[styles.container, { paddingTop: top }]}>
      <PostList
        data={data}
        fetchNextPage={getList}
        refreshing={refreshing}
        refetch={refetch}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WHITE,
  },
});

export default ListScreen;
