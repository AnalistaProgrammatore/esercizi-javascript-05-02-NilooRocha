/**
* Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. 
* At each position of the grid there is either a space or a "#" character. 
* The characters should form a chessboard.
*/
let tam = 8; //pode ser feito de qualquer tamanho modificando essa variavel.
let tabuleiro = '';
for(let x = 0; x < tam; x++){ 
    if (x % 2 == 0) {
        tabuleiro = tabuleiro + '# # # #'
}
    else{
        tabuleiro +=  '\n # # # #\n' //recordar significado do exercicio 001
}                      // esse \n serve para criar uma nova linha, ou seja pula uma linha pra cada nova repetiçao.
}
console.log(tabuleiro) 