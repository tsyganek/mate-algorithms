// Given an integer n and an integer start.

// Define an array nums where nums[i] = start + 2 * i and n === nums.length. Return the bitwise XOR of all elements of nums.

function xorOperation(n, start) {
  let nums = [start];
  let element = start;
  for (let i = 1; i <= n; i++) {
    element = element + 2;
    nums.push(element);
  }
  let result = nums[0];
  for (let i = 1; i < nums.length - 1; i++) {
    result = result ^ nums[i];
  }
  console.log(result);
  return result;
}

xorOperation(5, 0);
xorOperation(4, 3);
xorOperation(1, 7);
xorOperation(10, 5);
