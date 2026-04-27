const MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0',
};

module.exports = function decode(expr) {
  function sliceStr(str, step) {
    const res = [];
    for (let j = 0; j < str.length; j += step) {
      res.push(str.slice(j, j + step));
    }
    return res;
  }

  const arr = sliceStr(expr, 10);

  const decArr = arr
    .map((el) => {
      if (el === '**********') return ' ';
      const decEl = sliceStr(el, 2)
        .filter((c) => c !== '00')
        .map((d) => {
          if (d === '10') return '.';
          if (d === '11') return '-';
          return d;
        })
        .join('');
      return decEl;
    })
    .map((s) => (MORSE_TABLE[s] ? MORSE_TABLE[s] : s))
    .join('');
  return decArr;
};
