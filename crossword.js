function crosswordSolver(emptyPuzzle, words){
    // Check inputs formats of emptyPuzzle and words.
      if (typeof emptyPuzzle !== "string" || !Array.isArray(words) || words.some((word) => typeof word !== "string")) {
        console.log("Error");
        return "Error";
      }
     
    // Check the content of emptyPuzzle.
      if (!/^[.\n012]+$/.test(emptyPuzzle)) {
        console.log("Error");
        return "Error";
      }
    // Check doublon words.
        for (var i = 0; i < words.length; i++) 
        {
            if (words.indexOf(words[i]) !== words.lastIndexOf(words[i])) { 
              console.log("Error");
              return "Error";
            } 
        } 
     
    // Remove extra spaces and split the puzzle into rows = [ '2001', '0..0', '1000', '0..0' ]
      const puzzleByRows = emptyPuzzle.trim().split("\n");
    // Split each row and convert string to numbers = [ [ 2, 0, 0, 1 ], [ 0, -1, -1, 0 ], [ 1, 0, 0, 0 ], [ 0, -1, -1, 0 ] ]
      var puzzleNumbers = puzzleByRows.map((row) => {
    // Split each row into individual cells
        const cells = row.split("");
    // Convert each cell in each row : "." to -1, other characters to numbers.
        const convertedRow = cells.map((cell) => {
          if (cell === ".") {
            return -1; 
          } else {
            return parseInt(cell);
          }
        });
        return convertedRow;
      });
      
    // Array of objects {row,col} with information about words beginning cells in crossword = [ { row: 0, col: 0 }, { row: 0, col: 3 }, { row: 2, col: 0 } ]
      const wordsBeginnings = [];
      var totalWordsBeginnings = 0;
      for (let rowIndex = 0; rowIndex < puzzleNumbers.length; rowIndex++) {
        for (let colIndex = 0; colIndex < puzzleNumbers[rowIndex].length; colIndex++) {
          const cellValue = puzzleNumbers[rowIndex][colIndex];
          // Check if the cell value is a start = if the cell value is positive.
          if (cellValue > 0) {
            wordsBeginnings.push({row: rowIndex, col: colIndex,});
          // We use this loop to count the number of wordsBeginnings for the next test.
            totalWordsBeginnings = totalWordsBeginnings + cellValue;
          }
        }
      }
    // Check if number of words is equal to number of wordBeginnings.
      if (totalWordsBeginnings !== words.length) {
        console.log("Error");
        return "Error";
      }
     
    // Check if all rows have the same length
      const puzzleWidth = puzzleNumbers[0].length;
      for (let i = 1; i < puzzleNumbers.length; i++) {
        if (puzzleNumbers[i].length !== puzzleWidth) {
          console.log("Error");
          return "Error";
        }
      }
     
    // Each cell contains letter if cell is occupied, "" if cell is empty or "." if cell is not available
      var puzzleWords = puzzleNumbers.map(row => {
        const dotFreeRows = row.map(cell => {
          if (cell === -1) {
            return ".";
          } else {
            return "";
          }
        });
        return dotFreeRows;
      });
     
    // Function that checks if it's possible to place word in crossword.
      function canPlaceWord(word, row, col, direction){
        if (direction === "horizontal" && col + word.length > puzzleNumbers[row].length) {
          return false;
        }
        if (direction === "vertical" && row + word.length > puzzleNumbers.length) {
          return false;
        }
        for (let i = 0; i < word.length; i++) {
          if (puzzleWords[row][col] !== "") {
            if (puzzleWords[row][col] !== word[i]) {
              return false;
            }
          }
          if (direction === "horizontal") {
            col++;
          } else {
            row++;
          }
        }
        // Cell after word should be unavailable (or out of the board)
        const afterWordCell = puzzleNumbers[row]?.[col];
        return afterWordCell === -1 || afterWordCell === undefined;
      }
      var compteurSolution = 0;
      var solution;
      if (words.length < 4){
        const listOfWords = generatePermutations(words,1);
      
          for (words of listOfWords){
            if(placeWord(words)){
            puzzleWords = puzzleNumbers.map(row => {
              const dotFreeRows = row.map(cell => {
                if (cell === -1) {
                  return ".";
                } else {
                  return "";
                }
              });
              return dotFreeRows;
            });
            puzzleNumbers = puzzleByRows.map((row) => {
                  const cells = row.split("");
                  const convertedRow = cells.map((cell) => {
                    if (cell === ".") {
                      return -1; 
                    } else {
                      return parseInt(cell);
                    }
                  });
                  return convertedRow;
                });
          }
        }
        } else {
          placeWord(words);
        }
    // Function that places words in crossword, with the use of canPlaceWord's function.
    function placeWord(words) {
      if (words.length === 0) {
        compteurSolution++;
        solution = puzzleWords;
        return true;
      }
      for (const word of words) {
        for (const cell of wordsBeginnings) {
          if (puzzleNumbers[cell.row][cell.col] === 0) continue;
          if (canPlaceWord(word, cell.row, cell.col, "horizontal")) {
            const backupRow = [...puzzleWords[cell.row]];
            for (let j = 0; j < word.length; j++) {
              puzzleWords[cell.row][cell.col + j] = word[j];
            }
            puzzleNumbers[cell.row][cell.col]--;
            if (placeWord(words.filter(w => w !== word))) {
              return true;
            }
            puzzleNumbers[cell.row][cell.col]++;
            puzzleWords[cell.row] = backupRow.slice();
          }
          if (canPlaceWord(word, cell.row, cell.col, "vertical")) {
            const backupCol = puzzleWords.map(row => row[cell.col]);
            for (let j = 0; j < word.length; j++) {
              puzzleWords[cell.row + j][cell.col] = word[j];
            }
            puzzleNumbers[cell.row][cell.col]--;
            if (placeWord(words.filter(w => w !== word))) {
              return true;
            }
            puzzleNumbers[cell.row][cell.col]++;
            for (let index = 0; index < puzzleWords.length; index++) {
              puzzleWords[index][cell.col] = backupCol[index];
            }
          }
        }
      }
      return false;
    }
      console.log(compteurSolution)
      // Check if all words are placed in crossword.
      if (compteurSolution == 0 || compteurSolution > 1){
        console.log("Error");
        return "Error";
      } else {
    // Print the result line by line.
      let result = "";
      for (let i = 0; i < solution.length-1; i++) {
        result += solution[i].join("") + "\n";
        if (i==solution.length-2){
        result += solution[i+1].join("");
        }
      }
      console.log(result);
      return result;
    }
    }
    function generatePermutations(words) {
      const listOfWords = [];
      const stack = [{ array: words.slice(), index: 0 }];
      while (stack.length > 0) {
        const { array, index } = stack.pop();
        if (index === array.length - 1) {
          listOfWords.push([...array]);
        } else {
          for (let i = index; i < array.length; i++) {
            [array[index], array[i]] = [array[i], array[index]];
            stack.push({ array: array.slice(), index: index + 1 });
            [array[index], array[i]] = [array[i], array[index]]; // Backtrack
          }
        }
      }
      return listOfWords;
    }
    // TEST //
    const emptyPuzzle = `2001
    0..0
    1000
    0..0`
    const words = ['alan', 'casa', 'ciao', 'anta']
    crosswordSolver(emptyPuzzle, words)
    console.log("")
    const emptyPuzzle2 = `...1...........
    ..1000001000...
    ...0....0......
    .1......0...1..
    .0....100000000
    100000..0...0..
    .0.....1001000.
    .0.1....0.0....
    .10000000.0....
    .0.0......0....
    .0.0.....100...
    ...0......0....
    ..........0....`
    const words2 = [
      'sun',
      'sunglasses',
      'suncream',
      'swimming',
      'bikini',
      'beach',
      'icecream',
      'tan',
      'deckchair',
      'sand',
      'seaside',
      'sandals',
    ]
    crosswordSolver(emptyPuzzle2, words2)
    console.log("")
    const emptyPuzzle3 = `..1.1..1...
    10000..1000
    ..0.0..0...
    ..1000000..
    ..0.0..0...
    1000..10000
    ..0.1..0...
    ....0..0...
    ..100000...
    ....0..0...
    ....0......`
    const words3 = [
      'popcorn',
      'fruit',
      'flour',
      'chicken',
      'eggs',
      'vegetables',
      'pasta',
      'pork',
      'steak',
      'cheese',
    ]
    crosswordSolver(emptyPuzzle3, words3)
    console.log("")
    const emptyPuzzle4 = `...1...........
    ..1000001000...
    ...0....0......
    .1......0...1..
    .0....100000000
    100000..0...0..
    .0.....1001000.
    .0.1....0.0....
    .10000000.0....
    .0.0......0....
    .0.0.....100...
    ...0......0....
    ..........0....`
    const words4 = [
      'sun',
      'sunglasses',
      'suncream',
      'swimming',
      'bikini',
      'beach',
      'icecream',
      'tan',
      'deckchair',
      'sand',
      'seaside',
      'sandals',
    ].reverse()
    crosswordSolver(emptyPuzzle4, words4)
    console.log("")
    const emptyPuzzle5 = '2001\n0..0\n2000\n0..0'
    const words5 = ['casa', 'alan', 'ciao', 'anta']
    crosswordSolver(emptyPuzzle5, words5)
    console.log("")
    const emptyPuzzle6 = '0001\n0..0\n3000\n0..0'
    const words6 = ['casa', 'alan', 'ciao', 'anta']
    crosswordSolver(emptyPuzzle6, words6)
    console.log("")
    const emptyPuzzle7 = '2001\n0..0\n1000\n0..0'
    const words7 = ['casa', 'casa', 'ciao', 'anta']
    crosswordSolver(emptyPuzzle7, words7)
    console.log("")
    const emptyPuzzle8 = ''
    const words8 = ['casa', 'alan', 'ciao', 'anta']
    crosswordSolver(emptyPuzzle8, words8)
    console.log("")
    const emptyPuzzle9 = 123
    const words9 = ['casa', 'alan', 'ciao', 'anta']
    crosswordSolver(emptyPuzzle9, words9)
    console.log("")
    const emptyPuzzle10 = ''
    const words10 = 123
    crosswordSolver(emptyPuzzle10, words10)
    console.log("")
    const emptyPuzzle11 = '2000\n0...\n0...\n0...'
    const words11 = ['abba', 'assa']
    crosswordSolver(emptyPuzzle11, words11)
    console.log("")
    const emptyPuzzle12 = '2001\n0..0\n1000\n0..0'
    const words12 = ['aaab', 'aaac', 'aaad', 'aaae']
    crosswordSolver(emptyPuzzle12, words12)