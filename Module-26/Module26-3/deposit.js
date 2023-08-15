// step-1: add event listener to the deposit button
document.getElementById('btn-deposit').addEventListener('click', function(){
    // console.log('deposit button click')
    // step-2: get the deposit amount from the deposit input field
    // For input field use .value to the value inside the input field
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountstring = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountstring);
    // console.log(typeof newDepositAmount)

    // step-3: get the current deposit total
    // for non-input (element other than input, textarea) use innerText to get the text
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalstring = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalstring)
    // console.log(typeof previousDepositTotal )

    // step-4: add numbers to set the total deposit
    const currentDepositTotal = previousDepositTotal + newDepositAmount;

    //set the deposit total
    depositTotalElement.innerText = currentDepositTotal;

    // step-5 get the current balance total
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalElementstring = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalElementstring)
    // console.log(typeof previousBalanceTotal)
    // balanceTotal.innerText = depositTotalElement

    // step-6: calculate current total balance
    const currentBalanceTotal = previousBalanceTotal + newDepositAmount

    //set the balance total
    balanceTotalElement.innerText = currentBalanceTotal

     
    // step-7: clear the deposit field 
    depositField.value = '';
})