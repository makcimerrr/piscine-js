// Cette fonction permet de résoudre un puzzle croisé
function crosswordSolver(emptyPuzzle, words) {
  if (!isValidInput(emptyPuzzle, words)) {
    return "Error";
  }

  const puzzleNumbers = convertPuzzleToNumbers(emptyPuzzle);
  const wordsBeginnings = findWordsBeginnings(puzzleNumbers);

  if (!isValidWordsCount(words, wordsBeginnings)) {
    return "Error";
  }

  if (!areRowsEqualLength(puzzleNumbers)) {
    return "Error";
  }

  const puzzleWords = convertNumbersToWords(puzzleNumbers);

  var compteurSolution = 0;
  var solution;

  placeWord(words);

  if (!isValidSolution(compteurSolution)) {
    return "Error";
  } else {
    return formatAndPrintSolution(solution);
  }

  // Cette fonction vérifie que les entrées sont valides
  function isValidInput(emptyPuzzle, words) {
    if (typeof emptyPuzzle !== "string" || !Array.isArray(words)) {
      console.log("Error: Invalid input format");
      return false;
    }

    if (!/^[.\n012]+$/.test(emptyPuzzle)) {
      console.log("Error: Invalid characters in emptyPuzzle");
      return false;
    }

    for (var i = 0; i < words.length; i++) {
      if (words.indexOf(words[i]) !== words.lastIndexOf(words[i])) {
        console.log("Error: Duplicate words");
        return false;
      }
    }

    return true;
  }

  // Cette fonction convertit le puzzle en un tableau de nombres
  function convertPuzzleToNumbers(emptyPuzzle) {
    const puzzleByRows = emptyPuzzle.trim().split("\n");
    return puzzleByRows.map((row) => {
      const cells = row.split("");
      return cells.map((cell) => (cell === "." ? -1 : parseInt(cell)));
    });
  }

  // Cette fonction trouve les débuts des mots
  function findWordsBeginnings(puzzleNumbers) {
    const wordsBeginnings = [];
    let totalWordsBeginnings = 0;

    for (let rowIndex = 0; rowIndex < puzzleNumbers.length; rowIndex++) {
      for (
        let colIndex = 0;
        colIndex < puzzleNumbers[rowIndex].length;
        colIndex++
      ) {
        const cellValue = puzzleNumbers[rowIndex][colIndex];

        if (cellValue > 0) {
          wordsBeginnings.push({ row: rowIndex, col: colIndex });
          totalWordsBeginnings += cellValue;
        }
      }
    }

    return wordsBeginnings;
  }

  // Cette fonction vérifie que le nombre de mots correspond aux débuts des mots
  function isValidWordsCount(words, wordsBeginnings) {
    const totalWordsBeginnings = wordsBeginnings.reduce(
      (total, { row, col }) => total + puzzleNumbers[row][col],
      0
    );

    if (words.length !== totalWordsBeginnings) {
      console.log("Error: Number of words does not match wordBeginnings");
      return false;
    }

    return true;
  }

  // Cette fonction vérifie que toutes les lignes ont la même longueur
  function areRowsEqualLength(puzzleNumbers) {
    const puzzleWidth = puzzleNumbers[0].length;

    for (let i = 1; i < puzzleNumbers.length; i++) {
      if (puzzleNumbers[i].length !== puzzleWidth) {
        console.log("Error: Rows have different lengths");
        return false;
      }
    }

    return true;
  }

  // Cette fonction convertit les nombres en mots
  function convertNumbersToWords(puzzleNumbers) {
    return puzzleNumbers.map((row) =>
      row.map((cell) => (cell === -1 ? "." : ""))
    );
  }

  // Cette fonction vérifie si la solution est valide
  function isValidSolution(compteurSolution) {
    if (compteurSolution === 0 || compteurSolution > 1) {
      console.log("Error: Invalid number of solutions");
      return false;
    }
    return true;
  }

  // Cette fonction met en forme et affiche la solution
  function formatAndPrintSolution(solution) {
    let result = "";
    for (let i = 0; i < solution.length - 1; i++) {
      result += solution[i].join("") + "\n";
      if (i == solution.length - 2) {
        result += solution[i + 1].join("");
      }
    }
    console.log(result);
    return result;
  }

  // Cette fonction vérifie si un mot peut être placé à une position donnée
  function canPlaceWord(word, row, col, direction) {
    if (
      direction === "horizontal" &&
      col + word.length > puzzleNumbers[row].length
    ) {
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

    const afterWordCell = puzzleNumbers[row]?.[col];
    return afterWordCell === -1 || afterWordCell === undefined;
  }

  // Cette fonction place un mot à une position donnée
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
          if (placeWord(words.filter((w) => w !== word))) {
            return true;
          }
          puzzleNumbers[cell.row][cell.col]++;
          puzzleWords[cell.row] = backupRow.slice();
        }

        if (canPlaceWord(word, cell.row, cell.col, "vertical")) {
          const backupCol = puzzleWords.map((row) => row[cell.col]);
          for (let j = 0; j < word.length; j++) {
            puzzleWords[cell.row + j][cell.col] = word[j];
          }
          puzzleNumbers[cell.row][cell.col]--;
          if (placeWord(words.filter((w) => w !== word))) {
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
}

// Cette fonction génère toutes les permutations possibles des mots
function generatePermutations(words) {
  const listOfWords = [];
  const uniquePermutations = new Set();
  const stack = [{ array: words, index: 0 }];

  while (stack.length > 0) {
    const { array, index } = stack.pop();

    if (index === array.length - 1) {
      const permutation = array.join("");
      if (!uniquePermutations.has(permutation)) {
        uniquePermutations.add(permutation);
        listOfWords.push([...array]);
      }
    } else {
      for (let i = index; i < array.length; i++) {
        if (array[index] !== array[i]) {
          [array[index], array[i]] = [array[i], array[index]];
          stack.push({ array, index: index + 1 });
          [array[index], array[i]] = [array[i], array[index]]; // Backtrack
        }
      }
    }
  }

  return listOfWords;
}

// TEST //

const emptyPuzzle = `2001
0..0
1000
0..0`;
const words = ["alan", "casa", "ciao", "anta"];
crosswordSolver(emptyPuzzle, words);
console.log("");

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
..........0....`;
const words2 = [
  "sun",
  "sunglasses",
  "suncream",
  "swimming",
  "bikini",
  "beach",
  "icecream",
  "tan",
  "deckchair",
  "sand",
  "seaside",
  "sandals",
];

crosswordSolver(emptyPuzzle2, words2);
console.log("");

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
....0......`;
const words3 = [
  "popcorn",
  "fruit",
  "flour",
  "chicken",
  "eggs",
  "vegetables",
  "pasta",
  "pork",
  "steak",
  "cheese",
];

crosswordSolver(emptyPuzzle3, words3);
console.log("");

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
..........0....`;
const words4 = [
  "sun",
  "sunglasses",
  "suncream",
  "swimming",
  "bikini",
  "beach",
  "icecream",
  "tan",
  "deckchair",
  "sand",
  "seaside",
  "sandals",
].reverse();

crosswordSolver(emptyPuzzle4, words4);
console.log("");

const emptyPuzzle5 = "2001\n0..0\n2000\n0..0";
const words5 = ["casa", "alan", "ciao", "anta"];
crosswordSolver(emptyPuzzle5, words5);
console.log("");

const emptyPuzzle6 = "0001\n0..0\n3000\n0..0";
const words6 = ["casa", "alan", "ciao", "anta"];
crosswordSolver(emptyPuzzle6, words6);
console.log("");

const emptyPuzzle7 = "2001\n0..0\n1000\n0..0";
const words7 = ["casa", "casa", "ciao", "anta"];
crosswordSolver(emptyPuzzle7, words7);
console.log("");

const emptyPuzzle8 = "";
const words8 = ["casa", "alan", "ciao", "anta"];
crosswordSolver(emptyPuzzle8, words8);
console.log("");

const emptyPuzzle9 = 123;
const words9 = ["casa", "alan", "ciao", "anta"];
crosswordSolver(emptyPuzzle9, words9);
console.log("");

const emptyPuzzle10 = "";
const words10 = 123;
crosswordSolver(emptyPuzzle10, words10);
console.log("");

const emptyPuzzle11 = "2000\n0...\n0...\n0...";
const words11 = ["abba", "assa"];
crosswordSolver(emptyPuzzle11, words11);
console.log("");

const emptyPuzzle12 = "2001\n0..0\n1000\n0..0";
const words12 = ["aaab", "aaac", "aaad", "aaae"];
crosswordSolver(emptyPuzzle12, words12);
