let turn = "X";
let info = document.getElementById("user-turn")
let gameover = false;
// let gamedraw = false;

const changeTurn = () =>{
    return turn === "X"?"O":"X";
}

const checkWin = () =>{
    let boxtexts = document.getElementsByClassName("box-text");
    let wins = [
        [0,1,2],[3,4,5],[6,7,8],
        [0,3,6],[1,4,7],[2,5,8],
        [0,4,8],[2,4,6]
    ]
    wins.forEach(e=>{
        if((boxtexts[e[0]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[1]].innerText === boxtexts[e[2]].innerText) && (boxtexts[e[0]].innerText !== '')){
            info.innerText = boxtexts[e[0]].innerText + " Won"
            gameover=true;
            // gamedraw=false;
            boxtexts[e[0]].parentElement.style.backgroundColor = "green";
            boxtexts[e[1]].parentElement.style.backgroundColor = "green";
            boxtexts[e[2]].parentElement.style.backgroundColor = "green";
        }
    })
}

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    element.addEventListener("click",()=>{
        let boxText = element.querySelector(".box-text");
        if(!gameover){
            if(boxText.innerText === ""){
                boxText.innerText = turn;
                turn = changeTurn();
                // checkDraw();
                checkWin();
                if(!gameover)
                    info.innerText = " Turn for "+ turn;
            }
        }
    })
});

const reset = ()=>{
    let boxtexts = document.getElementsByClassName("box-text");
    Array.from(boxtexts).forEach(e=>{
        e.innerText = ""
        turn = "X"
        gameover = false
        info.innerText = " Turn for "+ turn;
        e.parentElement.style.backgroundColor = "white";
        // gamedraw=false;
    })
}

// const checkDraw = ()=>{
//     let boxtexts = document.getElementsByClassName("box-text");
//     Array.from(boxtexts).forEach(e=>{
//        if (e.innerText !== "") {
            
//        }
//     })
// }