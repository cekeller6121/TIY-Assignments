function sum(num) {
  let sumArray = [0];
  for (let i = 0; i < num; i++) {
    if(i % 3 === 0 || i % 5 === 0) {
      sumArray.push(i);
    }
  }
  return sumArray.reduce((a, b) => a + b, 0);
}
