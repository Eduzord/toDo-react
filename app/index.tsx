import {useState} from "react";
import { Text, View, StyleSheet, TextInput, Pressable } from "react-native";
import { useFonts, BioRhyme_700Bold } from '@expo-google-fonts/biorhyme';



export default function Index() {
  const [fontsLoaded] = useFonts({
    BioRhyme_700Bold,
  });
  const [inputValue, setInputValue] = useState('');

  if (!fontsLoaded) {
    return null;
  }

   

  const adicionaNovoItem = () => {
    // Adicionar lógica para lidar com o novo item
    console.log("Novo Item:", inputValue);
    // Limpar o campo de input após a ação
    setInputValue('');
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>
          ToDo
        </Text>

        <View style={styles.form}>
          <TextInput
            style={styles.formInput}
            placeholder="Adicionar novo item..."
            onChangeText={text => setInputValue(text)}
            value={inputValue}
          />
        <Pressable style={styles.formButton} onPress={adicionaNovoItem}>
          <Text style={styles.formButtonText}> Novo Item</Text>
        </Pressable>
        </View>
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

    form: {
      justifyContent: "center",
      flex:1,
      flexDirection:"row",

    },
 formInput: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    marginRight: 10,
  },
  formButton: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  formButtonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  }

)
