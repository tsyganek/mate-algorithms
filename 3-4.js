// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0] … nums[i]).

// Return the running sum of nums.

function runningSum(nums) {
  let sumArray = [];
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    sumArray.push(sum);
  }
  return sumArray;
}

runningSum([1, 2, 3, 4]);
runningSum([1, 1, 1, 1, 1]);
runningSum([3, 1, 2, 10, 1]);
