import { FlatList, View } from 'react-native';
import usePostsByLocation from '../hooks/usePostsByLocation';
import FastImage from './FastImage';
import PropTypes from 'prop-types';

const LocationPostList = ({ location }) => {
  const { data, fetchNextPage } = usePostsByLocation(location);

  return (
    <FlatList
      horizontal={true}
      data={data}
      keyExtractor={(_, idx) => idx.toString()}
      renderItem={({ item }) => (
        <View style={{ paddingHorizontal: 5 }}>
          <FastImage
            source={{ uri: item }}
            style={{ width: 150, height: 150 }}
          />
        </View>
      )}
      onEndReached={fetchNextPage}
    />
  );
};

LocationPostList.propTypes = {
  location: PropTypes.string.isRequired,
};

export default LocationPostList;
