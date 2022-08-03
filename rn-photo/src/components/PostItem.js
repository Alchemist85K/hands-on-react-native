import { StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import FastImage from './FastImage';
import ImageSwiper from './ImageSwiper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import PropTypes from 'prop-types';
import { PRIMARY, WHITE } from '../colors';
import { memo } from 'react';

const PostItem = memo(({ post }) => {
  const width = useWindowDimensions().width;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <FastImage
          source={{ uri: post.user.photoURL }}
          style={styles.profilePhoto}
        />
        <Text style={styles.nickname}>{post.user.displayName}</Text>
      </View>

      <View style={{ width, height: width }}>
        <ImageSwiper photos={post.photos} />
      </View>

      <View style={styles.location}>
        <MaterialCommunityIcons
          name="map-marker"
          size={24}
          color={PRIMARY.DEFAULT}
        />
        <Text>{post.location}</Text>
      </View>

      <Text style={styles.text}>{post.text}</Text>
    </View>
  );
});

PostItem.displayName = 'PostItem';

PostItem.propTypes = {
  post: PropTypes.object,
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: WHITE,
    paddingVertical: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  profilePhoto: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  nickname: {
    paddingHorizontal: 10,
    fontWeight: '600',
  },
  location: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  text: {
    paddingHorizontal: 10,
  },
});

export default PostItem;
