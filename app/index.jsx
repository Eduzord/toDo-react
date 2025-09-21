import { useState } from "react";
import { Text, View, StyleSheet, TextInput, Pressable, Alert, FlatList } from "react-native";
import { useFonts, BioRhyme_700Bold } from '@expo-google-fonts/biorhyme';
import { Form } from '../components/Form'
import { Lista } from '../components/Lista'



export default function Index() {
  const [fontsLoaded] = useFonts({
    BioRhyme_700Bold,
  });
  const [inputValue, setInputValue] = useState('');
  const [tasks, setTasks] = useState([]);

  const adicionaNovoItem = () => {
    if (inputValue === "") {
      Alert.alert("Atenção", "Por favor, preencha o campo com uma tarefa.");
      return;
    };

    const novaTarefa = {
      id: Date.now().toString(), // Um ID único
      text: inputValue,
      completed: false,
    };

    setTasks([...tasks, novaTarefa]);
    setInputValue('');
  };

  const alternarCompletar = (id) => {
    setTasks(
      tasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deletarTarefa = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };



  if (!fontsLoaded) {
    return null;
  }





  return (
    <View style={styles.container}>
      <View style={styles.todoList}>

        <Text style={styles.title}>
          ToDo
        </Text>


        <Form
          setarValor={setInputValue}
          valor={inputValue}
          adicionarNovoItem={adicionaNovoItem} />

        <Lista
          tasks={tasks}
          alternarCompletar={alternarCompletar}
          deletarTarefa={deletarTarefa}
        />      


      </View>

    </View>
  );
}

const styles = StyleSheet.create(
  {
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",

    },
    title: {
      fontSize: 24,
      color: '#F6F1D1',
      fontFamily: 'BioRhyme_700Bold'
    },
    todoList: {
      backgroundColor: '#0B2027',
      fontFamily: "Space Mono",
      padding: 16,
      minWidth: 400,
      minHeight: 300,
    },
  }

)
