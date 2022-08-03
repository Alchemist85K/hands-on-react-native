import { FlatList, StyleSheet, View } from 'react-native';
import PostItem from './PostItem';
import { GRAY } from '../colors';
import usePosts from '../hooks/usePosts';
import { useEffect } from 'react';
import event, { EventTypes } from '../event';
import { useUserState } from '../contexts/UserContext';
import PropTypes from 'prop-types';

const PostList = ({ isMyPost }) => {
  const [user] = useUserState();
  const { data, fetchNextPage, refetch, refetching, deletePost, updatePost } =
    usePosts(isMyPost && user.uid);

  useEffect(() => {
    event.addListener(EventTypes.REFRESH, refetch);
    event.addListener(EventTypes.DELETE, deletePost);
    event.addListener(EventTypes.UPDATE, updatePost);

    return () => event.removeAllListeners();
  }, [refetch, deletePost, updatePost]);

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

PostList.propTypes = {
  isMyPost: PropTypes.bool,
};

const styles = StyleSheet.create({
  separator: {
    marginVertical: 20,
    borderBottomColor: GRAY.LIGHT,
    borderBottomWidth: 0.5,
  },
});

export default PostList;
