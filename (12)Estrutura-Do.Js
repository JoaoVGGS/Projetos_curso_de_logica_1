/*
Var
   N1, N2:real
   sairLoop:caractere

Inicio
   Repita
      escreva ("Digite o primeiro numero: ")
      Leia(N1)
      escreva ("Digite o segundo numero: ")
      Leia(N2)
      escreval ("resultado: ", N1+N2)
      escreval ("deseja sair? S/N")
      leia(sairLoop)
   ate (sairLoop<>"N")
Fimalgoritmo
*/
function acaoBotao() {
    

var N1, N2, sairLoop, resultado;
do {
    N1=prompt("Digite o primeiro numero: ")
    N2=prompt("Digite o segundo numero: ")
    resultado = parseInt (N1)+parseInt(N2)
    alert ("resultado: " + resultado)
  sairLoop=prompt("deseja sair? S/N")
} while (sairLoop == "N");
}

