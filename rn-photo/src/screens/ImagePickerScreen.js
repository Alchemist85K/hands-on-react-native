import { useNavigation } from '@react-navigation/native';
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useState,
  useRef,
} from 'react';
import {
  Alert,
  StyleSheet,
  View,
  FlatList,
  Image,
  Pressable,
  useWindowDimensions,
} from 'react-native';
import HeaderRight from '../components/HeaderRight';
import * as MediaLibrary from 'expo-media-library';

const ImagePickerScreen = () => {
  const navigation = useNavigation();
  const [status, requestPermission] = MediaLibrary.usePermissions();

  const width = useWindowDimensions().width / 3;
  const [photos, setPhotos] = useState([]);
  const listInfo = useRef({ endCursor: '', hasNextPage: true });

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
      setPhotos((prev) => [...prev, ...assets]);
      listInfo.current = { endCursor, hasNextPage };
    }
  }, []);

  console.log(photos.length);

  useEffect(() => {
    if (status?.granted) {
      getPhotos();
    }
  }, [getPhotos, status?.granted]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => <HeaderRight onPress={() => {}} />,
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        data={photos}
        renderItem={({ item }) => (
          <Pressable style={{ width, height: width }}>
            <Image source={{ uri: item.uri }} style={styles.photo} />
          </Pressable>
        )}
        numColumns={3}
        onEndReached={getPhotos}
        onEndReachedThreshold={0.4}
      />
    </View>
  );
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
  photo: {
    width: '100%',
    height: '100%',
  },
});

export default ImagePickerScreen;
