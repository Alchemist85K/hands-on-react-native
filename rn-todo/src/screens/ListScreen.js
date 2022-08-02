import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import EmptyList from '../components/EmptyList';
import List from '../components/List';
import InputFAB from '../components/InputFAB';
import { useState } from 'react';
import { nanoid } from 'nanoid';

const ListScreen = () => {
  const { bottom } = useSafeAreaInsets();
  const [todos, setTodos] = useState([]);
  const [isBottom, setIsBottom] = useState(false);

  const onInsert = (task) => {
    const id = nanoid();
    setTodos((prev) => [{ id, task, isDone: false }, ...prev]);
  };

  return (
    <View style={{ flex: 1, paddingBottom: bottom }}>
      {todos.length ? (
        <List data={todos} setIsBottom={setIsBottom} />
      ) : (
        <EmptyList />
      )}
      <InputFAB onInsert={onInsert} isBottom={isBottom} />
    </View>
  );
};

export default ListScreen;
