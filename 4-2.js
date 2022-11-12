// Given a m * n matrix grid which is sorted in non-increasing order both row-wise and column-wise.

// Return the number of negative numbers in grid.

function countNegatives(grid) {
    let negativeCount = 0;
  
    for (let i = 0; i < grid.length; i++) {
      const array = grid[i];
  
      for (let j = 0; j < array.length; j++) {
        if (array[j] < 0) {
          negativeCount += (array.length - j);
          break;
        } 
      }
    }
  console.log(negativeCount);
    return negativeCount;
  }

  
  countNegatives([
    [4, 3, 2, -1],
    [3, 2, 1, -1],
    [1, 1, -1, -2],
    [-1, -1, -2, -3]
  ]) //8;

  countNegatives([
    [3, 2],
    [1, 0]
  ]) //0;

  countNegatives([
    [1, -1],
    [-1, -1]
  ])
