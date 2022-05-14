import Calculator from "./calculator.js";

const calculator = new Calculator();

test('test add normal numbers', ()=>{
  expect(calculator.add(1,1)).toBe(2);
});

test('add string numbers', ()=>{
  expect(calculator.add('1','1')).toBe(2);
});

test('add non number strings', ()=>{
  expect(calculator.add('a','1')).toBe(NaN);
});

test('test add normal numbers', ()=>{
  expect(calculator.subtract(1,1)).toBe(0);
});

test('add string numbers', ()=>{
  expect(calculator.subtract('1','1')).toBe(0);
});

test('add non number strings', ()=>{
  expect(calculator.subtract('a','1')).toBe(NaN);
});

test('test add normal numbers', ()=>{
  expect(calculator.multiply(1,1)).toBe(1);
});

test('add string numbers', ()=>{
  expect(calculator.multiply('1','1')).toBe(1);
});

test('add non number strings', ()=>{
  expect(calculator.multiply('a','1')).toBe(NaN);
});

test('test add normal numbers', ()=>{
  expect(calculator.divide(1,1)).toBe(1);
});

test('add string numbers', ()=>{
  expect(calculator.divide('1','1')).toBe(1);
});

test('add non number strings', ()=>{
  expect(calculator.divide('a','1')).toBe(NaN);
});

test('divide by zero', ()=>{
  expect(calculator.divide('1','0')).toBe(Infinity);
});

