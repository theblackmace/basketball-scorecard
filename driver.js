let homeScore = 0
let guestScore = 0

function oneHome(){
    console.log("oneHome() called")
    homeScore++;
    document.getElementById("home-score").textContent = homeScore;
    compareScores()
}

function twoHome(){
    console.log("twoHome() called")
    homeScore+=2
    document.getElementById("home-score").textContent = homeScore
    compareScores()
}

function threeHome(){
    console.log("threeHome() called")
    homeScore+=3
    document.getElementById("home-score").textContent = homeScore
    compareScores()
}


function oneGuest(){
    console.log("oneGuest() called")
    guestScore++
    document.getElementById("guest-score").textContent = guestScore
    compareScores()
}

function twoGuest(){
    console.log("twoGuest() called")
    guestScore+=2
    document.getElementById("guest-score").textContent = guestScore
    compareScores()
}

function threeGuest(){
    console.log("threeGuest() called")
    guestScore+=3
    document.getElementById("guest-score").textContent = guestScore
    compareScores()
}


function compareScores(){
    console.log("compareScores() called")
    if(homeScore>guestScore){
        document.getElementById("home-title").style.color="green"
        document.getElementById("guest-title").style.color="#F94F6D"
    }else if(guestScore>homeScore){
        document.getElementById("home-title").style.color="#F94F6D"
        document.getElementById("guest-title").style.color="green"
    }else{
        document.getElementById("home-title").style.color="#EEEEEE"
        document.getElementById("guest-title").style.color="#EEEEEE"
    }
}

function resetGame(){
    console.log("resetGame() called")
    homeScore = 0
    guestScore = 0
    document.getElementById("home-score").textContent = homeScore
    document.getElementById("guest-score").textContent = guestScore
    
    document.getElementById("home-title").style.color="#EEEEEE"
    document.getElementById("guest-title").style.color="#EEEEEE"

}