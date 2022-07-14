function gritar() {
    alert("Ahhhhhhhhhhhhhhhhhhhhhhhhhh!");
}
function perguntar(){
    var nome;
    nome = prompt("Qual é seu nome?")
    alert("Olá" + nome)
}
function calcular(){
var n1 = document.getElementById("n1").value 
        var n2 = document.getElementById("n2").value
        var n3 = document.getElementById("n3").value

        var media = (parseFloat(n1)+parseFloat(n2)+parseFloat(n3)) / 3;
        alert("A média dos valores é:" + media)
}