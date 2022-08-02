import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import Button, { ButtonTypes } from './components/Button';
import { useState } from 'react';

const App = () => {
  const [result, setResult] = useState(0);

  const windowWidth = useWindowDimensions().width;
  const width = (windowWidth - 5) / 4;

  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <View style={styles.resultContainer}>
        <Text style={styles.text}>{result}</Text>
      </View>

      <View style={styles.buttonContainer}>
        <View style={styles.leftPad}>
          <View style={styles.number}>{/* 숫자 버튼 */}</View>
          <View style={styles.bottom}>
            <Button
              title="0"
              onPress={() => {}}
              buttonType={ButtonTypes.NUMBER}
              buttonStyle={{
                width: width * 2,
                height: width,
                marginTop: 1,
              }}
            />
            <Button
              title="="
              onPress={() => {}}
              buttonType={ButtonTypes.OPERATOR}
              buttonStyle={{ width, height: width, marginTop: 1 }}
            />
          </View>
        </View>

        <View>
          <Button
            title="C"
            onPress={() => {}}
            buttonType={ButtonTypes.OPERATOR}
            buttonStyle={{ width, height: width, marginTop: 1 }}
          />
          <Button
            title="-"
            onPress={() => {}}
            buttonType={ButtonTypes.OPERATOR}
            buttonStyle={{ width, height: width, marginTop: 1 }}
          />
          <Button
            title="+"
            onPress={() => {}}
            buttonType={ButtonTypes.OPERATOR}
            buttonStyle={{ width, height: width * 2, marginTop: 1 }}
          />
        </View>
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
    backgroundColor: '#000000',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  buttonContainer: {
    backgroundColor: '#A5B4FC',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  leftPad: {
    width: '75%',
  },
  number: {},
  bottom: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});

export default App;
