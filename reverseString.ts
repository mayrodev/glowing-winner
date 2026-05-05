function reverseString(str: string): string {
  if (str.length === 0) return '';
  return str.split('').reverse().join('');
}

console.log(reverseString('hello')); // olleh
