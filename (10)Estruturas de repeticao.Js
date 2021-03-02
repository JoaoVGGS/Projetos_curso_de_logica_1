var contador, fatorial, numero;
function acaoBotao(){
alert("Calculadora de fatorial:")
numero=prompt("Digite o número a ser calculado: ")
fatorial=1
for (contador = 1; contador <= numero; contador++)
    fatorial=fatorial*contador   
    document.getElementById("P1").innerText= "resultado do calculo de fatorial " + numero + " = " + fatorial;
}
