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
    ' ': ' ',
};

const DECODER = {
 '10': '.',
 '11': '-',
 '**********': ' '
}

function decode(expr) {
    let lettersInDigits = expr.match(/.{10}/g) 
    let symbolsToLettersMap = new Map(Object.entries(MORSE_TABLE));
    let digitsToSymbolsMap = new Map(Object.entries(DECODER))

    //Separate digits to 2 length or 10 '*'
    separatedDigitsArr = []
    lettersInDigits.forEach(separateDigits);

    function separateDigits(item) {
        separatedDigitsArr.push(item.match(/\d{2}|[*]{10}/g))
    }

    // Map digits with morse symbols
    symbols = []
    separatedDigitsArr.forEach(mapSymbols)

    function mapSymbols(item) {
        symbols.push(item.map(digitsToSymbols).join(''))
    }
    
    function digitsToSymbols(digits) {
        return digitsToSymbolsMap.get(digits)
    }
   
    //Map morse symbols with letters
    letters = []
    symbols.forEach(mapLetters)

    function mapLetters(item) {
        letters.push(symbolsToLettersMap.get(item))
    }

    return letters.join('');
    
}

module.exports = {
    decode
}
