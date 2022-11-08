// Given the array array and numbers i and j, swap elements at indexes i and j in place.

const array = [1, 2, 3, 4, 5];

function swapArray(array, i, j) {
  let element1 = array[i];
  let element2 = array[j];
  if (i > j) {
    array.splice(i, 1, element2);
    array.splice(j, 1, element1);
  } else {
    array.splice(j, 1, element1);
    array.splice(i, 1, element2);
  }
  console.log(array);
  return array;
}

swapArray(array, 4, 2); // [1, 2, 5, 4, 3]
swapArray(array, 1, 2); // [1, 5, 2, 4, 3]
swapArray(array, 0, 1); // [5, 1, 2, 4, 3]
