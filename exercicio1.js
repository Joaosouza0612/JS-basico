function maiorn(n) {
  if (n.length === 0) return;
  let m = n[0]; 
  
  for (let i = 1; i < n.length; i++) {
    if (n[i] > m) m = n[i];
  }
  
  return m;
}
const numeros = [15, 8, 23, 4, 42, 16];
console.log(maiorn(numeros)); 
console.log(maiorn([]))  