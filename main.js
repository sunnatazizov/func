//Задание 1
function max_name(name1, name2, name3) {
  let max_length = Math.max(name1.length, name2.length, name3.length);
  if (name1.length === max_length) {
    return name1;
  } else if (name2.length === max_length) {
    return name2;
  } else {
    return name3;
  }
}
let longest_name = max_name('Alex', 'George', 'Michael');
console.log(longest_name); 

//Задание 2
function min() {
  let args = Array.from(arguments);
  if (args.length === 1) {
    args = args[0];
  }
  if (Array.isArray(args)) {
    return Math.min.apply(null, args);
  } else {
    let values = Object.values(args);
    return Math.min.apply(null, values);
  }
}
console.log(min(1, 2));
console.log(min([1, 2])); 
console.log(min({ a: 1, b: 2 }));
console.log(min({ a: 1, b: 2 }, { a: 11, b: 12 })); 


//Задание 3
function sortArray(array) {
  let isSorted = false;
  while (!isSorted) {
    isSorted = true;
    for (let [i, element] of array.entries()) {
      if (array[i + 1] !== undefined && element > array[i + 1]) {
        array[i] = array[i + 1];
        array[i + 1] = element;
        isSorted = false;
      }
    }
  }
  return array;
}
let arr = [3, 1, 4, 2];
console.log(sortArray(arr)); 

