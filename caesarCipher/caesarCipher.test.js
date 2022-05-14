import { expect } from "expect";
import caesarCipher from "./caesarCipher.js";

test("zero shift", ()=>{
  expect(caesarCipher('test', 0)).toBe('test');
})

test("1 shift no wrap", ()=>{
  expect(caesarCipher('aaaa', 1)).toBe('bbbb');
})

test("1 shift wrap", ()=>{
  expect(caesarCipher('zzzz', 1)).toBe('aaaa');
})

test("1 shift caps no wrap", ()=>{
  expect(caesarCipher('AAaa', 1)).toBe('BBbb');
})

test("1 shift caps wrap", ()=>{
  expect(caesarCipher('ZZzz', 1)).toBe('AAaa');
})

test("1 shift extra wrap", ()=>{
  expect(caesarCipher('test', 100)).toBe('paop');
})

test("1 shift extra wrap negative", ()=>{
  expect(caesarCipher('test', -100)).toBe('xiwx');
})


test("Full sentence big wrap negative", ()=>{
  expect(caesarCipher('This is a test. Just a test. It has a lot of punctuation and other "things" to it. Have fun!', -100)).toBe('Xlmw mw e xiwx. Nywx e xiwx. Mx lew e psx sj tyrgxyexmsr erh sxliv "xlmrkw" xs mx. Lezi jyr!');
})
