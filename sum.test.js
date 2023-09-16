const sum = require('./index.js');
const cap = require('./cap.js')
const reverseString = require('./reverseString.js')
const calculator = require('./calculator.js')
const caesarCipher = require('./caesarCipher.js');
const analyzeArray = require('./analyzeArray.js');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('Returns string first letter captilized',() =>{
    expect(cap("monkey")).toBe("Monkey");
})

test('String is reversed',() => {
    expect(reverseString("Angel")).toBe("legnA");
})

test('Returns correct calculations', () => {
    expect(calculator.add(5, 2)).toEqual(7);
    expect(calculator.subtract(5, 2)).toEqual(3);
    expect(calculator.multiply(5, 2)).toEqual(10);
    expect(calculator.divide(5, 2)).toEqual(2.5);
  });

test('Returns crypted string', () => {
    expect(caesarCipher('hello')).toBe("ifmmp")
})

test('Contains exclamation mark.', () => {
    expect(caesarCipher('hello!')).toBe("ifmmp!")
})

test('Wraps Z to A', () => {
    expect(caesarCipher('zello!')).toBe("afmmp!")
})

test('Returns MIN,MAX,AVERAGE and LENGTH object', () => {
    expect(analyzeArray([1,8,3,4,2,6])).toStrictEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6
      })
})

