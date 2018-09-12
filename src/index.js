// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // {"H":1,"Q":1,"D":1,"N":1,"P":1}
    let deal = {};
    const [HALF_DOLLAR,QUARTER,DIME,NICKEL,PENNIE]=[50,25,10,5,1];
    const getQuantityCoins = (coin)=>{
        let res = currency/coin;
        let int = Math.floor(res);
        currency = Math.round((res - int) * coin);
        return (res > 0) ? int : 0;
    };
    if(currency > 10000){
        deal.error = "You are rich, my friend! We don't have so much coins for exchange";
    }else{
        let h = getQuantityCoins(HALF_DOLLAR);
        let q = getQuantityCoins(QUARTER);
        let d = getQuantityCoins(DIME);
        let n = getQuantityCoins(NICKEL);
        let p = getQuantityCoins(PENNIE);
        if(h !== 0){ deal.H = h; };
        if(q !== 0){ deal.Q = q; };
        if(d !== 0){ deal.D = d; };
        if(n !== 0){ deal.N = n; };
        if(p !== 0){ deal.P = p; };
    }
    return deal;
}
