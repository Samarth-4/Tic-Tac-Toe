console.log("Welcome to TIc Tac toe")
let music = new Audio("music.mp3")
let gameOver = new Audio("gameover.mp3")
let turnAudio = new Audio("ting.mp3")
let Turn ="X"
let isGameOver=false
const changeTurn = ()=>{
    return Turn=== "X"?"O":"X"
}

const checkWin = ()=>{
    let boxtext =document.getElementsByClassName('boxtext')
    let wins =[
        [0, 1, 2, 5, 5, 0], [3, 4, 5, 5, 15, 0], [6, 7, 8, 5, 25, 0], [0, 3, 6, -5, 15, 90], [1, 4, 7, 5, 15, 90], [2, 5, 8, 15, 15, 90], [0, 4, 8, 5, 15, 45], [2, 4, 6, 5, 15, 135],
       ]
    wins.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText)&&(boxtext[e[2]].innerText === boxtext[e[1]].innerText)&&(boxtext[e[0]].innerText !== "")){
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won"
            isGameOver=true
            // document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = "56px"
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.height = "15rem";
            music.play();
            // document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
            // document.querySelector(".line").style.width = "20vw";
        }
    })
}

let boxes = document.getElementsByClassName("box")
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext')
    element.addEventListener('click' , ()=>{
        if(boxtext.innerText === ''){
            boxtext.innerText = Turn;
            Turn = changeTurn();
            turnAudio.play();
            checkWin();
            if(!isGameOver){
                document.getElementsByClassName("info")[0].innerText = "Turn For " + Turn
            }

        }
    })
})

reset.addEventListener('click',()=>{
    let boxtexts =document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element =>{
        element.innerText =""
    })
    Turn ="X"
    isGameOver=false
    document.getElementsByClassName("info")[0].innerText = "Turn For " + Turn
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.height = "0rem";  
    music.pause();
})