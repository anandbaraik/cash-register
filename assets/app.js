//get required data
const billAmountInput = document.getElementById("bill-amount");
const cashGivenInput = document.getElementById("cash-given");
const checkBtn = document.querySelector(".return-change");
const numOfNotes = document.querySelectorAll('.no-of-notes');
const availNotes = [2000, 500, 100, 20, 10, 5, 1];
const errorDiv = document.querySelector('.error-msg');
const nextBtn = document.querySelector('.next-btn');

checkBtn.addEventListener('click', handleCheckBtn);
nextBtn.addEventListener('click', handleNextBtn);

function handleNextBtn() {
    hideErorMsg();
    let billAmount = parseInt(billAmountInput.value);
    if(!Number.isInteger(billAmount)) {
        showErorMsg("Enter valid bill amount.");
    } else if(billAmount > 0) {
        document.querySelector('.cash-given-div').style.display = "block";
        document.querySelector('.return-change').style.display = "inline-block";
        nextBtn.style.display = "none";
    } else if(billAmount <= 0) {
        showErorMsg("Bill amount should be greater than 0");
    }
}

function validateBillAmount(billAmount) {
    if(!Number.isInteger(billAmount)) showErorMsg("Enter valid bill amount.");
    if(billAmount <= 0) showErorMsg("Bill amount should be greater than 0");
}

function validateCashGiven(cashGiven) {
    if(!Number.isInteger(cashGiven)) showErorMsg("Enter valid cash given amount.");
    if(cashGiven <= 0) showErorMsg("Cash given amount should be greater than 0");
}

function handleCheckBtn() {
    hideErorMsg();

    let billAmount = parseInt(billAmountInput.value);
    let cashGiven = parseInt(cashGivenInput.value);

    validateBillAmount(billAmount);
    validateCashGiven(cashGiven);

    let cashToBeReturn = cashGiven - billAmount;

    if((cashGiven > 0) && (billAmount > 0) && (cashGiven < billAmount)) showErorMsg("Cash is less than bill amount! wanna wash the plates?");
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
    document.querySelector('.cash-change').style.display = "inline-block";
    for(let i=0; i<availNotes.length; i++){
        let notesCount = Math.trunc(amountToBeReturn/availNotes[i]);
        numOfNotes[i].innerText = notesCount;
        let remainingAmount = amountToBeReturn % availNotes[i];
        amountToBeReturn = remainingAmount;
    }
}