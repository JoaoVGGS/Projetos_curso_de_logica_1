var n1, n2, resultado, sinal, sairLoop;
function acaoBotao(){

    do {n1=prompt("Digite o primeiro valor: ")
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
        alert("resultado: "+resultado)
        sairLoop= prompt("Deseja finalizar execução: S/N")
}   while ((sairLoop=="N")||(sairLoop=="n"));
}