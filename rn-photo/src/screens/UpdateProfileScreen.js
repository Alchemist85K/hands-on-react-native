import { useNavigation } from '@react-navigation/native';
import { Button, Pressable, StyleSheet, TextInput, View } from 'react-native';
import { GRAY, WHITE } from '../colors';
import FastImage from '../components/FastImage';
import { useUserState } from '../contexts/UserContext';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import SafeInputView from '../components/SafeInputView';
import { useLayoutEffect } from 'react';
import HeaderRight from '../components/HeaderRight';

const UpdateProfileScreen = () => {
  const navigation = useNavigation();

  const [user] = useUserState();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => <HeaderRight onPress={() => console.log('right')} />,
    });
  }, [navigation]);

  return (
    <SafeInputView>
      <View style={styles.container}>
        <Button title="back" onPress={() => navigation.goBack()} />
        <View
          style={[
            styles.photo,
            user.photoURL || { backgroundColor: GRAY.DEFAULT },
          ]}
        >
          <FastImage source={{ uri: user.photoURL }} style={styles.photo} />
          <Pressable style={styles.imageButton} onPress={() => {}}>
            <MaterialCommunityIcons name="image" size={20} color={WHITE} />
          </Pressable>
        </View>

        <View>
          <TextInput
            value={user.displayName}
            style={styles.input}
            placeholder="Nickname"
            textAlign="center"
            maxLength={10}
            returnKeyType="done"
            autoCapitalize="none"
            autoCorrect={false}
            textContentType="none"
          />
        </View>
      </View>
    </SafeInputView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 40,
  },
  photo: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  imageButton: {
    position: 'absolute',
    bottom: 0,
    right: 20,
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: GRAY.DARK,
  },
  input: {
    marginTop: 20,
    paddingHorizontal: 10,
    paddingVertical: 8,
    width: 200,
    fontSize: 20,
    borderBottomWidth: 0.5,
    borderBottomColor: GRAY.DEFAULT,
  },
});

export default UpdateProfileScreen;
