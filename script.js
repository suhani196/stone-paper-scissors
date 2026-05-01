let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara =document.querySelector("#user-Score");
const compScorePara =document.querySelector("#comp-Score");

const genCompChoice = () => {
    const options =["Rock","Paper","Scissors"];
    //rock,paper,scissors 
    const randIdx = Math.floor(Math.random () * 3);
    return options[randIdx];
}

const drawGame = () => {
    msg.innerText = "game was drow";
};

const showWinner =(userWin,userChoice,compChoice) => {
    if(userWin){
        userScore++;
       userScorePara.innerText = userScore;
      msg.innerText = `YOU WIN ! ${userChoice} beats${compChoice}`;
}else{
         compScore++;
       compScorePara.innerText = compScore;
     msg.innerText = `!lose ${compChoice} beats ${userChoice}`;
}
}
const playGame =(userChoice) =>{
        console.log("user Choice =",userChoice);
        //genrate computer choice
        const compChoice = genCompChoice();
         console.log("comp Choice =",compChoice);

         if (userChoice === compChoice) { 
            //drow game
            drawGame();
         }else{
            let userWin =true;
            if (userChoice ==="Rock") {
                //scissores,paper
                userWin =  compChoice ==="Paper" ? false:true;
            } else if(userChoice =="Paper") {
                //rock ,scissors
                 userWin = compChoice ==="Scissors" ? false:true;
            } else {
               userWin =  compChoice ==="Rock" ? false:true;
            }
            showWinner(userWin,userChoice,compChoice);
         }
    };
choices.forEach((choice)=>{
    choice.addEventListener("click",() =>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
