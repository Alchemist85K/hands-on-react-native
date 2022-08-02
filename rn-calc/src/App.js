import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.text}>Calc App</Text>
      <Text style={styles.text}>StyleSheet</Text>
      <Text style={styles.error}>Error</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 30,
    fontWeight: '700',
    color: 'green',
  },
  error: {
    fontSize: 30,
    fontWeight: '700',
    color: 'red',
  },
});

export default App;
