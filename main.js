console.log('Task#1');

let user = 'John Doe';
console.log(user);

const student = 'Maria';
console.log(student);

user = 'Maria';
console.log(user);

console.log('Task#2');

let test = 1;
test += 1;
console.log(test);

test = test + '1';
console.log(test);

test -= 1;
console.log(test);

console.log(!!test);

console.log('Task#3');

const a = [2, 3, 5, 8];
let result = 1;

for (let i = 0; i < a.length; i++) {
  result = result * a[i];
}

console.log(result);

console.log('Task#4');

const b = [2, 5, 8, 15, 0, 6, 20, 3];

for (let i = 0; i < b.length; i++) {
  if (b[i] > 5 && b[i] < 10) {
    console.log(b[i]);
  }
}

console.log('Task#5');

const c = [2, 5, 8, 15, 0, 6, 20, 3];

for (let i = 0; i < b.length; i++) {
  if (c[i] % 2 === 0) {
    console.log(c[i]);
  }
}
