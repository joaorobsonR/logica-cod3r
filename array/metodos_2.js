const array = [1,23,4,58,6]

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}

array.forEach(function (elemento, index, array) {
    console.log(elemento, index, array)
});

function mostraCadaUm(el, i, array) {
    console.log(array)
}

array.forEach(mostraCadaUm)

//foreach é passar uma função como parametro para outra, acim asão duas formas de fazer isso