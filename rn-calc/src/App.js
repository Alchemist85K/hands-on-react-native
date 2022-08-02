import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import Button, { ButtonTypes } from './components/Button';
import { useState } from 'react';

const App = () => {
  const [result, setResult] = useState(0);

  const onPressNumber = (number) => {
    setResult((prev) => prev * 10 + number);
  };

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
          <View style={styles.number}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
              <Button
                key={num}
                title={num.toString()}
                onPress={() => onPressNumber(num)}
                buttonStyle={{ width, height: width, marginBottom: 1 }}
              />
            ))}
          </View>
          <View style={styles.bottom}>
            <Button
              title="0"
              onPress={() => onPressNumber(0)}
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
            buttonStyle={{ width, height: width * 2 + 1, marginTop: 1 }}
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
    backgroundColor: '#000000',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  leftPad: {
    width: '75%',
  },
  number: {
    flexWrap: 'wrap-reverse',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  bottom: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});

export default App;
