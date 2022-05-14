const UPPER_A_LETTER_CODE = 65;
const UPPER_Z_LETTER_CODE = 90;
const LOWER_A_LETTER_CODE = 97;
const LOWER_Z_LETTER_CODE = 122;
const LETTERS_IN_ALPHABET = 26;

function caesarCipher(string, shift) {
  const translatedString = Array.from(string).map((char) => char.charCodeAt(0));
  return translatedString.map(char => String.fromCharCode(filterShift(char, shift))).join('');
}

function filterShift(letterCode, shift) {
  const moddedShift = shift % LETTERS_IN_ALPHABET + LETTERS_IN_ALPHABET;
  let shiftedLetterCode;
  if (letterCode >= LOWER_A_LETTER_CODE && letterCode <= LOWER_Z_LETTER_CODE) {
    shiftedLetterCode = (((letterCode + moddedShift)-LOWER_A_LETTER_CODE) % LETTERS_IN_ALPHABET)+LOWER_A_LETTER_CODE;
  } else if (letterCode >= UPPER_A_LETTER_CODE && letterCode <= UPPER_Z_LETTER_CODE) {
    shiftedLetterCode = (((letterCode + moddedShift)-UPPER_A_LETTER_CODE) % LETTERS_IN_ALPHABET)+UPPER_A_LETTER_CODE;
  } else {
    shiftedLetterCode = letterCode;
  }
  return shiftedLetterCode;

}

export default caesarCipher;