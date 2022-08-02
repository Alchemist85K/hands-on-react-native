import { Modal, Pressable, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { BLACK } from '../colors';

const DangerAlert = ({ visible, onClose }) => {
  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="fade"
      onRequestClose={onClose}
    >
      <Pressable style={styles.background} onPress={onClose} />
    </Modal>
  );
};

DangerAlert.propTypes = {
  visible: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  background: {
    ...StyleSheet.absoluteFill,
    backgroundColor: BLACK,
    opacity: 0.3,
  },
});

export default DangerAlert;
