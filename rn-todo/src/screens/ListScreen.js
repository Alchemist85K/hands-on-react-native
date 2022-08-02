import { StyleSheet, Text, View } from 'react-native';

const ListScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30 }}>List Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ListScreen;
