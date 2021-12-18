// nessa aula veremos alguns tipos de dados, muito importante

let idade = 29;
console.log(typeof idade);  // esse é um tipo number

let salario = 4578.59;
console.log(typeof salario);  // apesar de ser um numero flutuante o tipo é number

let nome = 'joão';
console.log(typeof nome);  // nome é um tipo string

let teste = true;
console.log(typeof teste);  // é um tipo booleano

/*
    também temos as variáveis constantes
    que muitas vezes serão as mais utilizadas
    ao longo do curso, uma variável declarada
    como constante não pode ser alterada!
*/

const a = 15;

// a = a + 5 , ira resultar em um erro já outro exemplo não acontece isso

let b = 15;

b = b + 5;
console.log(b);
