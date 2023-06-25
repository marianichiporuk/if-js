// module.exports = { sum, getColor, text1, text2, text3, color_text1, color_text2, color_text3, colors };

console.log('Task#1');

function sum(a) {
  return function (b) {
    return a + b;
  };
}

console.log(sum(5)(2));

console.log('Task#2');

const text1 = document.getElementById('text1');
const text2 = document.getElementById('text2');
const text3 = document.getElementById('text3');

const colors = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'];

let color_text1 = 0;
let color_text2 = 0;
let color_text3 = 0;

function getColor(text) {
  switch (text) {
    case text1:
      text.style.color = colors[color_text1];
      color_text1++;
      if (color_text1 === colors.length) {
        color_text1 = 0;
      }
      return color_text1;
    case text2:
      text.style.color = colors[color_text2];
      color_text2++;
      if (color_text2 === colors.length) {
        color_text2 = 0;
      }
      return color_text2;
    case text3:
      text.style.color = colors[color_text3];
      color_text3++;
      if (color_text3 === colors.length) {
        color_text3 = 0;
      }
      return color_text3;
  }
}

text1.addEventListener('click', (event) => {
  event.target.style.color = getColor(text1);
});

text2.addEventListener('click', (event) => {
  event.target.style.color = getColor(text2);
});

text3.addEventListener('click', (event) => {
  event.target.style.color = getColor(text3);
});
