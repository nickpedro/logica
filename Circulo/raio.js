/**
 *Raio da circunferencia
 *  @author Pedro 
 */

 function calcularCirc() {
     let Raio
     Raio = parseFloat(frmRaio.vlrRaio.value.replace(",","."))
     Circunferencia = 2 * Math.PI * Raio
     frmRaio.vlrResultado.value = Circunferencia

 }