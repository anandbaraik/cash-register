//get required data
const billAmountInput = document.getElementById("bill-amount");
const cashGivenInput = document.getElementById("cash-given");
const checkBtn = document.querySelector(".return-change");
const numOfNotes = document.querySelectorAll('.no-of-notes');
const availNotes = [2000, 500, 100, 20, 10, 5, 1];
const errorDiv = document.querySelector('.error-msg');
//handle check btn click
checkBtn.addEventListener('click', handleCheckBtn);

function handleCheckBtn() {
    hideErorMsg();

    let billAmount = billAmountInput.value;
    let cashGiven = cashGivenInput.value;
    let cashToBeReturn = cashGiven - billAmount;
    if(cashGiven < billAmount) showErorMsg("Cash is less than bill amount! wanna wash the plates?");

    if(cashGiven == billAmount) showErorMsg("No amount to be returned.");

    if(cashToBeReturn > 0) calculateCashToBeReturn(cashToBeReturn);

}

function showErorMsg(msg) {
    errorDiv.innerText = msg;
    errorDiv.style.display = "block";
}

function hideErorMsg() {
    errorDiv.style.display = "none";
}

function calculateCashToBeReturn(amountToBeReturn) {
    console.log(amountToBeReturn);
    for(let i=0; i<availNotes.length; i++){
        let notesCount = Math.trunc(amountToBeReturn/availNotes[i]);
        numOfNotes[i].innerText = notesCount;
        let remainingAmount = amountToBeReturn % availNotes[i];
        amountToBeReturn = remainingAmount;
    }
}