import { useNavigation } from '@react-navigation/native';
import {
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
  Pressable,
} from 'react-native';
import { MainRoutes } from '../navigations/routes';
import { GRAY, WHITE } from '../colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const SelectPhotosScreen = () => {
  const navigation = useNavigation();

  const width = useWindowDimensions().width;

  return (
    <View style={styles.container}>
      <Text style={styles.description}>
        이미지는 최대 4장까지 선택 가능합니다.
      </Text>

      <View style={{ width, height: width }}>
        <Pressable
          style={styles.photoButton}
          onPress={() =>
            navigation.navigate(MainRoutes.IMAGE_PICKER, { maxCount: 4 })
          }
        >
          <MaterialCommunityIcons
            name="image-plus"
            size={80}
            color={GRAY.DEFAULT}
          />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WHITE,
  },
  description: {
    color: GRAY.DARK,
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  photoButton: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: GRAY.LIGHT,
  },
});

export default SelectPhotosScreen;
