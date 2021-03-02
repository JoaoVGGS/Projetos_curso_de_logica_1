/*PORTUGOL
escreva ("Digite a nome do aluno")
leia (nome)
escreva ("digite nota 01")
Leia (nota 01)
escreva (digite nota 02)
leia (nota 02)
media := (nota 01 + nota 02)/2,

Se media >= 5 entao
    escreva("Aprovado")
senao
    escreva("reprovado")
fimse*/

var nome, nota01, nota02;
nome = prompt("Digite o nome do aluno: ")
nota01 = prompt("Digite Nota 01")
nota02 = prompt("Digite nota 02")

media = (parseInt(nota01) + parseInt(nota02)/2)

if(media >= 5){
    alert("Aprovado")
}
else
    alert("reprovado")