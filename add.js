 document.getElementById('btn-deposit').addEventListener('click', function(){
    const dipositField = document.getElementById('deposit-field');
    const newDepositAmountString = dipositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);

    const depositTotalElement = document.getElementById('depo-total');
    const prevDepositTotalString = depositTotalElement.innerText;
    const prevDepositTotal = parseFloat(prevDepositTotalString);
    // get current deposit amount//
    const currentDepositTotal = prevDepositTotal + newDepositAmount;
    depositTotalElement.innerText = currentDepositTotal;

    // conect with balence//
    const balenceTotalElemnent = document.getElementById('balance-total');
    const prevBalenceTotalString = balenceTotalElemnent.innerText;
    const prevBalenceTotal = parseFloat(prevBalenceTotalString);

    const currentBalenceTotal = prevBalenceTotal + newDepositAmount;
    balenceTotalElemnent.innerText = currentBalenceTotal;
    // clear deposit field//

    dipositField.value = '';

})
