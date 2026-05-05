function palindrome(str: string): boolean {
  const normalized: string = str
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ\s]/g, '');

  const reversed: string = normalized.split('').reverse().join('');

  return normalized === reversed;
}

console.log(palindrome('A dama admirou o rim da amada'));
