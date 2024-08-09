import React, { useState } from 'react';
import { View, Text, Button, Alert, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Grid from './components/Grid';
import SudokuControls from './components/SudokuControls';
import { validateSudoku, solveSudoku } from './utils/sudokuUtils';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import LottieView from 'lottie-react-native';

export default function App() {
  const [grid, setGrid] = useState(Array(9).fill().map(() => Array(9).fill(null)));
  const [solvedGrid, setSolvedGrid] = useState(null);
  const [error, setError] = useState('');

  const handleValidate = () => {
    console.log('Validate button clicked'); // Debugging log
    const validationResult = validateSudoku(grid);
    console.log('Validation result:', validationResult); // Debugging log
    if (validationResult) {
      Alert.alert("Validation Result", validationResult);
    } else {
      Alert.alert("Validation Result", "Sudoku configuration is valid!");
    }
  };

  const handleSolve = () => {
    const validationError = validateSudoku(grid);
    if (validationError) {
      setError(validationError);
      return;
    }

    const solution = solveSudoku(grid);
    if (solution) {
      setSolvedGrid(solution);
      setError('');
    } else {
      Alert.alert('Error', 'The Sudoku puzzle is not solvable.');
    }
  };

  const handleReset = () => {
    setGrid(Array(9).fill().map(() => Array(9).fill(null)));
    setSolvedGrid(null);
    setError('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🔢Sudoku Puzzle🔢</Text>
      <ScrollView>
        <Grid grid={grid} setGrid={setGrid} />
        <View style={styles.controlsContainer}>
          <TouchableOpacity style={styles.button} onPress={handleValidate}>
            <View style={styles.buttonContent}>
              <MaterialCommunityIcons name="check-circle" size={24} color="#fff" />
              <Text style={styles.buttonText}>Validate</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleSolve}>
            <View style={styles.buttonContent}>
              <MaterialCommunityIcons name="puzzle" size={24} color="#fff" />
              <Text style={styles.buttonText}>Solve</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleReset}>
            <View style={styles.buttonContent}>
              <MaterialCommunityIcons name="restart" size={24} color="#fff" />
              <Text style={styles.buttonText}>Reset</Text>
            </View>
          </TouchableOpacity>
        </View>
        {error ? <Text style={styles.error}>{error}</Text> : null}
        {solvedGrid ? <Grid grid={solvedGrid} setGrid={setGrid} /> : null}
      </ScrollView>
      <LottieView style={styles.anim1} source={require('../project/assets/Loading.json')} autoPlay loop />

    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#D3D3D3',
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
    marginTop: 25,
  },
  error: {
    color: 'red',
    textAlign: 'center',
    marginTop: 10,
  },
  controlsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20, // added margin bottom
  },
  button: {
    padding: 10,
    width: 100,
    borderRadius: 15,
    backgroundColor: '#4CAF50',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5, // added horizontal margin
  },
  buttonContent: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#fff',
    marginLeft: 5,
  },
  anim1: {
    width: 300,
    height: 60,
  }
});