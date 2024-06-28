let gameSeq = [];
let userSeq = [];
let btns =["yellow","red","purple","green"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function(){
    if(started == false){
    console.log("Game started");
    started = true;

    LevelUp();
    }
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function (){
        btn.classList.remove("flash");
    },250);
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function (){
        btn.classList.remove("userflash");
    },250);
}

function LevelUp(){
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let randomIdx = Math.floor(Math.random()*4);
    let randomcolor = btns[randomIdx];
    let randBtn = document.querySelector(`.${randomcolor}`) ;

    // console.log(randomIdx);
    // console.log(randomcolor);
    // console.log(randBtn);

    gameSeq.push(randomcolor);
    console.log(gameSeq);
    gameFlash(randBtn);
}

function checkAns(idx){
    // console.log("current level",level);
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(LevelUp, 1000);
        }
    }   else {
        h2.innerHTML = `Game Over! Your Score was <b> ${level} </b><br> Press any key to start.`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        },1000);
            reset();
        }
}

function btnclick(){
    let btn = this;
    userFlash(btn);

    UserColor = btn.getAttribute("id");
    userSeq.push(UserColor);

    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click", btnclick);
}


function reset(){
    started = false;
    gameSeq = [];
    userSeq =[];
    level = 0;
}