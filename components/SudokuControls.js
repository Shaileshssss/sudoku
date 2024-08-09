import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const SudokuControls = ({ onValidate, onSolve }) => {
  return (
    <View style={styles.controls}>
      <TouchableOpacity style={styles.button} onPress={onValidate}>
        <FontAwesome name="check" size={24} color="#fff" style={styles.icon} />
        <Text style={styles.buttonText}>Validate</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={onSolve}>
        <FontAwesome name="bolt" size={24} color="#fff" style={styles.icon} />
        <Text style={styles.buttonText}>Solve</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  controls: {
    marginVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  button: {
    padding: 10,
    width: 150,
    borderRadius: 15,
    backgroundColor: '#4CAF50',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
    textAlign: 'center',
    marginLeft: 10,
  },
  icon: {
    marginRight: 10,
  },
});

export default SudokuControls;