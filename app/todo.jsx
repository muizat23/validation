import React, { useState } from 'react';
import { FlatList,Image,StyleSheet,Text,TextInput,TouchableOpacity,View} from 'react-native';

const TRASH ='https://cdn-icons-png.freepik.com/256/9915/9915683.png';

export default function TodoListApp() {
  const [task, setTask] = useState('');
  const [todoList, setTodoList] = useState([
    { id: 1, name: 'busy',        completed: false, trash: TRASH },
    { id: 2, name: 'Learn React', completed: false, trash: TRASH },
  ]);

  /* ---------- handlers ---------- */
  const handleAddTask = () => {
    if (!task.trim()) return;
    setTodoList(prev => [
      ...prev,
      { id: Date.now(), name: task.trim(), completed: false, trash: TRASH },
    ]);
    setTask('');
  };

  const handleDeleteTask = id =>
    setTodoList(prev => prev.filter(t => t.id !== id));

  const toggleComplete = id =>
    setTodoList(prev =>
      prev.map(t =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );

  /* ---------- render ---------- */
  return (
    <View style={styles.page}>
      {/* header / add form */}
      <View style={styles.header}>
        <Text style={styles.title}>To-Do List App</Text>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Add a new task"
            placeholderTextColor="black"
            value={task}
            onChangeText={setTask}
            style={styles.input}
          />
          <TouchableOpacity onPress={handleAddTask} style={styles.addButton}>
            <Text style={{ color: 'white' }}>Add</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* list */}
      <FlatList
        data={todoList}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            {/* left side: checkbox + text */}
            <TouchableOpacity
              onPress={() => toggleComplete(item.id)}
              style={styles.list}
            >
              <View
                style={[
                  styles.checkbox,
                  item.completed && styles.checkedBox,
                ]}
              >
                {item.completed && <Text style={styles.tick}>✓</Text>}
              </View>
              <Text
                style={[
                  styles.taskText,
                  item.completed && styles.taskCompleted,
                ]}
              >
                {item.name}
              </Text>
            </TouchableOpacity>

            {/* right side: delete */}
            <TouchableOpacity onPress={() => handleDeleteTask(item.id)}>
              <Image source={{ uri: item.trash }} style={styles.icon} />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

/* ---------- styles ---------- */
const styles = StyleSheet.create({
  page: {
    flex: 1,
    paddingTop: 100,
    backgroundColor: '#f9f9f9',
  },
  header: {
    backgroundColor: 'gray',
    height: 150,
    borderRadius: 10,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 30,
    color: 'white',
    textAlign: 'center',
    marginTop: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  input: {
    backgroundColor: 'white',
    flex: 1,
    height: 40,
    borderRadius: 4,
    paddingLeft: 10,
    marginRight: 10,
  },
  addButton: {
    backgroundColor: '#EC5800',
    height: 40,
    width: 75,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  /* list rows */
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    borderBottomWidth: 0.5,
    borderBottomColor: '#ccc',
  },
  list: { flexDirection: 'row', alignItems: 'center' },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: '#EC5800',
    borderRadius: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkedBox: { backgroundColor: '#EC5800' },
  tick: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
  taskText: { marginLeft: 15, fontSize: 16 },
  taskCompleted: { textDecorationLine: 'line-through', color: 'gray' },
  icon: { height: 20, width: 20 },
});