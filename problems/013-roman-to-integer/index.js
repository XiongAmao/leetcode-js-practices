
/**
 * Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.
 * Symbol Value
 *  I      1
 *  V      5
 *  X      10
 *  L      50
 *  C      100
 *  D      500
 *  M      1000
 *
 * For example, two is written as II in Roman numeral, just two one's added together.
 * Twelve is written as, XII, which is simply X + II.
 * The number twenty seven is written as XXVII, which is XX + V + II.
 *
 * Roman numerals are usually written largest to smallest from left to right.
 * However, the numeral for four is not IIII. Instead, the number four is written as IV.
 * Because the one is before the five we subtract it making four.
 * The same principle applies to the number nine, which is written as IX.
 * There are six instances where subtraction is used:
 * - I can be placed before V (5) and X (10) to make 4 and 9.
 * - X can be placed before L (50) and C (100) to make 40 and 90.
 * - C can be placed before D (500) and M (1000) to make 400 and 900.
 *
 * Given a roman numeral, convert it to an integer.
 * Input is guaranteed to be within the range from 1 to 3999.
 *
 * @param {string} s
 * @return {number}
 */
const romanToInt = (s) => {
  const map = {
    I: {
      value: 1,
      match: ''
    },
    V: {
      value: 5,
      match: 'I'
    },
    X: {
      value: 10,
      match: 'I'
    },
    L: {
      value: 50,
      match: 'X'
    },
    C: {
      value: 100,
      match: 'X'
    },
    D: {
      value: 500,
      match: 'C'
    },
    M: {
      value: 1000,
      match: 'C'
    }
  };
  const len = s.length;
  let count = map[s[0]].value;

  for (let i = 1; i < len; i++ ) {
    if (map[s[i]].match === s[i - 1]) {
      count = count - (map[s[i - 1]].value * 2);
    }
    count = count + map[s[i]].value;
  }
  return count;
};

module.exports = [
  romanToInt
];
