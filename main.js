console.log('Task#1');

function palindrome(word) {
  const reverse = [];
  let el = 0;

  for (let i = word.length - 1; i >= 0; i--) {
    reverse[el] = word[i];
    el++;
  }

  let count = 0;
  for (let i = 0; i <= word.length; i++) {
    if (word[i] !== reverse[i]) {
      count += count;
    }
  }

  return count === 0;

}
console.log(palindrome('комок'));

console.log('Task#2');

const min = function (a, b) {
  if (a > b) {
    return b;
  } else if (a < b) {
    return a;
  }
  console.log('Элементы равны');
};

console.log(min(3, 6));

const max = function (a, y) {
  if (a > y) {
    return a;
  } else if (a < y) {
    return y;
  }
  console.log('Элементы равны');
};

console.log(max(7, 5));

function maxx(a, b) {
  return a > b ? a : b;
}

console.log(maxx(1, 6));

function minn(a, b) {
  return a < b ? a : b;
}

console.log(minn(1, 0));

console.log('Task#3');

const zero = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 10 === 0) {
      const first = arr[i] / 10;
      if (first === 10) {
        arr[i] = '1zerozero';
      } else if (first === 0) {
        arr[i] = 'zero';
      } else {
        arr[i] = first + 'zero';
      }
    }
  }
  return arr;
};

console.log(zero([0, 23, 50, 84, 100, 90, 77, 20, 49, 33]));
