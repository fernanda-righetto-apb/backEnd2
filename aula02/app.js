//cd - change directory - mudando diretório
//buffer - endereço da memória onde tá o arquivo
// retorno readFile é sempre um buffer, endereço, daí pra ter informações é preciso manipular isso
// lendo arquivo usando fs
const fs = require('fs');

// fs.readFile('./dados.csv', (erro,data)=>{
//     if(erro){
//         console.log(erro);
//     }else{
//         transformar em string que tá nesse endereço - toString()
//         console.log(data.toString());
//     }
// })

//testar o método assíncrono - instrução executada em segundo plano, só sai pro terminal quando completada
let dados = '';
if(fs.existsSync('dados.csv')){
    dados = fs.readFileSync('dados.csv');
    console.log(dados.toString());
}else{
    console.log('Arquivo não encontrado')
}


console.log('Segunda operação');

