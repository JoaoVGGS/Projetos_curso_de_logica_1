/* PORTUGOUL
passou:=falso
escreva ("Nome de Usuario: ")
leia(nome)
escreva  ("Digite Nota 01")
leia(nota 01)
escreva("Digite Nota 02")
leia (nota 02)
media := (nota 01 + nota 02)/2,

Se media >= 5 entao
    passou := verdadeiro
fimse

se (passou) && (media>=5 && media <= 7)) entao  
 escreva("Aprovado")
senao
    escreva("reprovado")
fimse */

var N1, N2, Nf, passou;
passou=false

N1=prompt("Digite Nota 01:");
N2=prompt("Digite Nota 02:");


Nf=(parseInt(N1)+parseInt(N2))/2;
if (Nf >= 5)
    passou=true;
if ((passou) && (Nf>=5 && Nf < 7))
    alert("Aprovado: " + Nf);

else (alert("Reprovado: " + Nf));