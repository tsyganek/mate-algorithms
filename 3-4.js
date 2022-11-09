// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0] … nums[i]).

// Return the running sum of nums.

function runningSum(nums) {
  let el;
  //   let sumArray = [];
  //   let sum = 0;
  //   for (let i = 0; i < nums.length; i++) {
  //     sum += nums[i];
  //     sumArray.push(sum);
  //   }
  //   return sumArray;
  if (nums.length > 2) {
    for (let i = 0; i <= Math.floor((nums.length - 1) / 2); i++) {
      el = nums[i];
      nums[i] = nums[nums.length - 1 - i];
      nums[nums.length - 1 - i] = el;
    }
  } else if ((nums.length = 2)) {
    el = nums[0];
    nums[0] = nums[1];
    nums[1] = el;
  }
  console.log(nums);
  return nums;
}

runningSum([1, 2, 3, 4]);
runningSum([1, 1, 1, 1, 1]);
runningSum([3, 1, 2, 10, 1]);
runningSum([1, 2, 3]);
runningSum([1, 2]);

runningSum([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]);
