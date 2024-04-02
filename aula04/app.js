//criar e deletar arquivo

const fs = require('fs');

// const data = "Olá mundo!";

// fs.writeFile('file1.txt', data, (erro) => {
//     if(erro){
//         console.log(erro);
//     }
// })

// if(fs.existsSync('file1.txt')){
//     fs.rmSync('file1.txt');
// }
// console.log('Fim da execução!');

// fs.appendFile('logs.log', 'Loguei\n', (erro) => {
//     console.log(erro);
// })

//apagar arquivo
if(fs.existsSync('logs.log')){
    fs.rmSync('logs.log');
}
console.log('Fim da execução!');

