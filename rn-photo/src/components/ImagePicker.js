import { Alert, FlatList, StyleSheet, View } from 'react-native';
import { useCallback, useEffect, useRef, useState } from 'react';
import * as MediaLibrary from 'expo-media-library';
import PropTypes from 'prop-types';
import PhotoItem from './PhotoItem';
import { useNavigation } from '@react-navigation/native';

const initialListInfo = { endCursor: '', hasNextPage: true };

export const getLocalUri = async (id) => {
  return (await MediaLibrary.getAssetInfoAsync(id)).localUri;
};

const ImagePicker = ({ togglePhoto, isSelectedPhoto }) => {
  const navigation = useNavigation();
  const [status, requestPermission] = MediaLibrary.usePermissions();

  const [photos, setPhotos] = useState([]);
  const listInfo = useRef(initialListInfo);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    (async () => {
      const { granted } = await requestPermission();
      if (!granted) {
        Alert.alert('사진 접근 권한', '사진 접근 권한이 필요합니다.', [
          {
            text: '확인',
            onPress: () => {
              navigation.canGoBack() && navigation.goBack();
            },
          },
        ]);
      }
    })();
  }, [navigation, requestPermission]);

  const getPhotos = useCallback(async () => {
    const options = {
      first: 30,
      sortBy: [MediaLibrary.SortBy.creationTime],
    };

    if (listInfo.current.endCursor) {
      options['after'] = listInfo.current.endCursor;
    }

    if (listInfo.current.hasNextPage) {
      const { assets, endCursor, hasNextPage } =
        await MediaLibrary.getAssetsAsync(options);
      setPhotos((prev) => (options.after ? [...prev, ...assets] : assets));
      listInfo.current = { endCursor, hasNextPage };
    }
  }, []);

  const onRefresh = async () => {
    setRefreshing(true);
    listInfo.current = initialListInfo;
    await getPhotos();
    setRefreshing(false);
  };

  useEffect(() => {
    if (status?.granted) {
      getPhotos();
    }
  }, [getPhotos, status?.granted]);

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        data={photos}
        renderItem={({ item }) => (
          <PhotoItem
            item={item}
            togglePhoto={togglePhoto}
            isSelected={isSelectedPhoto(item)}
          />
        )}
        numColumns={3}
        onEndReached={getPhotos}
        onEndReachedThreshold={0.4}
        onRefresh={onRefresh}
        refreshing={refreshing}
      />
    </View>
  );
};

ImagePicker.propTypes = {
  togglePhoto: PropTypes.func.isRequired,
  isSelectedPhoto: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  list: {
    width: '100%',
  },
});

export default ImagePicker;
