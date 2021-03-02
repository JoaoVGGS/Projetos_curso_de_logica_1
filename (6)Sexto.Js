/*PORTUGOL
Var
   // Seção de Declarações das variáveis
   N1, N2, N3, N4: inteiro
   NF: real
   Nome: caractere
   Joao: caractere
Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...
   N1 <-5
   N2 <-2
   N3 <-4
   N4 <-8
   NF <-((N1+N2+N3+N4)/4)
   escreva ("Digite um nome: ")
   leia (Nome)
   se (Nome <>"Joao") entao
      escreva ("usuario não encontrado")
   senao
      escreva (N1, N2, N3, N4, NF)
      se (NF >= 5) entao
         escreva ("aprovado!")
      senao
         escreva ("reprovado!")
      fimse
   fimse
*/

var N1, N2, N3, N4, NF, Nome;

N1 = 5
N2 = 7
N3 = 4
N4 = 8
NF = ((N1+N2+N3+N4)/4)
Nome=prompt("Digite Usuario: ")
if (Nome != 'Joao') 
    alert("usuario não encontrado");
else{
    alert("Nota 1: " + N1),
    alert("Nota 2: " + N2),
    alert("Nota 3: " + N3),
    alert("Nota 4: " + N4);
    if (NF >= 5)
        alert("Aprovado: " + NF);
    else
        alert("Reprovado: " + NF);
}