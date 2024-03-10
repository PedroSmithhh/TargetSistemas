function RealizaFibonacci(n) {
    let fib = [0, 1];
    for (let i = 2; i <= n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib;
}

function verificaFibonacci(input) {
    let fib = RealizaFibonacci(input);
    return fib.includes(input);  //Verifica se o input esta no array fib
}

const input = 21; // Número para verificar se está na sequência de Fibonacci

if (verificaFibonacci(input)) {
    console.log(`${input} pertence à sequência de Fibonacci.`);
} else {
    console.log(`${input} não pertence à sequência de Fibonacci.`);
}

