console.log('Clicker');
const refs = {
  counterValue: document.querySelector("#value"),
  scoreValue: document.querySelector("#score"),
  levelValue: document.querySelector("#level"),
  plusBtn: document.querySelector('[data-action="increment"]'),
};

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
//   console.log("level ", level);
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
