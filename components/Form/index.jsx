import { View, TextInput, Pressable, StyleSheet, Text } from 'react-native';

export function Form({setarValor, valor, adicionarNovoItem}) {
 return (
    <View style={styles.form}>
    <TextInput
      style={styles.formInput}
      placeholder="Adicionar novo item..."
      onChangeText={setarValor}
      value={valor}
    />
    <Pressable style={styles.formButton} onPress={adicionarNovoItem}>
      <Text style={styles.formButtonText}> Novo Item</Text>
    </Pressable>


  </View>
  );

}

const styles = StyleSheet.create(
  {

    form: {
      justifyContent: "center",
      flex: 1,
      flexDirection: "row",

    },
    formInput: {
      flex: 1,
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      borderRadius: 5,
      paddingLeft: 10,
      marginRight: 10,
      backgroundColor: '#F6F1D1',
    },
    formButton: {
      backgroundColor: '#F6F1D1',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
      padding: 12,
      height: 40,
    },
    formButtonText: {
      
      fontSize: 16,
      textAlign: 'center',
    },
  })