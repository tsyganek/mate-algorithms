// Given an integer n, return any array containing n unique integers such that they add up to 0.

function sumZero(n) {
  let num = [];
  let sum = 0;
  let element = 0;
  let finalElement;

  while (num.length < n - 1) {
    element = Math.floor(Math.random() * 1000);
    if (!num.includes(element)) {
      num.push(element);
      sum += element;
    }
  }
  finalElement = 0 - sum;
  num.push(finalElement);

  console.log(num);
  return num;
}

sumZero(5); //[-7, -1, 1, 3, 4]
sumZero(3); //[-1, 0, 1]
sumZero(1); //[0]
sumZero(10);
