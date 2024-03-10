function inverteString(str) {
    let stringInversa = '';
    for (let i = str.length - 1; i >= 0; i--) {
        stringInversa += str[i];
    }
    return stringInversa;
}

const stringOriginal = 'Hello world';
const stringInversa = inverteString(stringOriginal);
console.log(`String invertida: ${stringInversa}`);
