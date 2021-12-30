const nota = 8;
const bomComportamento = true;

if (nota >= 7 && bomComportamento)
    console.log('parabéns');

if (nota < 7 || !bomComportamento)
    console.log('uma pena');

console.log('fim');

/*
a negação do bomComportamento é muito importante
para não ter a necessidade de verificção da variável
bomComportamento, assim garante que apenas uma linha será executada,
caso contrário, se bomComportamento recebe True, 'parabéns' e 'uma pena'
seria imprimida no fim do programa.
*/