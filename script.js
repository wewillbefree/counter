const cardText = document.querySelector('.card__text');
const btnMinus = document.querySelector('.card__button-minus');
const btnPlus = document.querySelector('.card__button-plus');
const btnReset = document.querySelector('.card__button-reset');

const state = {
    count: 0,
    initial: 0,
    step: 1
}

const updateUi = () => {
    cardText.textContent = `Count: ${state.count}`
    cardText.classList.toggle('card__text-red', state.count > 0);
    cardText.classList.toggle('card__text-blue', state.count < 0);    
}

const resetUi = () => {
    state.count = state.initial;
    updateUi()
}

const setCount = (newCount) => {
    state.count = newCount
    updateUi()
}

btnPlus.addEventListener('click', ()=> {
    setCount(state.count + state.step)
});

btnMinus.addEventListener('click', ()=> {
    setCount(state.count - state.step)
})

btnReset.addEventListener('click', () => {
    resetUi()
})

updateUi()