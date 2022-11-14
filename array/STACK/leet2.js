function profitmax(prices) {
    let min = prices[0];
    let max = prices[0];
    let profit = 0;
    let maxprofit = 0;
    for (let i = 1; i <= prices.length; i++) {

        if (prices[i] < min) {
            min = prices[i];
            max = prices[i];
        }
        if (prices[i] > max) {
            max = prices[i];
        }
        profit = max - min;
        if (maxprofit < profit) {
            maxprofit = profit;
        }
    }
    // return maxprofit;
    console.log(maxprofit);

}
profitmax([7, 1, 5, 3, 6, 4]);