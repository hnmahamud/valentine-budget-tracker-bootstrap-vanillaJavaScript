const kitkatBuyBtn = document.getElementById('kitkat-buy-btn');
kitkatBuyBtn.addEventListener('click', function () {
    const kitkatQuantity = getInputFieldValueById('kitkat-quantity');
    const totalItemPrice = getTotalItemPrice(kitkatQuantity, 200)

    setTextFieldValue('chocolate', totalItemPrice);
    const totalCost = getTotalCost(totalItemPrice);
    setTextFieldValue('total', totalCost);
});

const roseBuyBtn = document.getElementById('rose-buy-btn');
roseBuyBtn.addEventListener('click', function () {
    const roseQuantity = getInputFieldValueById('rose-quantity');
    const totalItemPrice = getTotalItemPrice(roseQuantity, 100)

    setTextFieldValue('rose', totalItemPrice);
    const totalCost = getTotalCost(totalItemPrice);
    setTextFieldValue('total', totalCost);
});

const diaryBuyBtn = document.getElementById('diary-buy-btn');
diaryBuyBtn.addEventListener('click', function () {
    const diaryQuantity = getInputFieldValueById('diary-quantity');
    const totalItemPrice = getTotalItemPrice(diaryQuantity, 100)

    setTextFieldValue('diary', totalItemPrice);
    const totalCost = getTotalCost(totalItemPrice);
    setTextFieldValue('total', totalCost);
});

const applyPromo = document.getElementById('apply-promo');
applyPromo.addEventListener('click', function () {
    const givenPromoCode = getInputFieldValueById('promo-code');
    const totalCost = getTextFieldValueById('total');
    const mainCode = '101';
    const updateTotalCost = calculateDiscount(givenPromoCode, mainCode, totalCost);
    if (updateTotalCost == totalCost) {
        setTextFieldValue('all-total', updateTotalCost);
        alert('Invalid Promo Code!')
    }
    else {
        setTextFieldValue('all-total', updateTotalCost);
    }
});