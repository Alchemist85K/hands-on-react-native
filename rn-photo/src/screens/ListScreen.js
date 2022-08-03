import { StyleSheet, View } from 'react-native';
import { useEffect, useState } from 'react';
import { getPosts } from '../api/post';
import PostList from '../components/PostList';
import { WHITE } from '../colors';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const ListScreen = () => {
  const { top } = useSafeAreaInsets();

  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      const list = await getPosts();
      setData(list);
    })();
  }, []);

  return (
    <View style={[styles.container, { paddingTop: top }]}>
      <PostList data={data} />
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
