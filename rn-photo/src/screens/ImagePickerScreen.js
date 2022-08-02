import { useNavigation } from '@react-navigation/native';
import { useLayoutEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HeaderRight from '../components/HeaderRight';

const ImagePickerScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => <HeaderRight onPress={() => {}} />,
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text>Image Picker</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ImagePickerScreen;
