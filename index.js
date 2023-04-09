console.log('Hello');
const refs = {
    counterValue: document.querySelector('#value'),
    scoreValue: document.querySelector('#score'),
    plusBtn: document.querySelector('[data-action="increment"]'),
};
let total = Number(refs.counterValue.textContent);
let totalScore = Number(refs.scoreValue.textContent);

const increment = () => {
    total += 1;
    refs.counterValue.textContent = total;

if (total === 5) {
    countScore();
    } 

};

refs.plusBtn.addEventListener('click', increment);

const countScore = () => {
    totalScore = totalScore + total;
    refs.scoreValue.textContent = totalScore;
    total = 0;
    refs.counterValue.textContent = total;
}



