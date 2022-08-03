import { FlatList, View } from 'react-native';
import usePostsByLocation from '../hooks/usePostsByLocation';
import FastImage from './FastImage';
import PropTypes from 'prop-types';
import { memo } from 'react';

const LocationPostItem = memo(({ uri }) => {
  return (
    <View style={{ paddingHorizontal: 5 }}>
      <FastImage source={{ uri }} style={{ width: 150, height: 150 }} />
    </View>
  );
});
LocationPostItem.displayName = 'LocationPostItem';
LocationPostItem.propTypes = {
  uri: PropTypes.string.isRequired,
};

const LocationPostList = ({ location }) => {
  const { data, fetchNextPage } = usePostsByLocation(location);

  return (
    <FlatList
      horizontal={true}
      data={data}
      keyExtractor={(_, idx) => idx.toString()}
      renderItem={({ item }) => <LocationPostItem uri={item} />}
      onEndReached={fetchNextPage}
    />
  );
};

LocationPostList.propTypes = {
  location: PropTypes.string.isRequired,
};

export default LocationPostList;
