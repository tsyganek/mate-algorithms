// Напиши функцію searchInsert, яка приймає відсортований масив цілих чисел nums і ціле число target. Якщо в масиві є число, рівне target, поверни його індекс. Якщо немає, поверни індекс, куди target було б вставлено по порядку.

// Примітка: якщо масив містить кілька елементів, рівних target, поверніть індекс першого з них.

function searchInsert (nums, target){

    if (nums.length === 0){
        console.log (0);
        return 0;
    }

    let min = 0;
    let max = nums.length - 1;

    if (target < nums[min]) {
        console.log(0);
        return 0;
    }

    if (target > nums[max]) {
        console.log(nums.length);
        return nums.length;
    }

    for (let i = 1; i<=nums.length; i++) {
        if (nums[i-1] === target){
            console.log(i - 1)
            return (i - 1);
        } else if (nums[i - 1]< target && nums[i] > target) {
            console.log(i);
            return i;
        }
    }
    }



searchInsert([1, 3, 5, 6], 5) // 5 має індекс 2
searchInsert([1, 3, 5, 6], 2)  // 2 було б вставлене з індексом 1
searchInsert([1, 3, 5, 6], 0)  // 0 був б вставлений з індексом 0
searchInsert([1, 5, 5, 5, 7], 6) // 6 було б вставлене з індексом 4
searchInsert([1], 3)  // 1 було б вставлене з індексом 1
searchInsert([], 12);
searchInsert([9, 9, 9, 9], 9)
searchInsert([-1, 3, 5, 7, 7, 7, 11, 12], 7)