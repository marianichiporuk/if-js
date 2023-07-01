const { sum, getColor, colors } = require('./main.js');
// Mock the DOM elements
const mockElement = (style = {}) => ({
  style,
  addEventListener: jest.fn(),
});
const text1 = mockElement();
const text2 = mockElement();
const text3 = mockElement();

test('Summing', () => {
  expect(sum(5)(2)).toBe(7);
});

test('Changing colors', () => {
  expect(colors[getColor(text1)]).toEqual(text1.style.color);
  expect(colors[getColor(text2)]).toEqual(text2.style.color);
  expect(colors[getColor(text3)]).toEqual(text3.style.color);
});
