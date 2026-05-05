function fibonacci(n: number): number {
  if (n < 0) throw new Error('n must be a non-negative integer');
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(10));
