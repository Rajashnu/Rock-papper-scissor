//Assinging values to variables
let winMsg = 'Victory';
let loseMsg = 'Defeat';
let tieMsg = 'Tie';

//selecting elements 
let moveDisplays = document.querySelectorAll(".move-display h2");
let moveList = ['Rock', 'Paper', 'Scissors'];
let buttn = document.querySelectorAll("button");
let moves = {};

//Start function
let startGame = () =>{
    document.getElementById("status-head").innerHTML = "Choose";
    for (i = 0; i <buttn.length; i++) {
        buttn[i].removeEventListener("click", startGame);
        buttn[i].addEventListener("click", endGame);
        buttn[i].style.visibility = 'visible';
        buttn[i].innerHTML = moveList[i];
        buttn[i].style.display = 'inline-block';
    }
    // collection of elements
    for (i = 0; i < moveDisplays.length; i++) {
        moveDisplays[i].style.visibility = 'hidden';
    }
}
let endGame = (event) =>{
    let userText = event.target.innerHTML;//assigning variables
    let userMove = moveList.indexOf(userText);
    let compMove = randomMove();
    let moves = calculate(userMove, compMove);
    document.getElementById("status-head").innerHTML = moves["Message"];
    //incrementing index by 2
    for (i = 0; i < buttn.length; i = i + 2) {
        buttn[i].style.visibility = 'hidden';
    }
    document.querySelectorAll("button")[1].innerHTML = "Re-play";
    buttn[1].addEventListener("click", startGame);
    for (i = 0; i < moveDisplays.length; i++) {
        moveDisplays[i].style.visibility = 'visible';
    }
    
    moveDisplays[0].innerHTML = "Your move " + moveList[parseInt(moves["User"])];
    moveDisplays[1].innerHTML = "Computer move " + moveList[parseInt(moves["Computer"])];
}
//random move for computer
let randomMove = () =>{
    return Math.floor(Math.random() * 3);
}

let calculate = (move1, move2) =>{
    if (move1 == move2){
        return {
            "Message" : tieMsg,
            "User": move1,
            "Computer" :move2};
    } else if ((move1 == "0" && move2 == "2") || (move1 == "1" && move2 == "0") || (move1 == "2" && move2 == "1")){
        return {
            "Message": winMsg,
            "User": move1,
            "Computer": move2
        };
    } else{
        return {
            "Message": loseMsg,
            "User": move1,
            "Computer": move2
        };
    }
}

document.addEventListener("onload", startGame());