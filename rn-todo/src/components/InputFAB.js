import {
  Pressable,
  StyleSheet,
  TextInput,
  View,
  useWindowDimensions,
  Keyboard,
  Platform,
} from 'react-native';
import { PRIMARY, WHITE } from '../colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useEffect, useRef, useState } from 'react';

const BOTTOM = 30;

const InputFAB = () => {
  const [text, setText] = useState('');
  const [isOpened, setIsOpened] = useState(false);
  const inputRef = useRef();
  const windowWidth = useWindowDimensions().width;
  const [keyboardHeight, setKeyboardHeight] = useState(BOTTOM);

  const open = () => {
    inputRef.current.focus();
    setIsOpened(true);
  };

  const close = () => {
    if (isOpened) {
      inputRef.current.blur();
      setText('');
      setIsOpened(false);
    }
  };

  const onPressButton = () => {
    isOpened ? close() : open();
  };

  useEffect(() => {
    if (Platform.OS === 'ios') {
      const show = Keyboard.addListener('keyboardWillShow', (e) => {
        setKeyboardHeight(e.endCoordinates.height + BOTTOM);
      });
      const hide = Keyboard.addListener('keyboardWillHide', () => {
        setKeyboardHeight(BOTTOM);
      });

      return () => {
        show.remove();
        hide.remove();
      };
    }
  }, []);

  return (
    <>
      <View
        style={[
          styles.position,
          styles.shape,
          { justifyContent: 'center', bottom: keyboardHeight },
          isOpened && { width: windowWidth - 20 },
        ]}
      >
        <TextInput
          ref={inputRef}
          onBlur={close}
          value={text}
          onChangeText={(text) => setText(text)}
          style={[styles.input]}
          autoCapitalize="none"
          autoCorrect={false}
          textContentType="none"
          keyboardAppearance="light"
          returnKeyType="done"
        />
      </View>

      <Pressable
        style={({ pressed }) => [
          styles.position,
          styles.shape,
          styles.button,
          pressed && { backgroundColor: PRIMARY.DARK },
          { bottom: keyboardHeight },
        ]}
        onPress={onPressButton}
      >
        <MaterialCommunityIcons name="plus" size={24} color={WHITE} />
      </Pressable>
    </>
  );
};

const styles = StyleSheet.create({
  position: {
    position: 'absolute',
    bottom: BOTTOM,
    right: 10,
  },
  shape: {
    height: 60,
    width: 60,
    borderRadius: 30,
    backgroundColor: PRIMARY.DEFAULT,
  },
  input: {
    color: WHITE,
    paddingLeft: 20,
    paddingRight: 70,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default InputFAB;
