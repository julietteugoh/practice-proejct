let [Computer_Score, User_Score] = [0, 0];
let result_ref = document.getElementById("Result");
let choices_object = {
  rock: {
    rock: "draw",
    scissor: "win",
    paper: "lose",
  },
  scissor: {
    rock: "lose",
    scissor: "draw",
    paper: "win",
  },
  paper: {
    rock: "win",
    scissor: "lose",
    paper: "draw",
  },
};

function checker(input) {
  var choices = ["rock", "paper", "scissor"];
  var num = Math.floor(Math.random() * 3);

  document.getElementById(
    "Comp_Choice"
  ).innerHTML = ` Computer choose <span> ${choices[num].toUpperCase()} </span>`;

  document.getElementById(
    "User_Choice"
  ).innerHTML = ` You choose <span> ${input.toUpperCase()} </span>`;

  let Computer_Choice = choices[num];

  switch (choices_object[input][computer_choice]) {
    case "win":
      result_ref.style.cssText = "background-color: #cefdce; color: #689f38";
      result_ref.innerHTML = "YOU WIN";
      user_score++;
      break;
    case "lose":
      result_ref.style.cssText = "background-color: #ffdde0; color: #d32f2f";
      result_ref.innerHTML = "YOU LOSE";
      computer_score++;
      break;
    default:
      result_ref.style.cssText = "background-color: #e5e5e5; color: #808080";
      result_ref.innerHTML = "DRAW";
      break;
  }

  document.getElementById("computer_score").innerHTML = Computer_Score;
  document.getElementById("user_score").innerHTML = user_score;
}
