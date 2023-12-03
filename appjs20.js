let gameSeq=[];
let userSeq=[];

let btns = ["yellow","red","purple","green"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress",function(){
    //console.log("game started");
    if (started == false){
        console.log("game is started");
        started = true;

        levelUp();
    }
});

function gameFlash(btn){
    btn.classList.add("gameflash");
    setTimeout(function(){
        btn.classList.remove("gameflash");
    },250);
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
}

    function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;
//random btn to choose
    let randIdx = Math.floor(Math.random()*3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    // console.log(randIdx);
    // console.log(randColor);
    // console.log(randBtn);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randBtn);
}

function checkBtn(idx){
    //console.log("curr level:", level);
   // let idx = level-1;
    if(userSeq[idx] === gameSeq[idx]){
      // console.log("same value");
      if(userSeq.length == gameSeq.length){
        setTimeout(levelUp,1000);
       // levelUp();
      }
    }else{
        h2.innerHTML = `Game Over! Your score was <b>${level}</b> <br> Press any key to restart`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function() {
            document.querySelector("body").style.backgroundColor = "white";

        }, 150);  
        reset();
    }
    
}

//THIS FUCTION WILL TAKE CARE ABOUT BTN PRESS
function btnPress(){
    console.log(this);
   // console.log("btn was pressed");
   let btn = this;
   userFlash(btn);

   userColor = btn.getAttribute("id");
   //console.log(userColor);
   userSeq.push(userColor);

   checkBtn(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;

}

