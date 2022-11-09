let turnSound = new Audio("sound/button_click.mp3");

let winSound = new Audio("sound/win_sound.mp3");

let winCondition = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
let turn = "X";
let counter = 0;

// Change Turn on Box

const changeTurn = () => {
  return turn === "X" ? "O" : "X";
};

let whoHasWon = false;
let c = 0;

const resetGame = () => {
  let choiceBox = document.querySelectorAll(".choiceBox");
  choiceBox.forEach((e) => {
    e.innerHTML = "";
  });
  document.querySelector(".info").innerHTML = "Turn of X";
};

const checkWin = () => {
  let choiceBox = document.getElementsByClassName("choiceBox");
  winCondition.forEach((e) => {
    if (
      choiceBox[e[0]].innerHTML !== "" &&
      choiceBox[e[0]].innerHTML === choiceBox[e[1]].innerHTML &&
      choiceBox[e[1]].innerHTML === choiceBox[e[2]].innerHTML
    ) {
      document.querySelector(".info").innerHTML =
        choiceBox[e[0]].innerHTML + " Won!!!";
      winSound.play();
      whoHasWon = true;
      setTimeout(resetGame, 1500);
    } else {
      // console.log(whoHasWon,c);
      // whoHasWon = false;
      // c++;
    }
  });
};

// Game Logic

let choiceBox = document.querySelectorAll(".choiceBox");
Array.from(choiceBox).forEach((el) => {
  //   let boxText = document.querySelector(".boxText");
  if (counter === 9) {
    resetGame();
  }
  if (el.innerHTML === "") {
    el.addEventListener("click", () => {
      if (el.innerHTML === "") {
        el.innerHTML = turn;
        turn = changeTurn();
        turnSound.play();
        document.querySelector(".info").innerHTML = "Turn of " + turn;
        checkWin();
      }
    });
  }
  counter++;
});

choiceBox.forEach((e) => {
  if (e.innerHTML !== "") {
    console.log(c);
    c++;
  }
});

if (c === 9) {
  console.log("tie");
  document.querySelector(".info").innerHTML = "Its a TIE!!!";
  resetGame();
  c = 0;
}

let resetBtn = document.getElementById("reset");

resetBtn.addEventListener("click", () => {
  let tc = new Audio("sound/reset-btn-click-sound.mp3");
  tc.play();
  resetGame();
});
