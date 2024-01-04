/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
function isPositive(number) {
  return number >= 0;
}

/**
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */
function getMaxNumber(a, b, c) {
  if (a > b && a > c) {
    return a;
  }
  if (b > c) {
    return b;
  }
  return c;
}

/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at https://en.wikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 * @param {Object} queen - The position of the queen.
 * @param {Object} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 */
function canQueenCaptureKing(queen, king) {
  if (
    queen.x === king.x ||
    queen.y === king.y ||
    queen.x / king.x === queen.y / king.y ||
    queen.x + queen.y === king.x + king.y
  ) {
    return true;
  }
  return false;
}

/**
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */
function isIsoscelesTriangle(a, b, c) {
  if (a === b) {
    return a + b > c && c > 0;
  }
  if (b === c) {
    return b + c > a && a > 0;
  }
  if (a === c) {
    return a + c > b && b > 0;
  }
  return false;
}

/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */
function convertToRomanNumerals(num) {
  const nums = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'];
  let str = '';
  let number = num;
  let i = 0;
  while (number >= 1) {
    if (i > 0) {
      for (let k = 0; k < number % 10; k += 1) {
        str = `${nums[i * 10 - 1]}${str}`;
      }
    } else if (number % 10 > 0) {
      str = `${nums[(number % 10) - 1]}${str}`;
    }

    i += 1;
    number = Math.floor(number / 10);
  }
  return str;
}

/**
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */
function convertNumberToString(numberStr) {
  let str = '';

  for (let i = 0; i < numberStr.length; i += 1) {
    let word = '';
    switch (numberStr[i]) {
      case '0':
        word = 'zero';
        break;
      case '1':
        word = 'one';
        break;
      case '2':
        word = 'two';
        break;
      case '3':
        word = 'three';
        break;
      case '4':
        word = 'four';
        break;
      case '5':
        word = 'five';
        break;
      case '6':
        word = 'six';
        break;
      case '7':
        word = 'seven';
        break;
      case '8':
        word = 'eight';
        break;
      case '9':
        word = 'nine';
        break;
      case '.':
        word = 'point';
        break;
      case ',':
        word = 'point';
        break;
      case '-':
        word = 'minus';
        break;
      default:
        word = '';
        break;
    }
    if (str === '') {
      str = `${word}`;
    } else {
      str = `${str} ${word}`;
    }
  }

  return str;
}

/**
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
function isPalindrome(str) {
  for (let i = 0; i < str.length / 2; i += 1) {
    if (str[i] !== str[str.length - i - 1]) {
      return false;
    }
  }
  return true;
}

/**
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 'е'     => 4
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === letter) {
      return i;
    }
  }
  return -1;
}

/**
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */
function isContainNumber(num, digit) {
  let number = num;
  while (number >= 1) {
    if (number % 10 === digit) {
      return true;
    }
    number = Math.floor(number / 10);
  }
  return false;
}

/**
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 */
function getBalanceIndex(arr) {
  function isBalanced(i) {
    let left = 0;
    let right = 0;
    for (let k = 0; k < arr.length; k += 1) {
      if (k < i) {
        left += arr[k];
      } else if (k > i) {
        right += arr[k];
      }
    }
    return left === right;
  }

  for (let i = 1; i < arr.length - 1; i += 1) {
    if (isBalanced(i)) {
      return i;
    }
  }
  return -1;
}

/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 */
function getSpiralMatrix(size) {
  const spiral = new Array(size);
  for (let i = 0; i < spiral.length; i += 1) {
    spiral[i] = new Array(size);
    for (let k = 0; k < spiral[i].length; k += 1) {
      spiral[i][k] = 0;
    }
  }

  let dirIndex = 0;
  let counter = 1;
  const pos = [0, 0];

  function nextDir() {
    dirIndex = dirIndex + 1 === 4 ? 0 : dirIndex + 1;
  }

  const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];

  while (counter < size * size + 1) {
    if (
      spiral[pos[0] + directions[dirIndex][0]] === undefined ||
      spiral[pos[0] + directions[dirIndex][0]][
        pos[1] + directions[dirIndex][1]
      ] !== 0
    ) {
      nextDir();
    }
    spiral[pos[0]][pos[1]] = counter;
    pos[0] += directions[dirIndex][0];
    pos[1] += directions[dirIndex][1];
    counter += 1;
  }
  return spiral;
}

/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */
function rotateMatrix(matrix) {
  let ring = 0;
  const rot = matrix;

  function topRow() {
    const row = new Array(matrix.length - ring - 1);
    let k = 0;
    for (let i = ring; i < matrix.length - ring - 1; i += 1) {
      row[k] = matrix[ring][i];
      k += 1;
    }
    return row;
  }

  function asignTopRow(arr) {
    let k = 0;
    for (let i = ring; i < matrix.length - ring - 1; i += 1) {
      rot[ring][i] = arr[k];
      k += 1;
    }
  }

  function bottomRow() {
    const row = new Array(matrix.length - ring - 1);
    let k = 0;
    for (let i = matrix.length - ring - 1; i > ring; i -= 1) {
      row[k] = matrix[matrix.length - ring - 1][i];
      k += 1;
    }
    return row;
  }

  function asignBottomRow(arr) {
    let k = 0;
    for (let i = matrix.length - ring - 1; i > ring; i -= 1) {
      rot[matrix.length - ring - 1][i] = arr[k];
      k += 1;
    }
  }

  function leftCol() {
    const col = new Array(matrix.length - ring - 1);
    let k = 0;
    for (let i = matrix.length - ring - 1; i > ring; i -= 1) {
      col[k] = matrix[i][ring];
      k += 1;
    }
    return col;
  }

  function asignLeftCol(arr) {
    let k = 0;
    for (let i = matrix.length - ring - 1; i > ring; i -= 1) {
      rot[i][ring] = arr[k];
      k += 1;
    }
  }

  function rightCol() {
    const col = new Array(matrix.length - ring - 1);
    let k = 0;
    for (let i = ring; i < matrix.length - ring - 1; i += 1) {
      col[k] = matrix[i][matrix.length - ring - 1];
      k += 1;
    }
    return col;
  }

  function asignRightCol(arr) {
    let k = 0;
    for (let i = ring; i < matrix.length - ring - 1; i += 1) {
      rot[i][matrix.length - ring - 1] = arr[k];
      k += 1;
    }
  }

  if (matrix.length / 2 !== Math.floor(matrix.length / 2)) {
    const mid = Math.floor(matrix.length / 2);
    rot[mid][mid] = matrix[mid][mid];
  }

  while (ring < Math.floor(matrix.length / 2)) {
    const tr = topRow();
    const rc = rightCol();
    const br = bottomRow();
    const lc = leftCol();
    asignTopRow(lc);
    asignRightCol(tr);
    asignBottomRow(rc);
    asignLeftCol(br);
    ring += 1;
  }
}

/**
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */
function sortByAsc(arr) {
  function swap(swapArr, i, k) {
    const a = swapArr;
    [a[i], a[k]] = [a[k], a[i]];
  }

  function partition(partArr, start, end) {
    const a = partArr;
    const pi = a[end];
    let i = start - 1;

    for (let k = start; k <= end - 1; k += 1) {
      if (a[k] < pi) {
        i += 1;
        swap(a, i, k);
      }
    }

    swap(a, i + 1, end);
    return i + 1;
  }

  function quickSort(sortArr, start, end) {
    if (start < end) {
      const pi = partition(sortArr, start, end);

      quickSort(sortArr, start, pi - 1);
      quickSort(sortArr, pi + 1, end);
    }
  }

  return quickSort(arr, 0, arr.length - 1);
}

/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */
function shuffleChar(str, iterations) {
  const cache = [];
  let iter = iterations;
  let out = str;
  const lenght = out.length;
  while (iter >= 1) {
    let left = '';
    let right = '';
    for (let i = 1; i < lenght - 1; i += 2) {
      right += out[i];
    }
    for (let i = 2; i < lenght - 1; i += 2) {
      left += out[i];
    }
    cache[cache.length] = out;
    out = out[0] + left + right + out[lenght - 1];
    iter -= 1;
    if (str === out) {
      return cache[iterations % cache.length];
    }
  }
  return out;
}

/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @example:
 * 12345    => 12354
 *    55
 * 123450   => 123504
 *    660
 * 12344    => 12434
 *   554
 * 123440   => 124034
 *   6650
 * 1203450  => 1203504
 *     660
 * 90822    => 92028
 *   3 10 3 2
 * 321321   => 322113
 *   4531
 * 7074022710479742 => 7074022710492477 // 7074022710472479
 *            11 12 9 5 2
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 */
function getNearestBigger(number) {
  function popFitting(arr, digit) {
    const a = arr;
    let fittingIndex = -1;
    for (let i = 0; i < a.length; i += 1) {
      if (a[i] > digit && (fittingIndex === -1 || a[i] <= a[fittingIndex])) {
        fittingIndex = i;
      }
    }
    const out = a[fittingIndex];
    a.splice(fittingIndex, 1);
    return out;
  }
  const nums = [];
  let i = 0;
  let num = number;
  while (num > 1) {
    const digit = num % 10;
    num = Math.floor(num / 10);
    if (!nums || nums[nums.length - 1] + nums.length - 1 >= digit + i) {
      num *= 10;
      num += popFitting(nums, digit);
      nums.push(digit);
      num += nums.sort((a, b) => a - b).join('');
      return +num;
    }
    nums.push(digit);
    i += 1;
  }
  return number;
}

module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};
