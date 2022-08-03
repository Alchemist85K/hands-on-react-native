import { StyleSheet, View } from 'react-native';
import MapView from 'react-native-maps';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import LocationSearch from '../components/LocationSearch';

const MapScreen = () => {
  const { top } = useSafeAreaInsets();

  return (
    <View style={styles.container}>
      <MapView style={styles.map}></MapView>

      <LocationSearch
        styles={{
          container: {
            ...styles.location,
            paddingTop: top,
          },
        }}
        iconVisible={false}
        onPress={(data) => {
          console.log(data);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  map: {
    width: '100%',
    height: '100%',
  },
  location: {
    position: 'absolute',
    width: '90%',
    borderBottomWidth: 0,
  },
});

export default MapScreen;
