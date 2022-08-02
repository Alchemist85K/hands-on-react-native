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
  Platform,
} from 'react-native';
import HeaderRight from '../components/HeaderRight';
import * as MediaLibrary from 'expo-media-library';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { PRIMARY } from '../colors';
import { BlurView } from 'expo-blur';

const initialListInfo = { endCursor: '', hasNextPage: true };

const ImagePickerScreen = () => {
  const navigation = useNavigation();
  const [status, requestPermission] = MediaLibrary.usePermissions();

  const width = useWindowDimensions().width / 3;
  const [photos, setPhotos] = useState([]);
  const listInfo = useRef(initialListInfo);
  const [refreshing, setRefreshing] = useState(false);
  const [selectedPhotos, setSelectedPhotos] = useState([]);

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

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => <HeaderRight onPress={() => {}} />,
    });
  }, [navigation]);

  const isSelectedPhoto = (photo) => {
    return selectedPhotos.findIndex((item) => item.id === photo.id) > -1;
  };

  const togglePhoto = (photo) => {
    const isSelected = isSelectedPhoto(photo);
    setSelectedPhotos((prev) =>
      isSelected
        ? prev.filter((item) => item.id !== photo.id)
        : [...prev, photo]
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        data={photos}
        renderItem={({ item }) => {
          const isSelected = isSelectedPhoto(item);
          return (
            <Pressable
              style={{ width, height: width }}
              onPress={() => togglePhoto(item)}
            >
              <Image source={{ uri: item.uri }} style={styles.photo} />
              {isSelected && (
                <BlurView
                  style={[StyleSheet.absoluteFill, styles.checkIcon]}
                  intensity={Platform.select({ ios: 10, android: 50 })}
                >
                  <MaterialCommunityIcons
                    name="check-circle"
                    size={40}
                    color={PRIMARY.DEFAULT}
                  />
                </BlurView>
              )}
            </Pressable>
          );
        }}
        numColumns={3}
        onEndReached={getPhotos}
        onEndReachedThreshold={0.4}
        onRefresh={onRefresh}
        refreshing={refreshing}
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
  checkIcon: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ImagePickerScreen;
