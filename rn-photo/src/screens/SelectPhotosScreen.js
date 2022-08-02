import { useNavigation } from '@react-navigation/native';
import { Button, StyleSheet, Text, View } from 'react-native';
import { MainRoutes } from '../navigations/routes';

const SelectPhotosScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text>Select Photos</Text>
      <Button
        title="Tab"
        onPress={() => navigation.navigate(MainRoutes.CONTENT_TAB)}
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
});

export default SelectPhotosScreen;
