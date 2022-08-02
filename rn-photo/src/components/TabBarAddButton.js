import { Pressable, StyleSheet, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { PRIMARY, WHITE } from '../colors';
import { MainRoutes } from '../navigations/routes';

const TabBarAddButton = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate(MainRoutes.SELECT_PHOTOS)}
      >
        <MaterialCommunityIcons name="plus" size={25} color={WHITE} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: PRIMARY.DEFAULT,
    borderRadius: 999,
    padding: 4,
  },
});

export default TabBarAddButton;
