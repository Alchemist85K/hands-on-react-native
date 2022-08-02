import { Pressable, StyleSheet } from 'react-native';
import { PRIMARY, WHITE } from '../colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const InputFAB = () => {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.button,
        pressed && { backgroundColor: PRIMARY.DARK },
      ]}
    >
      <MaterialCommunityIcons name="plus" size={24} color={WHITE} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    bottom: 30,
    right: 10,
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: PRIMARY.DEFAULT,
  },
});

export default InputFAB;
