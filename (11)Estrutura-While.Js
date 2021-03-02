var limite, contador, nome, idade;
function acaoBotao (){

limite=prompt("Digite a quantidade de vezes que o programa deve ser executado: ")
contador=0
while (contador<limite){
    nome=prompt("Digite o nome da pessoa: ")
    idade=prompt("digite a idadde de "+nome)
    if (idade>18)
        alert(nome + " você é maior de idade")
    else
        alert(nome + " você é menor de idade")
    contador++
} 
}