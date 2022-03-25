let turn = "x";
let gameOn = true;

const changeTurn = () => {
  return turn === "x" ? "o" : "x";
};

let gameStatus = document.getElementsByClassName("gameStatus");
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((element) => {
  let boxtext = element.querySelector(".boxtext");

  element.addEventListener("click", () => {
    if (boxtext.innerText === "") {
      boxtext.innerText = turn;
      turn = changeTurn();
      checkwin();
      if (gameOn == true) {
        gameStatus[0].innerText = "Turn for " + turn.toUpperCase();
      }
    }
  });
});

const checkwin = () => {
  let boxtexts = document.getElementsByClassName("boxtext");
  let winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
  ];

  winConditions.forEach((e) => {
    if (
      boxtexts[e[0]].innerText === boxtexts[e[1]].innerText &&
      boxtexts[e[1]].innerText === boxtexts[e[2]].innerText &&
      boxtexts[e[0]].innerText != ""
    ) {
      gameStatus[0].innerText =
        "Player" + " " + boxtexts[e[0]].innerText.toUpperCase() + " " + "Won!";
      gameOn = false;
    }
  });
};

const reset = document.getElementById("reset");

reset.addEventListener("click", () => {
  let boxtexts = document.getElementsByClassName("boxtext");

  Array.from(boxtexts).forEach((e) => {
    e.innerText = "";
  });
  
  turn = "x";
  gameStatus[0].innerText = "Player X Start Playing";
});
