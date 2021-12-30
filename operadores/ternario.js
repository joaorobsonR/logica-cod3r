const hora = 18;

let saudacao = hora <= 11 ? 'bom dia' : 'boa tarde';
console.log(saudacao);

// muito legal o operador ternario é como se fosse um if

saudacao = hora <= 11 ? 'bom dia' : hora <= 17 ? 'boa tarde' : 'boa noite';
console.log(saudacao);

/*
nota-se que nesse exemplo foi usado mais uma expressão,
tornado assim mais completo, no preiro caso não existe
a condição que retorna boa noite.
*/