/*
 1. add event handler with the withdraw button 
 2. get the withdraw amount from the withdraw input field
 2.5 also make sure to convert the input into a number by using parseFlot
 3. Get previous withdraw total
 4. calculate total withdraw amount
 4.5. set total withdraw amount

 5.get the prevous balance total
 6.calculate new balance total
 6.5 set the new balance total
 7. clear the input field
 */

 // step-1:
 document.getElementById('previousBalanceTotal').addEventListener('click', function(){
    // console.log('withdraw button clicked')
    // step-2:
    const withdrawField = document.getElementById('withdraw-field')
    const newWithDrawAmountString = withdrawField.value;
    const newWithDrawAmount = parseFloat(newWithDrawAmountString);
    // console.log(newWithDrawAmount)

    //step-7
    withdrawField.value = ''

    if(isNaN(newWithDrawAmount)){
        alert('Please provide a valid number');
        return;
    }

    // step-3 
    const withdrawTotalElement = document.getElementById('widthdraw-total')
    const previouswithdrawTotalstring = withdrawTotalElement.innerText;
    const previouswithdrawTotal = parseFloat(previouswithdrawTotalstring)
    // console.log(previouswithdrawTotal) cf

    //step-5
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);
    // console.log(previousBalanceTotal)

    if(newWithDrawAmount > previousBalanceTotal){
        alert('baap er bank e eto taka nai')
        return;
    }

    // step-4
    const currentWithdrawTotal = previouswithdrawTotal + newWithDrawAmount;
    withdrawTotalElement.innerText = currentWithdrawTotal;

    // step-6
    const newBalanceTotal = previousBalanceTotal - newWithDrawAmount;
    balanceTotalElement.innerText = newBalanceTotal;
 })