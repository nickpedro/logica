/**
 * Calcular IMC
 * @author pedro
 */
function calcularimc() {
    let peso, altura , imc //variáveis do mesmo tipo
    /* 
        parseFloat converte a String da caixa de texto do forumulário para um tipo númerico
        Float (númerico reais, casas decimais)
        Int (Número inteiros)
        Replace (trocar um caractere por outro)
    */
    peso = parseFloat(frmimc.txtpeso.value.replace(",", "."))
    altura = parseFloat(frmimc.txtaltura.value.replace(",", "."))
    imc= peso/(altura * altura)
    //tofixed(2) -> formatar o resultado em 2 casas decimais
    frmimc.txtResultado.value = imc.toFixed(2)
}