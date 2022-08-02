/* eslint-disable react/prop-types */
import { Button, StyleSheet, Text, View } from 'react-native';

const ListScreen = ({ navigation, route }) => {
  console.log('rendering ListScreen: ', route.params);

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30 }}>List Screen</Text>
      <Button title="push" onPress={() => navigation.push('List')} />
      <Button
        title="navigate"
        onPress={() => navigation.navigate('List', { ts: Date.now() })}
      />
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
