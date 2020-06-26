let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById('user-score')
const compScore_span = document.getElementById('comp-score')
const scoreBoard = document.querySelector('.score-board')
const result = document.querySelector('.result > p ')
const rock =  document.getElementById('r')
const scissors = document.getElementById('s')
const paper = document.getElementById('p')                             

function getComputerChoice(){
    const choices = ['r', 's', 'p'];
    const randomChoice = Math.floor(Math.random() * 3);
    return choices[randomChoice];
}
//console.log(getComputerChoice())

function win(){
    userScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result.innerHTML = 'YOU WIN!';
}

function lose() {
    //console.log('LOST');
    compScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result.innerHTML = 'YOU LOSE!';
}




function draw(){
    //console.log('DRAW')
     userScore_span.innerHTML = userScore;
     compScore_span.innerHTML = compScore;
     result.innerHTML = 'DRAW!';
}

function game(userChoice) {
    //console.log('this is your choice ' + userChoice)   s
    const computerChoice = getComputerChoice();
    //console.log('your choice ' + userChoice)
    //console.log('computer choice ' + computerChoice)
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win();
            break;

        case "rp":
        case "ps":
        case "sr":
            lose();
            break;

        case "rr":
        case "pp":
        case "ss":
            draw();
            break;
        }
    }

rock.addEventListener('click', function(){
    //console.log('your choice is rock');
    game('r')
});
scissors.addEventListener('click', function(){
   //console.log('your choice is scissors')
    game('s')
});
paper.addEventListener('click', function(){
    //console.log('your choice is paper')
    game('p')
});
