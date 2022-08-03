import { useNavigation, useRoute } from '@react-navigation/native';
import {
  StyleSheet,
  Text,
  TextInput,
  useWindowDimensions,
  View,
} from 'react-native';
import { GRAY, WHITE, PRIMARY } from '../colors';
import { useCallback, useEffect, useLayoutEffect, useState } from 'react';
import HeaderRight from '../components/HeaderRight';
import FastImage from '../components/FastImage';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { MAP_KEY } from '../../env';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const MAX_TEXT_LENGTH = 50;

const WriteTextScreen = () => {
  const navigation = useNavigation();
  const { params } = useRoute();
  const width = useWindowDimensions().width / 4;

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
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

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

      <View style={styles.location}>
        <GooglePlacesAutocomplete
          placeholder="Location"
          styles={{
            container: { flex: 0 },
            textInput: { paddingLeft: 30 },
          }}
          onPress={(data) => setLocation(data.description)}
          onFail={(e) => {
            // eslint-disable-next-line no-console
            console.log('GooglePlacesAutocomplete onFail : ', e);
          }}
          query={{ key: MAP_KEY, language: 'ko' }}
          debounce={400}
          enablePoweredByContainer={false}
          textInputProps={{ editable: !isLoading }}
        />

        <View style={styles.locationIcon}>
          <MaterialCommunityIcons
            name="map-marker"
            size={20}
            color={location ? PRIMARY.DEFAULT : GRAY.LIGHT}
          />
        </View>
      </View>

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
  location: {
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderBottomWidth: 0.5,
    borderBottomColor: GRAY.LIGHT,
  },
  locationIcon: {
    position: 'absolute',
    left: 20,
    top: 16,
  },
});

export default WriteTextScreen;
