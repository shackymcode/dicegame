let dice1 = new Image ('./img/dice1.png');
let dice2 = new Image ('./img/dice2.png');
let dice3 = new Image ('./img/dice3.png');
let dice4 = new Image ('./img/dice4.png');
let dice5 = new Image ('./img/dice5.png');
let dice6 = new Image ('./img/dice6.png');

document.getElementById("scorecard").innerHTML = "";
    let score = 0;


    function rolldice() {
    
        let dice = Math.floor(Math.random() * 6) + 1;
        
    

    if (dice == 1 ) {
        document.getElementById("diceImg").src = "./img/dice1.png";
        document.getElementById("scorecard").innerHTML = score;
        document.getElementById("rolldice").innerHTML = "You lost the game by rolling a 1!";
        document.getElementById("body").style.background = "#B22222";
        score += 1;
        
    
    } else if (dice == 2){
       
        document.getElementById("diceImg").src = "./img/dice2.png";
        document.getElementById("scorecard").innerHTML = score;
        score += 2;
        

    } else if (dice == 3){

        document.getElementById("diceImg").src = "./img/dice3.png";
        document.getElementById("scorecard").innerHTML = score;
        score += 3;
    } else if (dice == 4){
       
        document.getElementById("diceImg").src = "./img/dice4.png";
        document.getElementById("scorecard").innerHTML = score;
        score += 4;
    } else if (dice == 5){
        
        document.getElementById("diceImg").src = "./img/dice5.png";
        document.getElementById("scorecard").innerHTML = score;
        score += 5;
    } else if (dice == 6){
            
        document.getElementById("diceImg").src = "./img/dice6.png";
        document.getElementById("scorecard").innerHTML = score;
        score += 6;
    
        } else {
       
            console.log("error")
        }

    if (score > 19) {
        document.getElementById("rolldice").innerHTML = "You've WON!!!";
        document.getElementById("body").style.background = "#03c162";
        score = 0;

    }
    }