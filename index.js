console.log('connected!')

const initialPrice = document.querySelector('#initialPrice')
const qtyOfStocks = document.querySelector('#qtyStocks')
const currentPrice = document.querySelector('#currentPrice')
const checkPLBtn = document.querySelector('.checkPL-btn')
const outputMsg = document.querySelector('.outputMsg')


function calculateProfitAndLoss(initial, qty, current){
    if (initial < current) {
        //profit
        let profit = (current - initial) * qty
        let profitPercentage = (profit/initial) * 100

        showMessage(`Your profit is ${profit} and profit percentage is ${profitPercentage.toFixed(2)}%`)
    }
    else if (initial > current){
        // loss
        let loss = (initial - current) * qty
        let lossPercentage = (loss/initial) * 100

        showMessage(`Your loss is ${loss} and loss percentage is ${lossPercentage.toFixed(2)}%`)
    }
    else {
        // same
        showMessage('No Profit nor Loss!')
    }
}

function profitOrLoss() {
    const initialCost = Number(initialPrice.value)
    const totalQty = Number(qtyOfStocks.value)
    const currentCost = Number(currentPrice.value)

    calculateProfitAndLoss(initialCost, totalQty, currentCost)
}

function showMessage(msg) {
    outputMsg.innerText = msg
}


checkPLBtn.addEventListener('click', profitOrLoss)