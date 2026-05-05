function palindrome(str) {
  let reversed = str
                  .toLowerCase()
                  .split('')
                  .reverse()
                  .join('');
  
  return str === reversed;
}

console.log(palindrome('A dama admirou o rim da amada'))