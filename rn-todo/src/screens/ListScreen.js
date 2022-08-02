import { FlatList, StyleSheet, View } from 'react-native';
import ListItem from '../components/ListItem';

const ListScreen = () => {
  const todos = [
    { id: 1, task: 'React Native', isDone: false },
    { id: 2, task: 'FlatList', isDone: false },
    { id: 3, task: 'React Navigation', isDone: true },
    { id: 4, task: 'TODO App', isDone: false },
    { id: 5, task: 'React.memo', isDone: true },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={todos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <ListItem item={item} />}
        windowSize={5}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ListScreen;
