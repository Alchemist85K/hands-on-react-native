import { memo } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';

const ListItem = memo(({ item }) => {
  return (
    <View style={styles.container}>
      <Text>{item.task}</Text>
    </View>
  );
});
ListItem.displayName = 'ListItem';

ListItem.propTypes = {
  item: PropTypes.object.isRequired,
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderRadius: 8,
  },
});

export default ListItem;
