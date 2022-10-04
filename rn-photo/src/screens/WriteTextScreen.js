import { useNavigation, useRoute } from '@react-navigation/native';
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  useWindowDimensions,
  View,
} from 'react-native';
import { GRAY, WHITE } from '../colors';
import { useCallback, useEffect, useLayoutEffect, useState } from 'react';
import HeaderRight from '../components/HeaderRight';
import FastImage from '../components/FastImage';
import LocationSearch from '../components/LocationSearch';
import { uploadPhoto } from '../api/storage';
import { useUserState } from '../contexts/UserContext';

const MAX_TEXT_LENGTH = 50;

const WriteTextScreen = () => {
  const navigation = useNavigation();
  const { params } = useRoute();
  const width = useWindowDimensions().width / 4;
  const [user] = useUserState();

  const [photoUris, setPhotoUris] = useState([]);
  const [text, setText] = useState('');
  const [location, setLocation] = useState('');

  const [disabled, setDisabled] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (params) {
      setPhotoUris(params.photoUris ?? []);
    }
  }, [params]);

  useEffect(() => {
    setDisabled(isLoading || !text || !location);
  }, [isLoading, text, location]);

  const onSubmit = useCallback(async () => {
    setIsLoading(true);
    try {
      const photos = await Promise.all(
        photoUris.map((uri) => uploadPhoto({ uri, uid: user.uid }))
      );
      console.log(photos);
    } catch (e) {
      Alert.alert('글 작성 실패', e.message);
    }
    setIsLoading(false);
  }, [photoUris, user.uid]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => <HeaderRight disabled={disabled} onPress={onSubmit} />,
    });
  }, [navigation, disabled, onSubmit]);

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row' }}>
        {photoUris.map((uri, idx) => (
          <FastImage
            key={idx}
            source={{ uri }}
            style={{ width, height: width }}
          />
        ))}
      </View>

      <LocationSearch
        onPress={({ description }) => setLocation(description)}
        isLoading={isLoading}
        isSelected={!!location}
      />

      <View>
        <TextInput
          value={text}
          onChangeText={(text) => setText(text)}
          maxLength={MAX_TEXT_LENGTH}
          placeholder="사진의 설명을 적어주세요."
          style={styles.input}
          returnKeyType="done"
          autoCapitalize="none"
          autoCorrect={false}
          textContentType="none"
          multiline={true}
          blurOnSubmit={true}
          editable={!isLoading}
        />
        <Text style={styles.inputLength}>
          {text.length} / {MAX_TEXT_LENGTH}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WHITE,
  },
  input: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  inputLength: {
    alignSelf: 'flex-end',
    paddingHorizontal: 20,
    color: GRAY.DARK,
    fontSize: 12,
  },
});

export default WriteTextScreen;
