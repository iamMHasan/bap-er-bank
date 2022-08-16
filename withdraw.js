document.getElementById('btn-withdraw').addEventListener('click', function(){
    const withdrawAmountElement = document.getElementById('withdraw-field')
    const withdrawAmountString = withdrawAmountElement.value 
    const withdrawAmount = parseFloat(withdrawAmountString)
    withdrawAmountElement.value = ''
    if(isNaN(withdrawAmount)){
        alert('takar amount de string na')
        return
    }


    const previousWithdrawElement = document.getElementById('withdraw-total')
    const previousWithdrawString = previousWithdrawElement.innerText
    const previousWithdraw = parseFloat(previousWithdrawString)

    const totalWithdraw = previousWithdraw + withdrawAmount
    previousWithdrawElement.innerText = totalWithdraw
    
    const totalTakalElement = document.getElementById('total-amount')
    const totalTakaString = totalTakalElement.innerText
    const totalTaka = parseFloat(totalTakaString)
    
    if(withdrawAmount> totalTaka){
        alert('tor ato taka nai foinny')
        return
    }

    const totalBalance = totalTaka - withdrawAmount
    totalTakalElement.innerText = totalBalance
})