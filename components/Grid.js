import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const Grid = ({ grid, setGrid }) => {
  const handleChange = (row, col, value) => {
    const newGrid = grid.map((r, i) =>
      i === row ? r.map((cell, j) => (j === col ? value : cell)) : r
    );
    setGrid(newGrid);
  };

  return (
    <View style={styles.grid}>
      {grid.map((row, rowIndex) => (
        <View key={rowIndex} style={styles.row}>
          {row.map((cell, colIndex) => (
            <TextInput
              key={colIndex}
              style={styles.cell}
              keyboardType="number-pad"
              maxLength={1}
              value={cell !== null ? cell.toString() : ''}
              onChangeText={(text) => handleChange(rowIndex, colIndex, text ? parseInt(text) : null)}
            />
          ))}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  grid: {
    borderWidth: 1,
    borderColor: '#000',
  },
  row: {
    flexDirection: 'row',
  },
  cell: {
    width: 30,
    height: 30,
    borderWidth: 1,
    borderColor: '#000',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '500'
  },
});

export default Grid;
