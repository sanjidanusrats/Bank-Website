document.getElementById('btn-withdraw').addEventListener('click', function(){
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

    const withdrawTotalElement = document.getElementById('withdraw-total');
    const prevWithdrawTotalString = withdrawTotalElement.innerText;
    const prevWithdrawTotal = parseFloat(prevWithdrawTotalString);
    // get current deposit amount//
    const currentWithdrawTotal = prevWithdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = currentWithdrawTotal;

    // conect with balence//
    const balenceTotalElemnent = document.getElementById('balance-total');
    const prevBalenceTotalString = balenceTotalElemnent.innerText;
    const prevBalenceTotal = parseFloat(prevBalenceTotalString);

    const currentBalenceTotal = prevBalenceTotal - newWithdrawAmount;
    balenceTotalElemnent.innerText = currentBalenceTotal;
    // clear deposit field//

    withdrawField.value = '';

})