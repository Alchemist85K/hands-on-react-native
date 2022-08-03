import { FlatList, StyleSheet, View } from 'react-native';
import PostItem from './PostItem';
import { GRAY } from '../colors';
import usePosts from '../hooks/usePosts';
import { useEffect } from 'react';
import event, { EventTypes } from '../event';

const PostList = () => {
  const { data, fetchNextPage, refetch, refetching } = usePosts();

  useEffect(() => {
    event.addListener(EventTypes.REFRESH, refetch);

    return () => event.removeAllListeners();
  }, [refetch]);

  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <PostItem post={item} />}
      ItemSeparatorComponent={() => <View style={styles.separator}></View>}
      onEndReached={fetchNextPage}
      refreshing={refetching}
      onRefresh={refetch}
    />
  );
};

const styles = StyleSheet.create({
  separator: {
    marginVertical: 20,
    borderBottomColor: GRAY.LIGHT,
    borderBottomWidth: 0.5,
  },
});

export default PostList;
