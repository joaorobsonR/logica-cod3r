for(let i = 1; i <= 3; i++) { //LEMBRAR: primeiro incrementa(i++) depois verifiica(i<=3)
    let linha = '' //aqui depois de executado o segundo laço retorna a valor vazio para a var linha
    for (let j = 1; j <= 3; j++) {
        linha += `[${i}, ${j}] `  //aqui vai concatenar a variável linha que é uma string do segundo laço
    }
    console.log(linha) // aqui apos terminar o segundo laço vai mostra a variável string já concatenada
}