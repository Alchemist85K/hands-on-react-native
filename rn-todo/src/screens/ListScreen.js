import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import EmptyList from '../components/EmptyList';
import List from '../components/List';
import InputFAB from '../components/InputFAB';
import { useState } from 'react';
import { nanoid } from 'nanoid';

const ListScreen = () => {
  const { bottom } = useSafeAreaInsets();
  const [todos, setTodos] = useState([
    { id: '1', task: 'task 1', isDone: false },
    { id: '2', task: 'task 2', isDone: false },
    { id: '3', task: 'task 3', isDone: false },
    { id: '4', task: 'task 4', isDone: false },
    { id: '5', task: 'task 5', isDone: false },
    { id: '6', task: 'task 6', isDone: false },
    { id: '7', task: 'task 7', isDone: false },
    { id: '8', task: 'task 8', isDone: false },
    { id: '9', task: 'task 9', isDone: false },
    { id: '10', task: 'task 10', isDone: false },
    { id: '11', task: 'task 11', isDone: false },
  ]);

  const onInsert = (task) => {
    const id = nanoid();
    setTodos((prev) => [{ id, task, isDone: false }, ...prev]);
  };

  return (
    <View style={{ flex: 1, paddingBottom: bottom }}>
      {todos.length ? <List data={todos} /> : <EmptyList />}
      <InputFAB onInsert={onInsert} />
    </View>
  );
};

export default ListScreen;
