console.log('learning the Caesar Cipher');

const startText = 'gandalfzYQd';

const text = startText.toUpperCase();

console.log(text)

const shift = 3;

let cipheredText = '';

for (let i=0 ; i<text.length ; i++) {
    
    let newCode = text.charCodeAt(i) + shift;

    if (newCode > 90) {
        newCode = newCode - 26;
    }

    cipheredText += String.fromCharCode(newCode);
}

console.log(cipheredText);

