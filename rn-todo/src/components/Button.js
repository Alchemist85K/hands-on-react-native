import { ActivityIndicator, Pressable, StyleSheet, Text } from 'react-native';
import PropTypes from 'prop-types';
import { DANGER, GRAY, PRIMARY, WHITE } from '../colors';

export const ButtonTypes = {
  PRIMARY: 'PRIMARY',
  DANGER: 'DANGER',
};

const Button = ({ title, onPress, disabled, isLoading, buttonType }) => {
  const colors = { PRIMARY, DANGER };

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.container,
        { backgroundColor: colors[buttonType].DEFAULT },
        pressed && { backgroundColor: colors[buttonType].DARK },
        disabled && { backgroundColor: colors[buttonType].LIGHT, opacity: 0.6 },
      ]}
      disabled={disabled}
    >
      {isLoading ? (
        <ActivityIndicator size="small" color={GRAY.DEFAULT} />
      ) : (
        <Text style={styles.title}>{title}</Text>
      )}
    </Pressable>
  );
};

Button.defaultProps = {
  buttonType: ButtonTypes.PRIMARY,
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  buttonType: PropTypes.oneOf(Object.values(ButtonTypes)),
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    paddingVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: WHITE,
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 20,
  },
});

export default Button;
