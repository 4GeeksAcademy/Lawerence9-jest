let oneEuroIs = {
    "JPY": 156.5,
    "USD": 1.07,
    "GBP": 0.87
}

function fromEuroToDollar(euro) {
    return euro * oneEuroIs.USD;
}

function fromDollarToYen(dollar) {
    let euro = dollar / oneEuroIs.USD;
    return euro * oneEuroIs.JPY;
}

function fromYenToPound(yen) {
    let euro = yen / oneEuroIs.JPY;
    return euro * oneEuroIs.GBP;
}

module.exports = {fromDollarToYen, fromEuroToDollar, fromYenToPound}