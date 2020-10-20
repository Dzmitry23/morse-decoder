const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let stringsOfTen = expr.match(/.{10}/g);
    let reducer = (a, b) => a + (b === '10' ? '.' : '-');
    let result = '';

    for (const str of stringsOfTen) {
        if (str === '**********') {
            result += ' ';
            continue;
        }

        let stringsOfTwo = (+str).toString().match(/.{2}/g);
        let code = stringsOfTwo.reduce(reducer, '');
        result += MORSE_TABLE[code];
    }

    return result;
}

module.exports = {
    decode
}