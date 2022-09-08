export function reverseWords(s: string): string {
  return s
    .split(' ')
    .map((word) => word.split('').reverse().join(''))
    .join(' ');
}

export function reverseWordsStringConcat(s: string): string {
  let word = '';
  let final = '';

  for (let i = 0; i < s.length; i++) {
    if (s[i] !== ' ') {
      word = s[i] + word; // add to left
    } else {
      final = final + word;
      final = final + ' ';
      word = '';
    }
  }
  final = final + word;
  return final;
}
