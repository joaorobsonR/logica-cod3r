let a = 1;

a = a + 1;
a += 1;
a++; // operadores de incremento usado em repetição posfix
++a; // prefix

console.log(a);

a--;
--a;

console.log(a);

// uma dica muito boa sobre clareza do codigo e prioridade nas operações

let x = 1;
let y = 2;

console.log(++x === y++); // o resultado é true por causa da prioridade! talvez não seja o esperado

/*
    uma dica muito importante é sobre clareza no código,
    sempre procurar escrever o código o mais claro possível,
    para que outras pessoas entendam, isso é o que um progamador
    experiente faz, nem que seja necessário escrever mais linhas,
    "quantidade de linhas não quer dizer qualidade".
*/
