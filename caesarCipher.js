function caesarCipher(string) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let newString = '';
  
    for (let i = 0; i < string.length; i++) {
      const char = string[i].toLowerCase();
  
      if (alphabet.includes(char)) {
        const currentIndex = alphabet.indexOf(char);
        const shiftedIndex = (currentIndex + 1) % alphabet.length; 
        const shiftedChar = alphabet[shiftedIndex];
  
        newString += string[i] === string[i].toUpperCase() ? shiftedChar.toUpperCase() : shiftedChar;
      } else {

        newString += string[i];
      }
    }
  
    return newString;
  }
  
  module.exports = caesarCipher;