
// handle deposit button event 

document.getElementById('deposit-submit').addEventListener('click', function () {
    const userDeposit = document.getElementById('user-deposit');
    const newDepositAmountText = userDeposit.value;
    const newDepositAmount = parseFloat(newDepositAmountText);
    // Deposited money
    const currentDeposit = document.getElementById('current-deposit');
    const previousAmountText = currentDeposit.innerText;
    const previousAmount = parseFloat(previousAmountText);
    const totalAmount = previousAmount + newDepositAmount;

    currentDeposit.innerText = totalAmount;

    // Total balance 

    const currentBalance = document.getElementById('balance-total');
    const previosTotalText = currentBalance.innerText;
    const previousTotal = parseFloat(previosTotalText);
    const totalBalance = newDepositAmount + previousTotal;
    currentBalance.innerText = totalBalance;

    // clear the deopist input field
    userDeposit.value = '';

})

// Withdraw money 

document.getElementById('withdraw-submit').addEventListener('click', function () {
    const userWithdraw = document.getElementById('user-withdraw');

    const withdrawAmountText = userWithdraw.value;
    const withdrawAmount = parseFloat(withdrawAmountText);

    // get element with draw money 


    const afterWithdraw = document.getElementById('withdraw-money');
    const previousWithdrawText = afterWithdraw.innerText;
    const prevousWithdraw = parseFloat(previousWithdrawText);

    const totalWithdraw = prevousWithdraw + withdrawAmount;
    afterWithdraw.innerText = totalWithdraw;
    const recentBalance = document.getElementById('balance-total');

    const previousBalance = recentBalance.innerText;

    recentBalance.innerText = previousBalance - withdrawAmount;

    // const newbalance = totalBalance - withdrawAmount;
    // 
    // afterWithdraw.innerText = withdrawAmount;
    // currentBalance.innerText = afterWithdraw;


    userWithdraw.value = '';

})

