import { memo } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

const ListItem = memo(({ item }) => {
  console.log(item.id);
  return (
    <View style={{ paddingVertical: 10, paddingHorizontal: 20 }}>
      <Text style={{ fontSize: 20 }}>{item.task}</Text>
    </View>
  );
});

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
