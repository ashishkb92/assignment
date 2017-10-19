function fibonacci(n) {
  if (n === 1) return 1;
  if (n === 2) return 2;
  return fibonacci(n - 2) + fibonacci(n - 1);
}

let evenValuedSum = 0;

for (let i = 1; fibonacci(i) < 90; i++) {
 if(fibonacci(i)%2 === 0) 
 evenValuedSum = evenValuedSum + fibonacci(i);
}
