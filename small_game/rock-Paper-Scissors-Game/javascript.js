let userScore=0;
let compScore=0;

let userScorePara = document.querySelector("#user-score");
let compScorePara = document.querySelector("#comp-score");


const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
choices.forEach((choice) => {
    choice.addEventListener("click",() => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
    
});

const genCompChoice = () => {
    const options =["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const playGame = (userChoice) => {
    console.log("User Choice = ",userChoice);
    const compChoice = genCompChoice();
    console.log("Computer Choice = ",compChoice);

    if (userChoice === compChoice)
    {
        console.log("Game was Draw.");
        msg.innerText = "Game was Draw ! Play again.";
        msg.style.backgroundColor = "#081b31";
    }
    else{
        if (userChoice ==="rock")
        {
            if (compChoice === "paper")
            {
                console.log("Computer Win");
                compScore++;
                compScorePara.innerText = compScore;
                 msg.innerText = `Computer Win ! ${compChoice} beats ${userChoice} `;
                 msg.style.backgroundColor = "red";
            }
            else
            {
                 console.log("You Win");
                 userScore++;
                userScorePara.innerText = userScore;
                msg.innerText = `You Win ! ${userChoice} beats ${compChoice} `;
                  msg.style.backgroundColor = "green";
            }

            
        }

        if (userChoice ==="paper")
        {
            if (compChoice === "rock")
            {
                console.log("You Win");
                 userScore++;
                userScorePara.innerText = userScore;
                msg.innerText = `You Win ! ${userChoice} beats ${compChoice} `;
                 msg.style.backgroundColor = "green";
            }
            else
            {
                 console.log("Computer Win");
                  compScore++;
                compScorePara.innerText = compScore;
                  msg.innerText = `Computer Win ! ${compChoice} beats ${userChoice} `;
                  msg.style.backgroundColor = "red";
            }

            
        }
        if (userChoice ==="scissors")
        {
            if (compChoice === "paper")
            {
                console.log("You Win");
                 userScore++;
                userScorePara.innerText = userScore;
                 msg.innerText = `You Win ! ${userChoice} beats ${compChoice} `;
                 msg.style.backgroundColor = "green";
                 
            }
            else
            {
                 console.log("Computer Win");
                  compScore++;
                compScorePara.innerText = compScore;
                 msg.innerText = `Computer Win ! ${compChoice} beats ${userChoice} `;
                  msg.style.backgroundColor = "red";
            }

            
        }
    }
}
