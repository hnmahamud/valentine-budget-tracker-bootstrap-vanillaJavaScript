function getInputFieldValueById(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    const inputFieldValue = parseFloat(inputField.value);
    inputField.value = '';
    return inputFieldValue;
}

function getTextFieldValueById(textFieldId) {
    const textField = document.getElementById(textFieldId);
    const textFieldValue = parseFloat(textField.innerText);
    return textFieldValue;
}

function setTextFieldValue(textFieldId, totalItemPrice) {
    const itemTextField = document.getElementById(textFieldId);
    itemTextField.innerText = totalItemPrice;
}

function getTotalItemPrice(quantity, price) {
    const itemQuantity = parseFloat(quantity);
    const itemPrice = parseFloat(price);
    const totalItemPrice = itemQuantity * itemPrice;
    return parseFloat(totalItemPrice);
}

function getTotalCost(totalItemPrice) {
    const totalCostTextField = document.getElementById('total');
    const totalCost = parseFloat(totalCostTextField.innerText);
    const updateTotalCost = totalCost + totalItemPrice;
    return updateTotalCost;
}

function calculateDiscount(userCode, mainCode, totalCost) {
    if (mainCode == userCode) {
        return totalCost - (totalCost * 0.1);
    }
    return totalCost;
}