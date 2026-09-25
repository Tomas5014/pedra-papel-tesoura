const EMPATE = 0;
const HUMANO_VITORIA = 1;
const COMPUTADOR_VITORIA = -1; 

function getComputerChoice(){
    // Gerar um número aletório entre 0 e 2
    let choice = Math.floor(Math.random() * 3);
    // se 0: return "pedra";
    if (choice == 0){return "pedra"}
    // se 1 return "papel"
    if (choice == 1) {return "papel"}
    // se 2 return "tesoura"   
    if (choice == 2) {return "tesoura"}
    console.log("Erro de lógica em getComputerChoice: Não deveria chegar nessa linha");
}


function playRound(computerChoice, humanChoice){
    let resultado = -1;
    let conteudoTextoResultado = ("Você jogou: " + humanChoice + 
                       "\nComputador jogou: " + computerChoice + 
                       "\n");
    if (humanChoice == computerChoice){
        resultado = EMPATE;
        conteudoTextoResultado += "EMPATOU";
    }
    if (humanChoice == "pedra"){
        if (computerChoice == "papel"){
            resultado = COMPUTADOR_VITORIA;
            conteudoTextoResultado += "PERDEU PLAYBOY!";
        }
        if (computerChoice == "tesoura"){
            resultado = HUMANO_VITORIA;
            conteudoTextoResultado += "DEU SORTE. PARABÉNS PELA VITÓRIA!";
        }
    }
    if (humanChoice == "papel"){
        if (computerChoice == "tesoura"){
            resultado = COMPUTADOR_VITORIA;
            conteudoTextoResultado += "PERDEU PLAYBOY!";
        }
        if (computerChoice == "pedra"){
            resultado = HUMANO_VITORIA;
            conteudoTextoResultado += "DEU SORTE. PARABÉNS PELA VITÓRIA!";
        }
    }
    if (humanChoice == "tesoura"){
        if (computerChoice == "pedra"){
            resultado = COMPUTADOR_VITORIA;
            conteudoTextoResultado += "PERDEU PLAYBOY!";
        }
        if (computerChoice == "papel"){
            resultado = HUMANO_VITORIA;
            conteudoTextoResultado += "DEU SORTE. PARABÉNS PELA VITÓRIA!";
        }
    }
    textoResultado.textContent = conteudoTextoResultado;
    return resultado;
    
}

function playGame(rounds){
    let humanScore = 0;
    let computerScore = 0;

    for(let i = 0; i < rounds; i++){
        computerChoice = getComputerChoice();
        humanChoice = getHumanChoice();
        let win = playRound(computerChoice, humanChoice);
        if (win == 0){humanScore ++};
        if (win == 1){computerScore ++}
    }
    console.log("---PLACAR---\nHumano: " + humanScore + "\nComputador: " + computerScore + "\n------------");
}

btns = document.querySelectorAll("button");
textoResultado = document.querySelector("#resultado");
placar = document.querySelector("#placar");

let humanoContagem = 0;
let computadorContagem = 0;
let variavelResultado = -1;
let rodadas = 0;

btns.forEach ((botao) => {
    botao.addEventListener("click", () =>{
        let computerChoice = getComputerChoice();
        let humanChoice = botao.id;
        variavelResultado = playRound(computerChoice, humanChoice);
        if (variavelResultado == HUMANO_VITORIA) humanoContagem += 1;
        if (variavelResultado == COMPUTADOR_VITORIA) computadorContagem += 1;
        placar.textContent = ("Placar: " + humanoContagem + " pra você. " + computadorContagem + " pro robô.");
        rodadas += 1;
        if (rodadas >= 5){
            if ( computadorContagem > humanoContagem ){
                placar.textContent = "COMPUTADOR VENCE O JOGO!"
            }else{
                if(humanoContagem > computadorContagem){
                    placar.textContent = "HUMANO VENCE O JOGO!"
                }else{
                    placar.textContent = "O JOGO TERMINA EM EMPATE!"
                }
            }
            rodadas = 0;
            humanoContagem = 0;
            computadorContagem = 0;
        }
    });
});
