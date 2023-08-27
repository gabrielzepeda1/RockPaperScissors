let player = prompt("What is your name? "); 
let computer = "Computer";


// Function that selects a random computer choice every round
function getComputerChoice() { 
    const choices = ["rock", "paper", "scissors"]
    const randomIndex = Math.floor(Math.random() * 3)
    const selectedChoice = choices[randomIndex]

    return selectedChoice 

}
// This function plays a single round of rock paper scissors
function play(playerSelection, computerSelection) 
{ 

    let winner; 

    console.log("Round Start!") 

    if (!["rock", "paper", "scissors"].includes(playerSelection)) {
    console.log(`You chose: ${playerSelection}`);
    console.log("Invalid choice! Choose between Rock, Paper, or Scissors");
    return play(prompt("What is your choice?").toLowerCase(), computerSelection);
    }
    
    switch (playerSelection) 
    { 
        case "rock": 
            console.log(`You chose: ${playerSelection}`)
            if (computerSelection === "paper") {
                
                console.log(`Computer chose: ${computerSelection}`)
                console.log(`${computerSelection} beats ${playerSelection}! `)
                winner = computer;
            } else if (computerSelection === "scissors") { 
                
                console.log(`Computer chose: ${computerSelection}`)
                console.log(`${playerSelection} beats ${computerSelection}! `)
                winner = player;
            } else { 
                
                console.log(`Computer chose: ${computerSelection}`)
                console.log("No winner! Play again.")
                return play(prompt("What is your choice?").toLowerCase(), getComputerChoice());
            }
            break;
            
        case "paper": 
            console.log(`You chose: ${playerSelection}`)
            if (computerSelection === "scissors") {
                
                console.log(`Computer chose: ${computerSelection}`)
                console.log(`${computerSelection} beats ${playerSelection}! `)
                winner = computer;
            } else if (computerSelection === "rock") { 
                
                console.log(`Computer chose: ${computerSelection}`)
                console.log(`${playerSelection} beats ${computerSelection}! `)
                winner = player;
            } else { 
                
                console.log(`Computer chose: ${computerSelection}`)
                console.log("No winner! Play again.")
                return play(prompt("What is your choice?").toLowerCase(), getComputerChoice());
            }
            break;
            
        case "scissors":
            console.log(`You chose: ${playerSelection}`) 
            if (computerSelection === "rock") {
                
                console.log(`Computer chose: ${computerSelection}`)
                console.log(`${computerSelection} beats ${playerSelection}! `)
                winner = computer;
            } else if (computerSelection === "paper") { 
                
                console.log(`Computer chose: ${computerSelection}`)
                console.log(`${playerSelection} beats ${computerSelection}! `)
                winner = player;
            } else { 
                
                console.log(`Computer chose: ${computerSelection}`)
                console.log("No winner! Play again.")
                return play(prompt("What is your choice?").toLowerCase(), getComputerChoice());
            }
            break;

            default: 
                console.log(`You chose: ${playerSelection}`)
                console.log("Invalid choice! Choose between Rock, Paper, or Scissors")
                return play(prompt("What is your choice?").toLowerCase(), getComputerChoice());
            }
            
        
        return winner;
}

function game() { 
    
    let playerScore = 0; 
    let computerScore = 0; 
    const roundWinners = [];
    let result = "Next Round!"; 

    for(let i = 0; i < 5; i++ ) 
    { 
        let playerSelection = prompt("What is your choice?").toLowerCase();
        let computerSelection = getComputerChoice();
        const winner = play(playerSelection, computerSelection);
        roundWinners.push(winner)
        
        if (winner === player) 
            { 
                playerScore++; 
            } else if (winner === computer) 
            { 
                computerScore++;
            }

            console.log(`The winner of this round is: ${winner}!`);
            console.log(roundWinners);

            if (playerScore === 3) {
                result =`The winner of the game is: ${player}!`;
            } 
            else if (computerScore === 3) {  
                result = `The winner of the game is: ${computer}!`;
            } 
            console.log(result);
    } 
    return result; 
};

game()