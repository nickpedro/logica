/**
 * @author Pedro
 */
//let onde = window.location.pathname;
function jogar(){
    if(document.getElementById("Pedra").checked == false  && document.getElementById("papel").checked == false && document.getElementById("tesoura").checked == false){
        alert("Selecione uma opção");
    } else{
        let sorteio = Math.floor(Math.random() * 3);
        switch(sorteio){
            case 0:
            document.getElementById("pc").src="pcpedra.png"
            break
            case 1:
            document.getElementById("pc").src="pcpapel.png"
            break
            case 2:
            document.getElementById("pc").src="pctesoura.png"
            break
        }
        //verificar vencedor ou declarar empate
        if ((document.getElementById("Pedra").checked == true && sorteio == 0) || 
        (document.getElementById("papel").checked == true && sorteio == 1) || 
        (document.getElementById("tesoura").checked == true && sorteio == 2)){
            document.getElementById("placar").innerText="Empate";
        } else if 
        ((document.getElementById("Pedra").checked == true && sorteio == 2) || 
        (document.getElementById("papel").checked == true && sorteio == 0) || 
        (document.getElementById("tesoura").checked == true && sorteio == 1))
        {
            document.getElementById("placar").innerText="Você Venceu";
        } else
        {
            document.getElementById("placar").innerText="Computador venceu";
        }
        
    }

}
function resetar(){
    document.getElementById("pc").src="pc.png";
    document.getElementById("placar").innerHTML="";
}