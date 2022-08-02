import { FlatList, StyleSheet, View } from 'react-native';
import ListItem from '../components/ListItem';
import { GRAY } from '../colors';

const Separator = () => {
  return <View style={styles.separator}></View>;
};

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
        ItemSeparatorComponent={Separator}
        ListHeaderComponent={() => <View style={{ height: 10 }}></View>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  separator: {
    height: 1,
    backgroundColor: GRAY.LIGHT,
    marginVertical: 10,
    marginHorizontal: 10,
  },
});

export default ListScreen;
