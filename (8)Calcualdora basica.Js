/*PORTUGOL
Var
   // Seção de Declarações das variáveis
   n2, n1, resultado: real
   sinal: caractere
   // Seção de Comandos, procedimento, funções, operadores, etc...
inicio

   escreva("primeiro numero: ")
   leia(n1)
   escreva("operaçao: ")
   leia(sinal)
   escreva("segundo numero: ")
   leia(n2)
   se (sinal = "+") entao
    resultado := n1+n2
   senao
       se (sinal = "-") entao
          resultado := n1-n2
       senao
          se (sinal = "*") entao
             resultado := n1*n2
          senao
               se (sinal = "/") entao
               resultado := n1/n2
               fimse
          fimse
       fimse
   fimse

   escreva("resultado :", resultado)
Fimalgoritmo
*/

var n1, n2, resultado, sinal;
function acaoBotao(){
n1=prompt("Digite o primeiro valor: ")
sinal=prompt("Digite a operação do calculo: ")
n2=prompt("Digite o segundo valor: ")

if (sinal=="+"){
   resultado=parseInt(n1)+parseInt(n2)   
}else if(sinal=="-"){
         resultado=parseInt(n1)-parseInt(n2)
}else if(sinal=="*"){
         resultado=parseInt(n1)*parseInt(n2)
}else if(sinal=="/"){
         resultado=parseInt(n1)/parseInt(n2)
}
document.getElementById("P1").innerText=resultado
}