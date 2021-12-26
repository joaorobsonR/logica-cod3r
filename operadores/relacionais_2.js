/*
    tipagem é muito importante
    para as liguagens de programação
    e para os programadores, a tipagem
    é classificada entre fraca e forte, 
    e isso quer dizer o quanto uma variável
    pode receber tipos diferentes de dados
    depois de ter sido declarada.
*/

let x = 1;
console.log(x);

x = true
console.log(x);

x = 'tipagem fraca'
console.log(x);

/*
    o linguagem javascript é de tipagem fraca
    diferente da linguagem Java ou C++ que é
    de tipagem forte.
*/

/*
    um conceito muito importante é conparação de
    valores e os seus tipos, de duas variáveis,
    na linguagem JavaScript quando compara uma variável
    que tem o mesmo numero, mesmo sendo de tipos diferentes
    seu valor retorndo é true, para verificar o tipo 
    restrito é necessario usar três sinais de igual, 
    ex:
        a === b; 
*/

let a = '1';
let b = 1;

console.log(a == b);
console.log(a === b);
console.log(a != b);
console.log(a !== b);
