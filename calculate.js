//Modificando imagem utilizando o DOM.

var etanol,gasolina;

function calcular(){

    etanol = parseFloat(formularioFlex.txtEtanol.value.replace(",","."));
    gasolina = parseFloat(formularioFlex.txtGasolina.value.replace(",",".")); //replace troca os caractere

    if(etanol < 0.7 * gasolina){
        document.getElementById("status").src="Imagens/etanol.png";

    }else{
        document.getElementById("status").src="Imagens/gasolina.png";
    }

}
function resetar(){
    document.getElementById("status").src="Imagens/neutro.png";
    alert("Limpo com Sucesso!")
 }   