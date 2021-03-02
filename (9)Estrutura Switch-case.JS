
var n1, n2, resultado, sinal;
function acaoBotao(){
n1=prompt("Digite o primeiro valor: ")
sinal=prompt("Digite a operação do calculo: ")
n2=prompt("Digite o segundo valor: ")

switch (sinal) {
    case "+":
        resultado=parseInt(n1)+parseInt(n2)
        break;
    case "-":
        resultado=parseInt(n1)-parseInt(n2)
        break;  
    case "*":
        resultado=parseInt(n1)*parseInt(n2)
        break;
    case "/":
        resultado=parseInt(n1)/parseInt(n2)
        break;
}

document.getElementById("P1").innerText=resultado
}