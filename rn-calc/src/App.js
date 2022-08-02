import { StatusBar, StyleSheet, Text, View } from 'react-native';
import Button, { ButtonTypes } from './components/Button';
import { useState } from 'react';

const App = () => {
  const [result, setResult] = useState(0);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={'blue'} />

      <View style={styles.resultContainer}>
        <Text style={styles.text}>{result}</Text>
      </View>

      <View style={styles.buttonContainer}>
        <Text>Button</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  text: {
    fontSize: 60,
    fontWeight: '700',
    color: '#ffffff',
    paddingBottom: 30,
    paddingRight: 30,
  },
  resultContainer: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: '#A5B4FC',
  },
});

export default App;
