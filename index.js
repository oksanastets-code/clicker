import bcgs from "./data/bcg.js";
import buttons from "./data/buttons.js";
console.log("Clicker");
const refs = {
  counterValue: document.querySelector("#value"),
  scoreValue: document.querySelector("#score"),
  levelValue: document.querySelector("#level"),
  plusBtn: document.querySelector("#increment"),
  heroImg: document.getElementById("hero"),
};
console.log(refs.heroImg);
let total = Number(refs.counterValue.textContent);
let totalScore = Number(refs.scoreValue.textContent);
let levelTarget;
let level = 1;

function setNextLevelTarget() {
  levelTarget = total + 5;
}
setNextLevelTarget();

function countLevel() {
  level += 1;
  refs.levelValue.textContent = level;
  const background = bcgs[level - 2];
  console.log(background);
  document.body.style.backgroundColor = background;
  changeHero(level);
}
function changeBcg(n) {
    const bck = bcgs[n - 1];
}
function changeHero(n) {
  const image = buttons[n - 1];
  refs.heroImg.src = `./images/${image}`;
  if (n === 6) {
    refs.heroImg.src = `./images/${buttons[0]}`;
  }
}
function reset() {
  total = 0;
  totalScore = 0;
  level = 1;

  refs.counterValue.textContent = total;
  refs.scoreValue.textContent = totalScore;
  refs.levelValue.textContent = level;
  setNextLevelTarget();
}
const increment = () => {
  total += 1;
  refs.counterValue.textContent = total;
  console.log("your target is", levelTarget);

  if (total === levelTarget) {
    setNextLevelTarget();
    countScore();
    countLevel();
  }
  if (level === 6) {
    reset();
    alert("You win!");
  }
};
refs.plusBtn.addEventListener("click", increment);

const countScore = () => {
  totalScore = totalScore + total;
  refs.scoreValue.textContent = totalScore;
  total = 0;
  refs.counterValue.textContent = total;
};
