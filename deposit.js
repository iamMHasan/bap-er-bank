document.getElementById('btn-deposit').addEventListener('click',function(){
    // get deposit amount tk 
   const depositAmountElement = document.getElementById('deposit-amount')
   const depositAmountString = depositAmountElement.value
   const depositAmount = parseFloat(depositAmountString)
   
   depositAmountElement.value = ''
   if(isNaN(depositAmount)) {
    alert('enter num brooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo')
    return
  }
   
//    get deposit total and set
    const previousDepositTotalElement = document.getElementById('deposit-total')
    const depositTotalString = previousDepositTotalElement.innerText
    const previousDepositTotal = parseFloat(depositTotalString)

    const totalDeposit = previousDepositTotal + depositAmount
    previousDepositTotalElement.innerText = totalDeposit
    

    // get balance total and set 
    const previousBalElement = document.getElementById('total-amount')
    const previousBalElementString = previousBalElement.innerText
    const previousBalance = parseFloat(previousBalElementString)

    const currentBalance = previousBalance + depositAmount
    previousBalElement.innerText = currentBalance
})