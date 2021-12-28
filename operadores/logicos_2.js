const T1 = false;
const T2 = false;

let compraTV50 = T1 && T2;
console.log('vamos compra a Tv de 50"', compraTV50); //and

let compraTV32 = T1 != T2;
console.log('vamos compra a tv de 32"', compraTV32); // ou exclusivo só é verdadeiro se apenas um for.

let tomarSorvete = compraTV50 || compraTV32;
console.log('vamos tomar sorvete', tomarSorvete); // or

let ficarCasa = !tomarSorvete; // not, só ira ficar em casa se não for tomar sorvete.
console.log('vamos ficar em casa', ficarCasa);

/*
muito legal o exemplo e logica do ou exclusivo,
vé conhecia mais ainda não tinha visto um exemplo pratico.
*/