const {fromDollarToYen, fromEuroToDollar, fromYenToPound} = require('./app.js');

test('1.07 dollar equals 156.5 yen',() => {
    let howYens = fromDollarToYen(1.07);
    expect(howYens).toBe(156.5);
})

test('1 euro equals 1.07 dollar',() => {
    let howDollars = fromEuroToDollar(1);
    expect(howDollars).toBe(1.07);
})

test('156.5 yen equals 0.87 pounds',() => {
    let howYen = fromYenToPound(156.5);
    expect(howYen).toBe(0.87);
})