/*
1. add event handler with the withdraw button
2. get the withdraw amount 
3. clear the withdraw input field
4. get previous withdraw total
5. calculate total withdraw amount and set it to the withdraw total element
6. get previous balance
7. calculate new balance and set it to the balance element
*/

//step-1
document.getElementById('btn-withdraw').addEventListener('click', function(){
    // console.log('withdraw button clicked')

    // step-2
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdraw = parseFloat(newWithdrawAmountString);

    // step-3
    withdrawField.value = ''; 
    
    // step-4
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const newWithdrawTotalElementString = withdrawTotalElement.innerText;
    const newWithdrawTotalElement = parseFloat(newWithdrawTotalElementString);

    //step-5
    const newWithdrawTotal = newWithdrawTotalElement + newWithdraw;
    withdrawTotalElement.innerText = newWithdrawTotal;

    //step-6
    const balanceElement = document.getElementById('balance-total');
    const previousBalanceTotalString =balanceElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);
    
    //step-7
    const newBalanceToal = previousBalanceTotal - newWithdraw;
    balanceElement.innerText = newBalanceToal

})