import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Pressable } from 'react-native';
import PropTypes from 'prop-types';

const HeaderRightButton = ({ tintColor }) => {
  return (
    <Pressable hitSlop={10}>
      <MaterialCommunityIcons name="cog" size={20} color={tintColor} />
    </Pressable>
  );
};

HeaderRightButton.propTypes = {
  tintColor: PropTypes.string,
};

export default HeaderRightButton;
