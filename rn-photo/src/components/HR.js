import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import { GRAY, WHITE } from '../colors';

const HR = ({ styles, text }) => {
  return (
    <View style={[defaultStyles.container, styles?.container]}>
      <View style={[defaultStyles.line, styles?.line]}></View>
      {!!text && <Text style={[defaultStyles.text, styles?.text]}>{text}</Text>}
    </View>
  );
};

HR.propTypes = {
  styles: PropTypes.object,
  text: PropTypes.string,
};

const defaultStyles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  line: {
    ...StyleSheet.absoluteFill,
    height: '50%',
    borderBottomWidth: 1,
    borderBottomColor: GRAY.DARK,
  },
  text: {
    backgroundColor: WHITE,
    paddingHorizontal: 10,
    color: GRAY.DARK,
  },
});

export default HR;
