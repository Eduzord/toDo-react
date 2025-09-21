import React from 'react';
import { View, Text, StyleSheet, FlatList, Pressable } from 'react-native';
import BotaoConclui from '../BotaoConclui';
import BotaoDeleta from '../BotaoDeleta';

export function Lista({ tasks, alternarCompletar, deletarTarefa }) {
  const renderItem = ({ item }) => (
    <View style={[styles.taskItem, item.completed && styles.taskCompleted]}>
      <Text style={styles.taskText}>{item.text}</Text>
      <View style={styles.taskButtons}>
        <BotaoConclui onPress={() => alternarCompletar(item.id)} />
        <BotaoDeleta onPress={() => deletarTarefa(item.id)} />
      </View>
    </View>
  );

  return (
    <View style={styles.listContainer}>
      <FlatList
        data={tasks}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
    taskItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        marginHorizontal: 20,
        color: "#F6F1D1",
        backgroundColor: '#ffffff10'
      },
      taskCompleted: {
        textDecorationLine:'line-through',
      },
      taskText: {
        fontSize: 18,
        flexShrink: 1,
        color: '#fff',
      },
      taskButtons: {
        flexDirection: 'row',
      },
    }
  );