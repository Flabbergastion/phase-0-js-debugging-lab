function calculateDiscountedPrice(quantity, pricePerItem) {
    debugger
    let totalPrice = 1;
    debugger
    for (let i = 1; i < quantity; i++) {
        totalPrice += pricePerItem;
    }

    if (quantity >= 10) {
        totalPrice *= 0.9;
    }
debugger
    return totalPrice;
}



module.exports = calculateDiscountedPrice;