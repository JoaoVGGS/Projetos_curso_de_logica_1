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
    document.getElementById("P1").innerText = ("Nota 1: " + N1),
    document.getElementById("P2").innerText = ("Nota 2: " + N2),
    document.getElementById("P3").innerText = ("Nota 3: " + N3),
    document.getElementById("P4").innerText = ("Nota 4: " + N4);
    if (NF >= 5)
    document.getElementById("P5").innerText =("Aprovado: " + NF);
    else
    document.getElementById("P5").innerText =("Reprovado: " + NF);
}
