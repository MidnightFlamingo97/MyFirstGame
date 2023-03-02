//GENERAL VARIABLES
let gamePaused = false;
let messageDisplaying = false;
let timmyHasKey = false;
let doorLocked = true;

//CHARACTERS & STATS
const timmy = {
    maxHealth: 10,
    health: 10,
    attack: 1,
    defence: 5
}

const zombie = {
    name:"Zombie",
    image:"./assets/characters/zom.png",
    health: 10,
    attack: 1,
    defence: 5
}

const skeleton = {
    name:"Skeleton",
    image:"./assets/characters/skele.png",
    health: 10,
    attack: 1,
    defence: 5
}

const witch = {
    name:"Witch",
    image:"./assets/characters/witch.png",
    health: 10,
    attack: 1,
    defence: 5
}

//MOVEMENT
let timmyHorizontalPosition = 1;
let timmyVerticalPosition = 1;
let timmyCanMoveUp = false;
let timmyCanMoveDown = false;
let timmyCanMoveLeft = false;
let timmyCanMoveRight = false;
//Takes keyboard input (U,D,L,R functions) & SPACE (Ineract or continue encounter)
document.onkeydown = checkKey;
function checkKey(e) {
    e = e || window.event;
    if (e.keyCode == '38') {
        timmyUp();
    }
    else if (e.keyCode == '40') {
        timmyDown();
    }
    else if (e.keyCode == '37') {
        timmyLeft();
    }
    else if (e.keyCode == '39') {
        timmyRight();
    }
    else if (e.keyCode == '32') {
        interact();
        continueEncounter();
    }
}
//Check if can move first, updates position vars, then refresh position display
function timmyUp () {
    checkIfMovementPossible();
    if (timmyCanMoveUp) {
        timmyVerticalPosition -= 1;
        updateTimmyPosition();
    }
}
function timmyDown () {
    checkIfMovementPossible();
    if (timmyCanMoveDown) {
        timmyVerticalPosition += 1;
        updateTimmyPosition();
    }
}
function timmyLeft () {
    checkIfMovementPossible();
    if (timmyCanMoveLeft) {
        timmyHorizontalPosition -= 1;
        updateTimmyPosition();
    }
}
function timmyRight () {
    checkIfMovementPossible();
    if (timmyCanMoveRight) {
        timmyHorizontalPosition += 1;
        updateTimmyPosition();
    }
}
//Checks if player can move from current position
function checkIfMovementPossible () {
    if (gamePaused === false) {
        //////////////UP//////////////
        if (timmyHorizontalPosition === 1) {
            if(timmyVerticalPosition === 1) {
                timmyCanMoveUp = false;
            } else {
                timmyCanMoveUp = true;
            }
        }
        if (timmyHorizontalPosition === 2) {
            if(timmyVerticalPosition === 1) {
                timmyCanMoveUp = false;
            } else {
                timmyCanMoveUp = true;
            }
        }
        if (timmyHorizontalPosition === 3) {
            if (timmyVerticalPosition === 1) {
                timmyCanMoveUp = false;
            } else if (timmyVerticalPosition === 17) {
                timmyCanMoveUp = false;
            } else {
                timmyCanMoveUp = true;
            }
        }
        if (timmyHorizontalPosition === 4) {
            if (timmyVerticalPosition === 1) {
                timmyCanMoveUp = false;
            } else if (timmyVerticalPosition === 11) {
                timmyCanMoveUp = false;
            } else {
                timmyCanMoveUp = true;
            }
        }
        if (timmyHorizontalPosition === 5) {
            if (timmyVerticalPosition === 8) {
                timmyCanMoveUp = false;
            } else if (timmyVerticalPosition === 11) {
                timmyCanMoveUp = false;
            } else {
                timmyCanMoveUp = true;
            }
        }
        if (timmyHorizontalPosition === 6) {
            if (timmyVerticalPosition === 1) {
                timmyCanMoveUp = false;
            } else if (timmyVerticalPosition === 8) {
                timmyCanMoveUp = false;
            } else if (timmyVerticalPosition === 11) {
                timmyCanMoveUp = false;
            } else {
                timmyCanMoveUp = true;
            }
        }
        if (timmyHorizontalPosition === 7) {
            if (timmyVerticalPosition === 1) {
                timmyCanMoveUp = false;
            } else if (timmyVerticalPosition === 8) {
                timmyCanMoveUp = false;
            } else if (timmyVerticalPosition === 11) {
                timmyCanMoveUp = false;
            } else {
                timmyCanMoveUp = true;
            }
        }
        if (timmyHorizontalPosition === 8) {
            if (timmyVerticalPosition === 1) {
                timmyCanMoveUp = false;
            } else if (timmyVerticalPosition === 8) {
                timmyCanMoveUp = false;
            } else if (timmyVerticalPosition === 11) {
                timmyCanMoveUp = false;
            } else {
                timmyCanMoveUp = true;
            }
        }
        if (timmyHorizontalPosition === 9) {
            if (timmyVerticalPosition === 1) {
                timmyCanMoveUp = false;
            } else if (timmyVerticalPosition === 8) {
                timmyCanMoveUp = false;
            } else {
                timmyCanMoveUp = true;
            }
        }
        if (timmyHorizontalPosition === 10) {
            if (timmyVerticalPosition === 1) {
                timmyCanMoveUp = false;
            } else if (timmyVerticalPosition === 15) {
                timmyCanMoveUp = false;
            } else {
                timmyCanMoveUp = true;
            }
        }
        if (timmyHorizontalPosition === 11) {
            if (timmyVerticalPosition === 1) {
                timmyCanMoveUp = false;
            } else if (timmyVerticalPosition === 15) {
                timmyCanMoveUp = false;
            } else {
                timmyCanMoveUp = true;
            }
        }
        if (timmyHorizontalPosition === 12) {
            if (timmyVerticalPosition === 1) {
                timmyCanMoveUp = false;
            } else if (timmyVerticalPosition === 11) {
                timmyCanMoveUp = false;
            } else {
                timmyCanMoveUp = true;
            }
        }
        if (timmyHorizontalPosition === 13) {
            if (timmyVerticalPosition === 1) {
                timmyCanMoveUp = false;
            } else if (timmyVerticalPosition === 11) {
                timmyCanMoveUp = false;
            } else {
                timmyCanMoveUp = true;
            }
        }
        if (timmyHorizontalPosition === 14) {
            if (timmyVerticalPosition === 1) {
                timmyCanMoveUp = false;
            } else if (timmyVerticalPosition === 8) {
                timmyCanMoveUp = false;
            } else if (timmyVerticalPosition === 11) {
                timmyCanMoveUp = false;
            } else if (timmyVerticalPosition === 15) {
                timmyCanMoveUp = false;
            } else {
                timmyCanMoveUp = true;
            }
        }
        if (timmyHorizontalPosition === 15) {
            if (timmyVerticalPosition === 1) {
                timmyCanMoveUp = false;
            } else if (timmyVerticalPosition === 5) {
                timmyCanMoveUp = false;
            } else {
                timmyCanMoveUp = true;
            }
        }
        if (timmyHorizontalPosition === 16) {
            if (timmyVerticalPosition === 8) {
                timmyCanMoveUp = false;
            } else if (timmyVerticalPosition === 15) {
                timmyCanMoveUp = false;
            } else {
                timmyCanMoveUp = true;
            }
        }
        if (timmyHorizontalPosition === 17) {
            if (timmyVerticalPosition === 1) {
                timmyCanMoveUp = false;
            } else if (timmyVerticalPosition === 7) {
                timmyCanMoveUp = false;
            } else if (timmyVerticalPosition === 15) {
                timmyCanMoveUp = false;
            } else {
                timmyCanMoveUp = true;
            }
        }
        if (timmyHorizontalPosition === 18) {
            if (timmyVerticalPosition === 1) {
                timmyCanMoveUp = false;
            } else if (timmyVerticalPosition === 15) {
                timmyCanMoveUp = false;
            } else {
                timmyCanMoveUp = true;
            }
        }
        if (timmyHorizontalPosition === 19) {
            if (timmyVerticalPosition === 1) {
                timmyCanMoveUp = false;
            } else if (timmyVerticalPosition === 7) {
                timmyCanMoveUp = false;
            } else if (timmyVerticalPosition === 15) {
                timmyCanMoveUp = false;
            } else {
                timmyCanMoveUp = true;
            }
        }
        if (timmyHorizontalPosition === 20) {
            if (timmyVerticalPosition === 2) {
                timmyCanMoveUp = false;
            } else if (timmyVerticalPosition === 17) {
                timmyCanMoveUp = false;
            } else {
                timmyCanMoveUp = true;
            }
        }
        if (timmyHorizontalPosition === 21) {
            if(timmyVerticalPosition === 1) {
                timmyCanMoveUp = false;
            } else {
                timmyCanMoveUp = true;
            }
        }
        if (timmyHorizontalPosition === 22) {
            if(timmyVerticalPosition === 1) {
                timmyCanMoveUp = false;
            } else {
                timmyCanMoveUp = true;
            }
        }
        //////////////DOWN//////////////
        if (timmyHorizontalPosition === 1) {
            if(timmyVerticalPosition === 18) {
                timmyCanMoveDown = false;
            } else {
                timmyCanMoveDown = true;
            }
        }
        if (timmyHorizontalPosition === 2) {
            if(timmyVerticalPosition === 18) {
                timmyCanMoveDown = false;
            } else {
                timmyCanMoveDown = true;
            }
        }
        if (timmyHorizontalPosition === 3) {
            if (timmyVerticalPosition === 18) {
                timmyCanMoveDown = false;
            } else if (timmyVerticalPosition === 9) {
                timmyCanMoveDown = false;
            } else {
                timmyCanMoveDown = true;
            }
        }
        if (timmyHorizontalPosition === 4) {
            if (timmyVerticalPosition === 18) {
                timmyCanMoveDown = false;
            } else if (timmyVerticalPosition === 9) {
                timmyCanMoveDown = false;
            } else {
                timmyCanMoveDown = true;
            }
        }
        if (timmyHorizontalPosition === 5) {
            if (timmyVerticalPosition === 18) {
                timmyCanMoveDown = false;
            } else if (timmyVerticalPosition === 9) {
                timmyCanMoveDown = false;
            } else {
                timmyCanMoveDown = true;
            }
        }
        if (timmyHorizontalPosition === 6) {
            if (timmyVerticalPosition === 18) {
                timmyCanMoveDown = false;
            } else if (timmyVerticalPosition === 9) {
                timmyCanMoveDown = false;
            } else if (timmyVerticalPosition === 6) {
                timmyCanMoveDown = false;
            } else {
                timmyCanMoveDown = true;
            }
        }
        if (timmyHorizontalPosition === 7) {
            if (timmyVerticalPosition === 18) {
                timmyCanMoveDown = false;
            } else if (timmyVerticalPosition === 9) {
                timmyCanMoveDown = false;
            } else if (timmyVerticalPosition === 6) {
                timmyCanMoveDown = false;
            } else {
                timmyCanMoveDown = true;
            }
        }
        if (timmyHorizontalPosition === 8) {
            if (timmyVerticalPosition === 18) {
                timmyCanMoveDown = false;
            } else if (timmyVerticalPosition === 9) {
                timmyCanMoveDown = false;
            } else if (timmyVerticalPosition === 6) {
                timmyCanMoveDown = false;
            } else {
                timmyCanMoveDown = true;
            }
        }
        if (timmyHorizontalPosition === 9) {
            if (timmyVerticalPosition === 9) {
                timmyCanMoveDown = false;
            } else if (timmyVerticalPosition === 2) {
                timmyCanMoveDown = false;
            } else {
                timmyCanMoveDown = true;
            }
        }
        if (timmyHorizontalPosition === 10) {
            if (timmyVerticalPosition === 18) {
                timmyCanMoveDown = false;
            } else if (timmyVerticalPosition === 13) {
                timmyCanMoveDown = false;
            } else {
                timmyCanMoveDown = true;
            }
        }
        if (timmyHorizontalPosition === 11) {
            if (timmyVerticalPosition === 18) {
                timmyCanMoveDown = false;
            } else if (timmyVerticalPosition === 9) {
                timmyCanMoveDown = false;
            } else {
                timmyCanMoveDown = true;
            }
        }
        if (timmyHorizontalPosition === 12) {
            if (timmyVerticalPosition === 18) {
                timmyCanMoveDown = false;
            } else if (timmyVerticalPosition === 9) {
                timmyCanMoveDown = false;
            } else {
                timmyCanMoveDown = true;
            }
        }
        if (timmyHorizontalPosition === 13) {
            if (timmyVerticalPosition === 18) {
                timmyCanMoveDown = false;
            } else if (timmyVerticalPosition === 9) {
                timmyCanMoveDown = false;
            } else {
                timmyCanMoveDown = true;
            }
        }
        if (timmyHorizontalPosition === 14) {
            if (timmyVerticalPosition === 18) {
                timmyCanMoveDown = false;
            } else if (timmyVerticalPosition === 13) {
                timmyCanMoveDown = false;
            } else if (timmyVerticalPosition === 9) {
                timmyCanMoveDown = false;
            } else if (timmyVerticalPosition === 3) {
                timmyCanMoveDown = false;
            } else {
                timmyCanMoveDown = true;
            }
        }
        if (timmyHorizontalPosition === 15) {
            if (timmyVerticalPosition === 13) {
                timmyCanMoveDown = false;
            } else if (timmyVerticalPosition === 3) {
                timmyCanMoveDown = false;
            } else {
                timmyCanMoveDown = true;
            }
        }
        if (timmyHorizontalPosition === 16) {
            if (timmyVerticalPosition === 18) {
                timmyCanMoveDown = false;
            } else if (timmyVerticalPosition === 13) {
                timmyCanMoveDown = false;
            } else {
                timmyCanMoveDown = true;
            }
        }
        if (timmyHorizontalPosition === 17) {
            if (timmyVerticalPosition === 18) {
                timmyCanMoveDown = false;
            } else if (timmyVerticalPosition === 9) {
                timmyCanMoveDown = false;
            } else if (timmyVerticalPosition === 5) {
                timmyCanMoveDown = false;
            } else {
                timmyCanMoveDown = true;
            }
        }
        if (timmyHorizontalPosition === 18) {
            if (timmyVerticalPosition === 18) {
                timmyCanMoveDown = false;
            } else if (timmyVerticalPosition === 13) {
                timmyCanMoveDown = false;
            } else {
                timmyCanMoveDown = true;
            }
        }
        if (timmyHorizontalPosition === 19) {
            if (timmyVerticalPosition === 18) {
                timmyCanMoveDown = false;
            } else if (timmyVerticalPosition === 13) {
                timmyCanMoveDown = false;
            } else if (timmyVerticalPosition === 5) {
                timmyCanMoveDown = false;
            } else {
                timmyCanMoveDown = true;
            }
        }
        if (timmyHorizontalPosition === 20) {
            if (timmyVerticalPosition === 18) {
                timmyCanMoveDown = false;
            } else if (timmyVerticalPosition === 2) {
                timmyCanMoveDown = false;
            } else {
                timmyCanMoveDown = true;
            }
        }
        if (timmyHorizontalPosition === 21) {
            if(timmyVerticalPosition === 18) {
                timmyCanMoveDown = false;
            } else {
                timmyCanMoveDown = true;
            }
        }
        if (timmyHorizontalPosition === 22) {
            if(timmyVerticalPosition === 18) {
                timmyCanMoveDown = false;
            } else {
                timmyCanMoveDown = true;
            }
        }
        //////////////LEFT//////////////
        if (timmyVerticalPosition === 1) {
            if (timmyHorizontalPosition === 1) {
                timmyCanMoveLeft = false;
            } else if (timmyHorizontalPosition === 6) {
                timmyCanMoveLeft = false;
            } else if (timmyHorizontalPosition === 17) {
                timmyCanMoveLeft = false;
            } else if (timmyHorizontalPosition === 21) {
                timmyCanMoveLeft = false;
            } else {
                timmyCanMoveLeft = true;
            }
        }
        if (timmyVerticalPosition === 2) {
            if (timmyHorizontalPosition === 1) {
                timmyCanMoveLeft = false;
            } else if (timmyHorizontalPosition === 6) {
                timmyCanMoveLeft = false;
            } else if (timmyHorizontalPosition === 17) {
                timmyCanMoveLeft = false;
            } else {
                timmyCanMoveLeft = true;
            }
        }
        if (timmyVerticalPosition === 3) {
            if (timmyHorizontalPosition === 1) {
                timmyCanMoveLeft = false;
            } else if (timmyHorizontalPosition === 6) {
                timmyCanMoveLeft = false;
            } else if (timmyHorizontalPosition === 10) {
                timmyCanMoveLeft = false;
            } else if (timmyHorizontalPosition === 17) {
                timmyCanMoveLeft = false;
            } else if (timmyHorizontalPosition === 21) {
                timmyCanMoveLeft = false;
            } else {
                timmyCanMoveLeft = true;
            }
        }
        if (timmyVerticalPosition === 4) {
            if (timmyHorizontalPosition === 1) {
                timmyCanMoveLeft = false;
            } else if (timmyHorizontalPosition === 6) {
                timmyCanMoveLeft = false;
            } else if (timmyHorizontalPosition === 10) {
                timmyCanMoveLeft = false;
            } else if (timmyHorizontalPosition === 17) {
                timmyCanMoveLeft = false;
            } else if (timmyHorizontalPosition === 21) {
                timmyCanMoveLeft = false;
            } else {
                timmyCanMoveLeft = true;
            }
        }
        if (timmyVerticalPosition === 5) {
            if (timmyHorizontalPosition === 1) {
                timmyCanMoveLeft = false;
            } else if (timmyHorizontalPosition === 6) {
                timmyCanMoveLeft = false;
            } else if (timmyHorizontalPosition === 10) {
                timmyCanMoveLeft = false;
            } else if (timmyHorizontalPosition === 15) {
                timmyCanMoveLeft = false;
            } else if (timmyHorizontalPosition === 17) {
                timmyCanMoveLeft = false;
            } else if (timmyHorizontalPosition === 21) {
                timmyCanMoveLeft = false;
            } else {
                timmyCanMoveLeft = true;
            }
        }
        if (timmyVerticalPosition === 6) {
            if (timmyHorizontalPosition === 1) {
                timmyCanMoveLeft = false;
            } else if (timmyHorizontalPosition === 6) {
                timmyCanMoveLeft = false;
            } else if (timmyHorizontalPosition === 10) {
                timmyCanMoveLeft = false;
            } else if (timmyHorizontalPosition === 15) {
                timmyCanMoveLeft = false;
            } else if (timmyHorizontalPosition === 18) {
                timmyCanMoveLeft = false;
            } else if (timmyHorizontalPosition === 21) {
                timmyCanMoveLeft = false;
            } else {
                timmyCanMoveLeft = true;
            }
        }
        if (timmyVerticalPosition === 7) {
            if (timmyHorizontalPosition === 1) {
                timmyCanMoveLeft = false;
            } else if (timmyHorizontalPosition === 10) {
                timmyCanMoveLeft = false;
            } else if (timmyHorizontalPosition === 15) {
                timmyCanMoveLeft = false;
            } else if (timmyHorizontalPosition === 17) {
                timmyCanMoveLeft = false;
            } else if (timmyHorizontalPosition === 21) {
                timmyCanMoveLeft = false;
            } else {
                timmyCanMoveLeft = true;
            }
        }
        if (timmyVerticalPosition === 8) {
            if (timmyHorizontalPosition === 1) {
                timmyCanMoveLeft = false;
            } else if (timmyHorizontalPosition === 21) {
                timmyCanMoveLeft = false;
            } else {
                timmyCanMoveLeft = true;
            }
        }
        if (timmyVerticalPosition === 9) {
            if (timmyHorizontalPosition === 1) {
                timmyCanMoveLeft = false;
            } else if (timmyHorizontalPosition === 21) {
                timmyCanMoveLeft = false;
            } else {
                timmyCanMoveLeft = true;
            }
        }
        if (timmyVerticalPosition === 10) {
            if (timmyHorizontalPosition === 1) {
                timmyCanMoveLeft = false;
            } else if (timmyHorizontalPosition === 10) {
                timmyCanMoveLeft = false;
            } else if (timmyHorizontalPosition === 15) {
                timmyCanMoveLeft = false;
            } else if (timmyHorizontalPosition === 18) {
                timmyCanMoveLeft = false;
            } else if (timmyHorizontalPosition === 21) {
                timmyCanMoveLeft = false;
            } else {
                timmyCanMoveLeft = true;
            }
        }
        if (timmyVerticalPosition === 11) {
            if (timmyHorizontalPosition === 1) {
                timmyCanMoveLeft = false;
            } else if (timmyHorizontalPosition === 4) {
                timmyCanMoveLeft = false;
            } else if (timmyHorizontalPosition === 10) {
                timmyCanMoveLeft = false;
            } else if (timmyHorizontalPosition === 12) {
                timmyCanMoveLeft = false;
            } else if (timmyHorizontalPosition === 18) {
                timmyCanMoveLeft = false;
            } else if (timmyHorizontalPosition === 21) {
                timmyCanMoveLeft = false;
            } else {
                timmyCanMoveLeft = true;
            }
        }
        if (timmyVerticalPosition === 12) {
            if (timmyHorizontalPosition === 1) {
                timmyCanMoveLeft = false;
            } else if (timmyHorizontalPosition === 4) {
                timmyCanMoveLeft = false;
            } else if (timmyHorizontalPosition === 10) {
                timmyCanMoveLeft = false;
            } else if (timmyHorizontalPosition === 12) {
                timmyCanMoveLeft = false;
            } else if (timmyHorizontalPosition === 18) {
                timmyCanMoveLeft = false;
            } else if (timmyHorizontalPosition === 21) {
                timmyCanMoveLeft = false;
            } else {
                timmyCanMoveLeft = true;
            }
        }
        if (timmyVerticalPosition === 13) {
            if (timmyHorizontalPosition === 1) {
                timmyCanMoveLeft = false;
            } else if (timmyHorizontalPosition === 4) {
                timmyCanMoveLeft = false;
            } else if (timmyHorizontalPosition === 10) {
                timmyCanMoveLeft = false;
            } else if (timmyHorizontalPosition === 12) {
                timmyCanMoveLeft = false;
            } else if (timmyHorizontalPosition === 18) {
                timmyCanMoveLeft = false;
            } else if (timmyHorizontalPosition === 21) {
                timmyCanMoveLeft = false;
            } else {
                timmyCanMoveLeft = true;
            }
        }
        if (timmyVerticalPosition === 14) {
            if (timmyHorizontalPosition === 1) {
                timmyCanMoveLeft = false;
            } else if (timmyHorizontalPosition === 4) {
                timmyCanMoveLeft = false;
            } else if (timmyHorizontalPosition === 12) {
                timmyCanMoveLeft = false;
            } else if (timmyHorizontalPosition === 21) {
                timmyCanMoveLeft = false;
            } else {
                timmyCanMoveLeft = true;
            }
        }
        if (timmyVerticalPosition === 15) {
            if (timmyHorizontalPosition === 1) {
                timmyCanMoveLeft = false;
            } else if (timmyHorizontalPosition === 4) {
                timmyCanMoveLeft = false;
            } else if (timmyHorizontalPosition === 10) {
                timmyCanMoveLeft = false;
            } else if (timmyHorizontalPosition === 16) {
                timmyCanMoveLeft = false;
            } else if (timmyHorizontalPosition === 21) {
                timmyCanMoveLeft = false;
            } else {
                timmyCanMoveLeft = true;
            }
        }
        if (timmyVerticalPosition === 16) {
            if (timmyHorizontalPosition === 1) {
                timmyCanMoveLeft = false;
            } else if (timmyHorizontalPosition === 4) {
                timmyCanMoveLeft = false;
            } else if (timmyHorizontalPosition === 10) {
                timmyCanMoveLeft = false;
            } else if (timmyHorizontalPosition === 16) {
                timmyCanMoveLeft = false;
            } else if (timmyHorizontalPosition === 21) {
                timmyCanMoveLeft = false;
            } else {
                timmyCanMoveLeft = true;
            }
        }
        if (timmyVerticalPosition === 17) {
            if (timmyHorizontalPosition === 1) {
                timmyCanMoveLeft = false;
            } else if (timmyHorizontalPosition === 10) {
                timmyCanMoveLeft = false;
            } else if (timmyHorizontalPosition === 16) {
                timmyCanMoveLeft = false;
            } else {
                timmyCanMoveLeft = true;
            }
        }
        if (timmyVerticalPosition === 18) {
            if (timmyHorizontalPosition === 1) {
                timmyCanMoveLeft = false;
            } else if (timmyHorizontalPosition === 10) {
                timmyCanMoveLeft = false;
            } else if (timmyHorizontalPosition === 16) {
                timmyCanMoveLeft = false;
            } else {
                timmyCanMoveLeft = true;
            }
        }
        //////////////RIGHT//////////////
        if (timmyVerticalPosition === 1) {
            if (timmyHorizontalPosition === 22) {
                timmyCanMoveRight = false;
            } else if (timmyHorizontalPosition === 4) {
                timmyCanMoveRight = false;
            } else if (timmyHorizontalPosition === 15) {
                timmyCanMoveRight = false;
            } else if (timmyHorizontalPosition === 19) {
                timmyCanMoveRight = false;
            } else {
                timmyCanMoveRight = true;
            }
        }
        if (timmyVerticalPosition === 2) {
            if (timmyHorizontalPosition === 22) {
                timmyCanMoveRight = false;
            } else if (timmyHorizontalPosition === 4) {
                timmyCanMoveRight = false;
            } else if (timmyHorizontalPosition === 15) {
                timmyCanMoveRight = false;
            } else {
                timmyCanMoveRight = true;
            }
        }
        if (timmyVerticalPosition === 3) {
            if (timmyHorizontalPosition === 22) {
                timmyCanMoveRight = false;
            } else if (timmyHorizontalPosition === 4) {
                timmyCanMoveRight = false;
            } else if (timmyHorizontalPosition === 8) {
                timmyCanMoveRight = false;
            } else if (timmyHorizontalPosition === 15) {
                timmyCanMoveRight = false;
            } else if (timmyHorizontalPosition === 19) {
                timmyCanMoveRight = false;
            } else {
                timmyCanMoveRight = true;
            }
        }
        if (timmyVerticalPosition === 4) {
            if (timmyHorizontalPosition === 22) {
                timmyCanMoveRight = false;
            } else if (timmyHorizontalPosition === 4) {
                timmyCanMoveRight = false;
            } else if (timmyHorizontalPosition === 8) {
                timmyCanMoveRight = false;
            } else if (timmyHorizontalPosition === 13) {
                timmyCanMoveRight = false;
            } else if (timmyHorizontalPosition === 19) {
                timmyCanMoveRight = false;
            } else {
                timmyCanMoveRight = true;
            }
        }
        if (timmyVerticalPosition === 5) {
            if (timmyHorizontalPosition === 22) {
                timmyCanMoveRight = false;
            } else if (timmyHorizontalPosition === 4) {
                timmyCanMoveRight = false;
            } else if (timmyHorizontalPosition === 8) {
                timmyCanMoveRight = false;
            } else if (timmyHorizontalPosition === 13) {
                timmyCanMoveRight = false;
            } else if (timmyHorizontalPosition === 15) {
                timmyCanMoveRight = false;
            } else if (timmyHorizontalPosition === 19) {
                timmyCanMoveRight = false;
            } else {
                timmyCanMoveRight = true;
            }
        }
        if (timmyVerticalPosition === 6) {
            if (timmyHorizontalPosition === 22) {
                timmyCanMoveRight = false;
            } else if (timmyHorizontalPosition === 4) {
                timmyCanMoveRight = false;
            } else if (timmyHorizontalPosition === 8) {
                timmyCanMoveRight = false;
            } else if (timmyHorizontalPosition === 13) {
                timmyCanMoveRight = false;
            } else if (timmyHorizontalPosition === 15) {
                timmyCanMoveRight = false;
            } else if (timmyHorizontalPosition === 18) {
                timmyCanMoveRight = false;
            } else {
                timmyCanMoveRight = true;
            }
        }
        if (timmyVerticalPosition === 7) {
            if (timmyHorizontalPosition === 22) {
                timmyCanMoveRight = false;
            } else if (timmyHorizontalPosition === 4) {
                timmyCanMoveRight = false;
            } else if (timmyHorizontalPosition === 13) {
                timmyCanMoveRight = false;
            } else if (timmyHorizontalPosition === 15) {
                timmyCanMoveRight = false;
            } else if (timmyHorizontalPosition === 19) {
                timmyCanMoveRight = false;
            } else {
                timmyCanMoveRight = true;
            }
        }
        if (timmyVerticalPosition === 8) {
            if (timmyHorizontalPosition === 22) {
                timmyCanMoveRight = false;
            } else if (timmyHorizontalPosition === 19) {
                timmyCanMoveRight = false;
            } else {
                timmyCanMoveRight = true;
            }
        }
        if (timmyVerticalPosition === 9) {
            if (timmyHorizontalPosition === 22) {
                timmyCanMoveRight = false;
            } else if (timmyHorizontalPosition === 19) {
                timmyCanMoveRight = false;
            } else {
                timmyCanMoveRight = true;
            }
        }
        if (timmyVerticalPosition === 10) {
            if (timmyHorizontalPosition === 22) {
                timmyCanMoveRight = false;
            } else if (timmyHorizontalPosition === 2) {
                timmyCanMoveRight = false;
            } else if (timmyHorizontalPosition === 10) {
                timmyCanMoveRight = false;
            } else if (timmyHorizontalPosition === 16) {
                timmyCanMoveRight = false;
            } else if (timmyHorizontalPosition === 19) {
                timmyCanMoveRight = false;
            } else {
                timmyCanMoveRight = true;
            }
        }
        if (timmyVerticalPosition === 11) {
            if (timmyHorizontalPosition === 22) {
                timmyCanMoveRight = false;
            } else if (timmyHorizontalPosition === 2) {
                timmyCanMoveRight = false;
            } else if (timmyHorizontalPosition === 8) {
                timmyCanMoveRight = false;
            } else if (timmyHorizontalPosition === 10) {
                timmyCanMoveRight = false;
            } else if (timmyHorizontalPosition === 16) {
                timmyCanMoveRight = false;
            } else if (timmyHorizontalPosition === 19) {
                timmyCanMoveRight = false;
            } else {
                timmyCanMoveRight = true;
            }
        }
        if (timmyVerticalPosition === 12) {
            if (timmyHorizontalPosition === 22) {
                timmyCanMoveRight = false;
            } else if (timmyHorizontalPosition === 2) {
                timmyCanMoveRight = false;
            } else if (timmyHorizontalPosition === 8) {
                timmyCanMoveRight = false;
            } else if (timmyHorizontalPosition === 10) {
                timmyCanMoveRight = false;
            } else if (timmyHorizontalPosition === 16) {
                timmyCanMoveRight = false;
            } else if (timmyHorizontalPosition === 19) {
                timmyCanMoveRight = false;
            } else {
                timmyCanMoveRight = true;
            }
        }
        if (timmyVerticalPosition === 13) {
            if (timmyHorizontalPosition === 22) {
                timmyCanMoveRight = false;
            } else if (timmyHorizontalPosition === 2) {
                timmyCanMoveRight = false;
            } else if (timmyHorizontalPosition === 8) {
                timmyCanMoveRight = false;
            } else if (timmyHorizontalPosition === 10) {
                timmyCanMoveRight = false;
            } else if (timmyHorizontalPosition === 16) {
                timmyCanMoveRight = false;
            } else if (timmyHorizontalPosition === 19) {
                timmyCanMoveRight = false;
            } else {
                timmyCanMoveRight = true;
            }
        }
        if (timmyVerticalPosition === 14) {
            if (timmyHorizontalPosition === 22) {
                timmyCanMoveRight = false;
            } else if (timmyHorizontalPosition === 2) {
                timmyCanMoveRight = false;
            } else if (timmyHorizontalPosition === 8) {
                timmyCanMoveRight = false;
            } else if (timmyHorizontalPosition === 13) {
                timmyCanMoveRight = false;
            } else {
                timmyCanMoveRight = true;
            }
        }
        if (timmyVerticalPosition === 15) {
            if (timmyHorizontalPosition === 22) {
                timmyCanMoveRight = false;
            } else if (timmyHorizontalPosition === 2) {
                timmyCanMoveRight = false;
            } else if (timmyHorizontalPosition === 8) {
                timmyCanMoveRight = false;
            } else if (timmyHorizontalPosition === 14) {
                timmyCanMoveRight = false;
            } else if (timmyHorizontalPosition === 19) {
                timmyCanMoveRight = false;
            } else {
                timmyCanMoveRight = true;
            }
        }
        if (timmyVerticalPosition === 16) {
            if (timmyHorizontalPosition === 22) {
                timmyCanMoveRight = false;
            } else if (timmyHorizontalPosition === 2) {
                timmyCanMoveRight = false;
            } else if (timmyHorizontalPosition === 8) {
                timmyCanMoveRight = false;
            } else if (timmyHorizontalPosition === 14) {
                timmyCanMoveRight = false;
            } else if (timmyHorizontalPosition === 19) {
                timmyCanMoveRight = false;
            } else {
                timmyCanMoveRight = true;
            }
        }
        if (timmyVerticalPosition === 17) {
            if (timmyHorizontalPosition === 22) {
                timmyCanMoveRight = false;
            } else if (timmyHorizontalPosition === 8) {
                timmyCanMoveRight = false;
            } else if (timmyHorizontalPosition === 14) {
                timmyCanMoveRight = false;
            } else {
                timmyCanMoveRight = true;
            }
        }
        if (timmyVerticalPosition === 18) {
            if (timmyHorizontalPosition === 22) {
                timmyCanMoveRight = false;
            } else if (timmyHorizontalPosition === 8) {
                timmyCanMoveRight = false;
            } else if (timmyHorizontalPosition === 14) {
                timmyCanMoveRight = false;
            } else {
                timmyCanMoveRight = true;
            }
        }
        //OBJECT SPACES
        if (timmyHorizontalPosition === 6) {
            if (timmyVerticalPosition === 8 || timmyVerticalPosition === 9) {
                if (doorLocked) {
                    timmyCanMoveRight = false;
                }
            }
        }
    } else {
        timmyCanMoveUp = false;
        timmyCanMoveDown = false;
        timmyCanMoveLeft = false;
        timmyCanMoveRight = false;
    }
}
//updates var values to display and then checks if the space is interactive
function updateTimmyPosition () {
    let timmyHorizontalPositionConverter = (timmyHorizontalPosition * 40) - 40;
    let timmyVerticalPositionConverter = (timmyVerticalPosition * 40) - 40;
    document.getElementById("timmy").style.top = timmyVerticalPositionConverter + "px";
    document.getElementById("timmy").style.left = timmyHorizontalPositionConverter + "px";

    let shroudHorizontalPosition = (timmyHorizontalPosition * 40) - 920;
    let shroudVerticalPosition = (timmyVerticalPosition * 40) - 740;
    document.getElementById("shroud").style.top = shroudVerticalPosition + "px";
    document.getElementById("shroud").style.left = shroudHorizontalPosition + "px";

    checkIfInteractive();
}

//INTERACTIONS
//looks at space and displays interactive prompt if conditions are met
function checkIfInteractive () {
    //KEY 1
    if (timmyHorizontalPosition === 7 && timmyVerticalPosition === 12) {
        if (timmyHasKey === false) {
            document.getElementById("interact-prompt").style.display="flex";
        } else {
            document.getElementById("interact-prompt").style.display="none";
        }
    //DOOR 1
    } else if (timmyHorizontalPosition === 6 && timmyVerticalPosition === 8) {
        if (doorLocked) {
            document.getElementById("interact-prompt").style.display="flex";
        } else {
            document.getElementById("interact-prompt").style.display="none";
        }
    } else if (timmyHorizontalPosition === 6 && timmyVerticalPosition === 9) {
        if (doorLocked) {
            document.getElementById("interact-prompt").style.display="flex";
        } else {
            document.getElementById("interact-prompt").style.display="none";
        }
    } else {
        document.getElementById("interact-prompt").style.display="none";
    }
}
//checks if encounterStarted > closes message if displaying OR shows message or other interact script (e.g gain key)
function interact () {
    if (!encounterStarted) {
        if (messageDisplaying) {
            document.getElementById("message-box").style.display="none";
            messageDisplaying = false;
            gamePaused = false;
        } else {
            if (timmyHorizontalPosition === 7 && timmyVerticalPosition === 12) {
                if (timmyHasKey === false) {
                    timmyHasKey = true;
                    updateTimmyPosition (); //used to clear prompt
                    document.getElementById("key-game").style.display="none";
                    document.getElementById("key-nav").style.display="flex";
                }
            }
            if (timmyHorizontalPosition === 6 && timmyVerticalPosition === 8) {
                if (timmyHasKey === false) {
                    gamePaused = true;
                    messageDisplaying = true;
                    document.getElementById("message-box-text").innerHTML="The door is locked!";
                    document.getElementById("message-box").style.display="flex";
                } else {
                    document.getElementById("door").style.display="none";
                    doorLocked = false;
                    updateTimmyPosition (); //used to clear prompt
                }
            }
            if (timmyHorizontalPosition === 6 && timmyVerticalPosition === 9) {
                if (timmyHasKey === false) {
                    gamePaused = true;
                    messageDisplaying = true;
                    document.getElementById("message-box-text").innerHTML="The door is locked!";
                    document.getElementById("message-box").style.display="flex";
                } else {
                    document.getElementById("door").style.display="none";
                    doorLocked = false;
                    updateTimmyPosition (); //used to clear prompt
                }
            }
        }
    }
}

//ENCOUNTERS
let encounterStage = 0;
let fightStage = 0;
let encounterCanBeContinued = true;
let advantage;
let randTF;
let fightPhase;
let encounterStarted = false;
let randNum3;

//shortcuts
//add message to fight feed
function addToFightFeed (ffmessage) {
    const pel = document.createElement("p");
    const pnode = document.createTextNode(ffmessage);
    pel.appendChild(pnode);
    document.getElementById("fight-messages").appendChild(pel);
}
//rolls inititive (50% chance advantage)
function rollInitiative () {
    randTF = Math.random() < 0.5;
    if (randTF) {
        advantage = true;
    } else {
        advantage = false;
    }
}
// Randomly selects Mob (1/3 Chance)
function chooseMob () {
    randNum3 = Math.floor(Math.random() * 3) + 1;
    if (randNum3 === 1) {
        document.getElementById("enemyName").innerHTML= zombie.name;
        document.getElementById("enemyImage").src= zombie.image;
        document.getElementById("enemyHealth").innerHTML= zombie.health;
        document.getElementById("enemyAttack").innerHTML= zombie.attack;
        document.getElementById("enemyDefense").innerHTML= zombie.defence;
    } else if (randNum3 === 2) {
        document.getElementById("enemyName").innerHTML= skeleton.name;
        document.getElementById("enemyImage").src= skeleton.image;
        document.getElementById("enemyHealth").innerHTML= skeleton.health;
        document.getElementById("enemyAttack").innerHTML= skeleton.attack;
        document.getElementById("enemyDefense").innerHTML= skeleton.defence;
    } else if (randNum3 === 3) {
        document.getElementById("enemyName").innerHTML= witch.name;
        document.getElementById("enemyImage").src= witch.image;
        document.getElementById("enemyHealth").innerHTML= witch.health;
        document.getElementById("enemyAttack").innerHTML= witch.attack;
        document.getElementById("enemyDefense").innerHTML= witch.defence;
    }
}

///////CODE TO ADJUST PROBABILITY OF ENCOUNTER///////

//start an encounter, shows encounter screen, rolls initiative
function runEncounter () {
    encounterStage = 0;
    gamePaused = true;
    encounterStarted = true;
    document.getElementById("encounter_area").style.opacity=1;
    document.getElementById("fight-messages").innerHTML='';
    document.getElementById("enemySheet").style.opacity= 0;
    rollInitiative();
    if (advantage) {
        addToFightFeed("You spot something lurking in the shadows...");
    } else {
        addToFightFeed("A figure jumps out from the shadows!");
    }
}
//adds 1 to encounter stage OR progresses fight, and refresh updateEncounter function
function continueEncounter () {
    if (encounterStarted) {
        if (encounterCanBeContinued === true) {
            encounterStage++;
            updateEncounter(encounterStage);
            document.getElementById("encounterCounter").innerHTML=encounterStage;
        }
    }
}
//main stages of the encounter
function updateEncounter (stage) {
    if (stage === 1) { //Selects enemy* and loads their stats into display
        chooseMob();
        if (randNum3 === 1) {
            addToFightFeed ("A zombie locks eyes with you and groans with hunger for your brains!");
        } else if (randNum3 === 2) {
            addToFightFeed ("A skeleton stumbles forward wielding a bow!");
        } else if (randNum3 === 3) {
            addToFightFeed ("A witch snarls at you whilst reaching into a glowing bag...");
        }
        document.getElementById("enemySheet").style.opacity= 1;
    }
    if (stage === 2) { //Tells player if they got advantage
        if (advantage) {
            addToFightFeed("You managed to spot it before it saw you! You attack first!");
        } else {
            addToFightFeed("It took you by suprise! The enemy attacks first");
        }
    }
    if (stage === 3) { //Sets Up fight phase, stop updates on encounter stages, starts fight function
        fightPhase = true;
        encounterCanBeContinued = false;
        if (advantage) { //Sets point in while loop depending on start turn
            fightStage = 0;
        } else {
            //fightStage = //INSTER WHEN MOB STARTS;////////////////
        }
        fight();
    }

    //TBC
}


function fight () {
        if (fightStage === 0) { //1 CHOOSE SPELL TO CAST, ROLL TO HIT 
            addToFightFeed("Choose a spell!");
            canCastSpell = true;
            toggleSpells();
        } else if (fightStage === 0) { //2 IF HIT, ROLL DMG, ELSE YOU MISSED (Go to 4)
        
        } else if (fightStage === 0) { //3 Show damage, update stats

        } else if (fightStage === 0) { //4 Mobs rolls to hit

        } else if (fightStage === 0) { //5 IF HIT, ROLL DMG, ELSE IT MISSED (Go to 1)

        }
    }
/////SPELLS
let spell1locked = false;//firebolt
let spell2locked = true;
let spell3locked = true;
let spell4locked = true;
let spell5locked = true;
let canCastSpell = false;

let chosenSpell;
let d20Result;

function toggleSpells () {///updates spells visably lock/ unlock based on canCastSpell
    if (canCastSpell) {//make spells visable
        if(!spell1locked) {
            document.getElementById("spell1").classList.remove("lockedSpell");
            document.getElementById("spell1-Info").classList.remove("lockedSpellInfo");
        }
        if(!spell2locked) {
            document.getElementById("spell2").classList.remove("lockedSpell");
            document.getElementById("spell2-Info").classList.remove("lockedSpellInfo");
        }
        if(!spell3locked) {
            document.getElementById("spell3").classList.remove("lockedSpell");
            document.getElementById("spell3-Info").classList.remove("lockedSpellInfo");
        }
        if(!spell4locked) {
            document.getElementById("spell4").classList.remove("lockedSpell");
            document.getElementById("spell4-Info").classList.remove("lockedSpellInfo");
        }
        if(!spell5locked) {
            document.getElementById("spell5").classList.remove("lockedSpell");
            document.getElementById("spell5-Info").classList.remove("lockedSpellInfo");
        }
    } else {//lock all spells
        document.getElementById("spell1").classList.add("lockedSpell");
        document.getElementById("spell1-Info").classList.add("lockedSpellInfo");
        document.getElementById("spell2").classList.add("lockedSpell");
        document.getElementById("spell2-Info").classList.add("lockedSpellInfo");
        document.getElementById("spell3").classList.add("lockedSpell");
        document.getElementById("spell3-Info").classList.add("lockedSpellInfo");
        document.getElementById("spell4").classList.add("lockedSpell");
        document.getElementById("spell4-Info").classList.add("lockedSpellInfo");
        document.getElementById("spell5").classList.add("lockedSpell");
        document.getElementById("spell5-Info").classList.add("lockedSpellInfo");
    }
}


function castSpell(spell) {
    if (canCastSpell) {
        if (spell === 1) {//Firebolt
            canCastSpell = false;
            chosenSpell = 1;
            rollD20();
        }
    }
}


function rollD20 () {
    let cycleDisplay = 0;
    document.getElementById("d20rollBox").style.display="flex";
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            cycleDisplay = Math.floor(Math.random() * 20) + 1;
            document.getElementById("d20rollBox-text").innerHTML=cycleDisplay;
        }, 200);
    }
}
///MAKE D20 HTML ELEMENT,update values with js loop
///have fade in and out





//DEVTOOLS
let shroudActive = true;
function toggleShroud () {
    if (shroudActive) {
        shroudActive = false;
        document.getElementById("shroud").style.opacity=0;
    } else {
        shroudActive = true;
        document.getElementById("shroud").style.opacity=1;
    }
}