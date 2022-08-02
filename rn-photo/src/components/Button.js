import {
  ActivityIndicator,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import PropTypes from 'prop-types';
import { WHITE, GRAY, PRIMARY } from '../colors';

const Button = ({ styles, title, onPress, disabled, isLoading }) => {
  return (
    <View style={[defaultStyles.container, styles?.container]}>
      <Pressable
        onPress={() => onPress()}
        disabled={disabled || isLoading}
        style={({ pressed }) => [
          defaultStyles.button,
          {
            backgroundColor: (() => {
              switch (true) {
                case disabled || isLoading:
                  return PRIMARY.LIGHT;
                case pressed:
                  return PRIMARY.DARK;
                default:
                  return PRIMARY.DEFAULT;
              }
            })(),
          },
          styles?.button,
        ]}
      >
        {isLoading ? (
          <ActivityIndicator size="small" color={GRAY.DARK} />
        ) : (
          <Text style={[defaultStyles.title, styles?.title]}>{title}</Text>
        )}
      </Pressable>
    </View>
  );
};

Button.propTypes = {
  styles: PropTypes.object,
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  isLoading: PropTypes.bool,
};

const defaultStyles = StyleSheet.create({
  container: {
    width: '100%',
  },
  button: {
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
