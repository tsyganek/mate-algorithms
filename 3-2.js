// Given the array nums consisting of 2n elements in the form [x1, x2, ..., xn, y1, y2, ..., yn].

// Return the array in the form [x1, y1, x2, y2, ..., xn, yn].

// 1 <= n <= 500;
// nums.length == 2n;
// 1 <= nums[i] <= 1000;

function shuffleArray(nums, n) {
  const array1 = nums.slice(0, n);
  const array2 = nums.slice(n, nums.length);
  let newArray = [];

  for (let i = 0; i < array1.length; i++) {
    newArray.push(array1[i]);
    newArray.push(array2[i]);
  }
  console.log(newArray);
  return newArray;
}

shuffleArray([1, 2, 3, 4, 4, 3, 2, 1], 4);
// Output: [1, 4, 2, 3, 3, 2, 4, 1];
