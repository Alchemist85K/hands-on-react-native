import { StyleSheet, Text, TextInput, View } from 'react-native';
import PropTypes from 'prop-types';
import { BLACK, GRAY, PRIMARY } from '../colors';
import { useState } from 'react';

export const KeyboardTypes = {
  DEFAULT: 'default',
  EMAIL: 'email-address',
};

export const ReturnKeyTypes = {
  DONE: 'done',
  NEXT: 'next',
};

const Input = ({ title, placeholder, value, ...props }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={styles.container}>
      <Text
        style={[
          styles.title,
          value && styles.hasValueTitle,
          isFocused && styles.focusedTitle,
        ]}
      >
        {title}
      </Text>
      <TextInput
        {...props}
        value={value}
        style={[
          styles.input,
          value && styles.hasValueInput,
          isFocused && styles.focusedInput,
        ]}
        placeholder={placeholder ?? title}
        placeholderTextColor={GRAY.DEFAULT}
        autoCapitalize="none"
        autoCorrect={false}
        textContentType="none"
        keyboardAppearance="light"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </View>
  );
};

Input.propTypes = {
  title: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  title: {
    marginBottom: 4,
    color: GRAY.DEFAULT,
  },
  hasValueTitle: {
    color: BLACK,
  },
  focusedTitle: {
    fontWeight: '600',
    color: PRIMARY.DEFAULT,
  },
  input: {
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    height: 42,
    borderColor: GRAY.DEFAULT,
  },
  hasValueInput: {
    borderColor: BLACK,
    color: BLACK,
  },
  focusedInput: {
    borderWidth: 2,
    borderColor: PRIMARY.DEFAULT,
    color: PRIMARY.DEFAULT,
  },
});

export default Input;
