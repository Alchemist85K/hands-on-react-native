import { Pressable, Text } from 'react-native';
import PropTypes from 'prop-types';

const Button = ({ title }) => {
  return (
    <Pressable
      style={({ pressed }) => [
        { backgroundColor: 'red', padding: 20 },
        pressed && { backgroundColor: 'blue' },
      ]}
      onPressIn={() => console.log('In')}
      onPressOut={() => console.log('Out')}
      onPress={() => console.log('Press')}
      onLongPress={() => console.log('Long')}
      delayLongPress={2000}
    >
      <Text style={{ color: 'white' }}>{title}</Text>
    </Pressable>
  );
};

Button.defaultProps = {
  title: 'button title',
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Button;
