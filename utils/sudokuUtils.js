const isValid = (grid, row, col, num) => {
  for (let x = 0; x < 9; x++) {
    if (grid[row][x] === num && x !== col) {
      return false;
    }
  }

  for (let x = 0; x < 9; x++) {
    if (grid[x][col] === num && x !== row) {
      return false;
    }
  }

  const startRow = row - (row % 3);
  const startCol = col - (col % 3);

  for (let r = startRow; r < startRow + 3; r++) {
    for (let d = startCol; d < startCol + 3; d++) {
      if (grid[r][d] === num && (r !== row || d !== col)) {
        return false;
      }
    }
  }

  return true;
};

const solveSudokuUtil = (grid) => {
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      if (grid[row][col] === null) {
        for (let num = 1; num <= 9; num++) {
          if (isValid(grid, row, col, num)) {
            grid[row][col] = num;
            if (solveSudokuUtil(grid)) {
              return grid;
            }
            grid[row][col] = null;
          }
        }
        return null;
      }
    }
  }
  return grid;
};

export const validateSudoku = (grid) => {
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      const value = grid[row][col];
      if (value !== null && !isValid(grid, row, col, value)) {
        alert(`Invalid Sudoku configuration! Row ${row + 1}, col ${col + 1} with value ${value}`);
        return;
      }
    }
  }
  alert('Sudoku is valid!');
};

export const solveSudoku = (grid) => {
  const gridCopy = grid.map(row => row.slice());
  return solveSudokuUtil(gridCopy);
};