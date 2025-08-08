function calculateDiscountedPrice(quantity, pricePerItem) {
    debugger
    let totalPrice = 0;
    debugger
    for (let i = 0; i < quantity; i++) {
        totalPrice += pricePerItem;
    }

    if (quantity >= 10) {
        totalPrice *= 0.9;
    }
debugger
    return totalPrice;
}



module.exports = calculateDiscountedPrice;