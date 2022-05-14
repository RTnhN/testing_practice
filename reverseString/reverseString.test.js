import { expect } from 'expect';
import reverseString from './reverseString';

test('blank string', () => {
  expect(reverseString('')).toMatch('');
});


test('normal string', () => {
  expect(reverseString('test')).toMatch('tset');
});

test('with capitalized first letter', () => {
  expect(reverseString('Test')).toMatch('tseT');
});

test('starting with number', () => {
  expect(reverseString('1test')).toMatch('tset1');
});