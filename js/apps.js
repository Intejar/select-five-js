
function addPlayerName(selectByID, nameById) {
    const playerName = document.getElementById(nameById);
    const selectButton = document.getElementById(selectByID);
    const displayName = document.getElementById('add-player');
    selectButton.addEventListener('click', function () {
        const newDisplay = document.createElement('li');
        newDisplay.innerText = playerName.innerText;
        const getNumberLi = document.getElementById('add-player').getElementsByTagName('li');
        const disableButton = document.getElementById(selectByID);
        if (getNumberLi.length < 5) {
            displayName.appendChild(newDisplay);
            newDisplay.style.fontSize = '1em';
            newDisplay.style.fontWeight = 'bold';
            newDisplay.style.paddingBottom = '2em';
            disableButton.setAttribute('disabled', 'true');
            disableButton.style.backgroundColor = 'white';
            disableButton.style.color = 'grey';
            disableButton.style.border = '2px solid grey';
            disableButton.innerText = 'selected'
            

        }
        else {
            alert('!you can not add more that 5 players!');
        }
    })
}
addPlayerName('select-tamim-btn', 'player-tamim');
addPlayerName('select-mushfiq-btn', 'player-mushfiq');
addPlayerName('select-mahmudullah-btn', 'player-mahmudullah');
addPlayerName('select-liton-btn', 'player-liton');
addPlayerName('select-sakib-btn', 'player-sakib');
addPlayerName('select-sabbir-btn', 'player-sabbir');
addPlayerName('select-fiz-btn', 'player-fiz');
addPlayerName('select-shommo-btn', 'player-shommo');
addPlayerName('select-mehedi-btn', 'player-mehedi');
addPlayerName('select-saifuddin-btn', 'player-saifuddin');
addPlayerName('select-musaddek-btn', 'player-musaddek');
addPlayerName('select-mithun-btn', 'player-mithun');

function makeInputValueInt(element){
    const getNumber = document.getElementById(element);
    const makeInteger = parseFloat(getNumber.value);
    return makeInteger;
}

const calculate = document.getElementById('calculate-expense');
calculate.addEventListener('click', function () {
    const getNumberOfPlayer = document.getElementById('add-player').getElementsByTagName('li');
    const costInput = makeInputValueInt('per-player-cost');
    const showExpense = document.getElementById('player-expense');
    const playerExpese = parseFloat(getNumberOfPlayer.length) * costInput;
    if(isNaN(costInput)){
        alert('please input a valid number');
    }
    else{
        showExpense.innerText = playerExpese;
    }
})

const calculateTotal = document.getElementById('calculate-total');
calculateTotal.addEventListener('click',function(){
    const playerCostString = document.getElementById('player-expense');
    const playerCost = parseFloat(playerCostString.innerText);
    const managerCost = makeInputValueInt('manager-cost');
    const coachCost = makeInputValueInt('coach-cost');
    const prevTotalCost = document.getElementById('total-cost');
    const totalCost = playerCost + managerCost + coachCost;
    if(isNaN(playerCost,managerCost,coachCost)){
        alert('Please input a valid number');
    }
    prevTotalCost.innerText = totalCost;
})



