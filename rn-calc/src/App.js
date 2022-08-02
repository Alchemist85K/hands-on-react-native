import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Button, { ButtonTypes } from './components/Button';

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.text}>Calc App</Text>
      <Button
        title="1"
        onPress={() => console.log(1)}
        buttonStyle={{ width: 100, height: 100 }}
      />
      <Button
        title="0"
        onPress={() => console.log(0)}
        buttonStyle={{ width: 200, height: 100 }}
        buttonType={ButtonTypes.NUMBER}
      />
      <Button
        title="+"
        onPress={() => console.log('+')}
        buttonStyle={{ width: 100, height: 200 }}
        buttonType={ButtonTypes.OPERATOR}
      />
      <Button
        title="-"
        onPress={() => console.log('-')}
        buttonStyle={{ width: 100, height: 100 }}
        buttonType={ButtonTypes.OPERATOR}
      />
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
    color: 'red',
  },
});

export default App;
