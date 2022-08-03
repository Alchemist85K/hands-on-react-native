import { Platform, StyleSheet, View } from 'react-native';
import Swiper from 'react-native-swiper';
import { BlurView } from 'expo-blur';
import { BLACK, PRIMARY } from '../colors';
import FastImage from './FastImage';
import PropTypes from 'prop-types';

const ImageSwiper = ({ photos }) => {
  return (
    <Swiper
      loop={false}
      dot={<View style={styles.dot} />}
      activeDot={<View style={styles.activeDot} />}
    >
      {photos.map((photo, idx) => (
        <View key={idx} style={styles.photo}>
          <FastImage
            source={{ uri: photo.uri ?? photo }}
            style={StyleSheet.absoluteFill}
            resizeMode="cover"
          />
          <BlurView intensity={Platform.select({ ios: 10, android: 100 })}>
            <FastImage
              source={{ uri: photo.uri ?? photo }}
              style={styles.photo}
              resizeMode="contain"
            />
          </BlurView>
        </View>
      ))}
    </Swiper>
  );
};

ImageSwiper.propTypes = {
  photos: PropTypes.array.isRequired,
};

const styles = StyleSheet.create({
  photo: {
    width: '100%',
    height: '100%',
  },
  dot: {
    backgroundColor: BLACK,
    width: 8,
    height: 8,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 3,
  },
  activeDot: {
    backgroundColor: PRIMARY.DEFAULT,
    width: 8,
    height: 8,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 3,
  },
});

export default ImageSwiper;
