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

    const totalAmount = mealAmount + tipAmount;

    document.getElementById('tipAmount').textContent = tipAmount.toFixed(2);
    document.getElementById('totalAmount').textContent = totalAmount.toFixed(2);
}

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