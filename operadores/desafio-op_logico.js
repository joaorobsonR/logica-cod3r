// duas expressões resulatar em true (aritimetico/atribuição/logico)
let n1 = 5;
let n2 = 10;

let resultado_V = n1 + 10;
resultado_V += 5;
console.log((n1 && n2) < resultado_V); 
console.log((n1 || n2) < resultado_V);

// duas expressões resulatar em false (aritimetico/atribuição/logico)

let resultado_f = n1 + 10;
resultado_f -= 10;
console.log((n1 && n2) < resultado_f); 
console.log((n1 || n2) < resultado_f);

// alguns exemplos do professor

let x = (6 + 11) >= n1 || n2 !== '10';
console.log(x);
console.log(!x); //negação da primeira gera um false