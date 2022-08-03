import { FlatList, StyleSheet, View } from 'react-native';
import PostItem from './PostItem';
import { GRAY } from '../colors';
import PropTypes from 'prop-types';

const PostList = ({ data }) => {
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <PostItem post={item} />}
      ItemSeparatorComponent={() => <View style={styles.separator}></View>}
    />
  );
};

PostList.propTypes = {
  data: PropTypes.array.isRequired,
};

const styles = StyleSheet.create({
  separator: {
    marginVertical: 20,
    borderBottomColor: GRAY.LIGHT,
    borderBottomWidth: 0.5,
  },
});

export default PostList;
