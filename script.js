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

function getHumanChoice(){
    let humanChoice = prompt("Insira: \"pedra\", \"papel\" ou \"tesoura\"");
    humanChoice = humanChoice.toLowerCase();
    while (humanChoice != "pedra" && humanChoice != "papel" && humanChoice != "tesoura"){
        humanChoice = prompt("Atente-se a grafia. Deve ser  \"pedra\", \"papel\" ou \"tesoura\"");
        humanChoice = humanChoice.toLowerCase();
    }
    return humanChoice;
}

function playRound(computerChoice, humanChoice){
    // código para retornar quem ganhou: 0 -> humano; 1 -> maquina; 2 -> empate
    if (humanChoice == computerChoice){
        // empate
        console.log("Empatou! " + humanChoice + " empata com " + computerChoice)
        return 2;
    }
    if (humanChoice == "pedra"){
        if (computerChoice == "papel"){
            console.log("Voce perdeu! " + humanChoice + " perde pra " + computerChoice);
            return 1;
        }
        if (computerChoice == "tesoura"){
            console.log("Você ganhou! " + humanChoice + " ganha de " + computerChoice);
            return 0;
        }
    }
    if (humanChoice == "papel"){
        if (computerChoice == "tesoura"){
            console.log("Voce perdeu! " + humanChoice + " perde pra " + computerChoice);
            return 1;
        }
        if (computerChoice == "pedra"){
            console.log("Você ganhou! " + humanChoice + " ganha de " + computerChoice);
            return 0;
        }
    }
    if (humanChoice == "tesoura"){
        if (computerChoice == "pedra"){
            console.log("Voce perdeu! " + humanChoice + " perde pra " + computerChoice);
            return 1;
        }
        if (computerChoice == "papel"){
            console.log("Você ganhou! " + humanChoice + " ganha de " + computerChoice);
            return 0;
        }
    }
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

playGame(5);