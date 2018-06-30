// import googleFinance from 'google-finance';
//
// googleFinance.companyNews({
//     symbol: 'NASDAQ:AAPL'
// }, function (err, news) {
//     console.log(news)
// });
//
// googleFinance.historical({
//     symbol: 'NASDAQ:AAPL',
//     from: '2014-01-01',
//     to: '2014-12-31'
// }, function (err, quotes) {
//     console.log(quotes)
//
// });


var yahooFinance = require('yahoo-finance');

yahooFinance.historical({
    symbol: 'AAPL',
    from: '2012-01-01',
    to: '2012-12-31',
    // period: 'd'  // 'd' (daily), 'w' (weekly), 'm' (monthly), 'v' (dividends only)
}, function (err, quotes) {
    //...
    console.table(quotes)
});

// This replaces the deprecated snapshot() API
yahooFinance.quote({
    symbol: 'AAPL',
    modules: [ 'price', 'summaryDetail' ] // see the docs for the full list
}, function (err, quotes) {
    // ...
    console.log(quotes)
});