function capitalize(str: string): string {
  return str.replace(/\b\w/g, (c) => c.toUpperCase());
}

console.log(capitalize('the quick fox')); // The Quick Fox
