// ABOUTME: This file contains the main logic for the tipping calculator application.
// ABOUTME: It handles user input, calculates the tip and total amount, and updates the UI accordingly.
// ABOUTME: It also includes functionality to round up the total amount to the nearest even number.
let shouldRoundUp = false;

function calculateTip() {
    const mealAmount = parseFloat(document.getElementById('mealAmount').value) || 0;
    const tipPercentage = document.getElementById('tipPercentage').value;
    let tipAmount;

    if (tipPercentage === 'custom') {
        const customTip = parseFloat(document.getElementById('customTip').value) || 0;
        tipAmount = mealAmount * (customTip / 100);
    } else {
        tipAmount = mealAmount * parseFloat(tipPercentage);
    }

    let totalAmount = mealAmount + tipAmount;

    if (shouldRoundUp) {
        totalAmount = roundUpToNearestEven(totalAmount);
        tipAmount = totalAmount - mealAmount;
    }

    document.getElementById('tipAmount').textContent = tipAmount.toFixed(2);
    document.getElementById('totalAmount').textContent = totalAmount.toFixed(2);
}

function roundUpToNearestEven(amount) {
    const remainder = amount % 2;
    if (remainder === 0) {
        return amount;
    }
    return amount + (2 - remainder);
}

document.getElementById('roundUpButton').addEventListener('click', function() {
    shouldRoundUp = !shouldRoundUp;
    this.textContent = shouldRoundUp ? 'Cancel Round Up' : 'Round Up';
    calculateTip();
});


document.getElementById('mealAmount').addEventListener('input', calculateTip);
document.getElementById('tipPercentage').addEventListener('change', function() {
    const customTipContainer = document.getElementById('customTipContainer');
    if (this.value === 'custom') {
        customTipContainer.style.display = 'block';
    } else {
        customTipContainer.style.display = 'none';
    }
    calculateTip();
});
document.getElementById('customTip').addEventListener('input', calculateTip);