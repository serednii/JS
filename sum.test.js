// const { sum } = require('./sum');
const sum = require('./sum');

test('перевірка суми двох чисел', () => {
    expect(sum(1, 2)).toBe(3);
    expect(sum(0.1, 0.2)).toBeCloseTo(0.3)
});


// test('adds 1 + 2 to equal 3', () => {
//   expect(sum(1, 2)).toBe(3);
// });