// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
 
    var coins = {};
    if(currency <= 0) 
        return coins;

    if(currency > 10000) 
        return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    
    var coins = {
        "H" : 0,
        "Q" : 0,
        "D" : 0,
        "N" : 0,
        "P" : 0
    };

    const H = 50; // half-dollars
    const Q = 25; // quarters
    const D = 10; // dimes
    const N = 5;  // nickels
    const P = 1;  // pennies

    if(currency % H == 0 || currency > H){
        coins.H = Math.floor(currency / H);
    }

    if( currency - coins.H * H > 0 && (currency - coins.H * H) % Q == 0 || currency - coins.H * H > Q){
        coins.Q = Math.floor( (currency - coins.H * H) / Q );
    }

    if( currency - coins.H * H - coins.Q * Q > 0 && 
        (currency - coins.H * H - coins.Q * Q) % D == 0 ||
        currency - coins.H * H - coins.Q * Q > D){
        coins.D = Math.floor( (currency - coins.H * H - coins.Q * Q) / D );
        isD_Added = true;
    }

    if( currency - coins.H * H - coins.Q * Q - coins.D * D > 0 && 
        (currency - coins.H * H - coins.Q * Q - coins.D * D ) % N == 0 ||
        currency - coins.H * H - coins.Q * Q - coins.D * D  > N){
        coins.N = Math.floor( (currency - coins.H * H - coins.Q * Q - coins.D * D) / N );

    }

    if( currency - coins.H * H - coins.Q * Q - coins.D * D - coins.N * N > 0 && 
        (currency - coins.H * H - coins.Q * Q - coins.D * D - coins.N * N ) % P == 0 ||
        currency - coins.H * H - coins.Q * Q - coins.D * D - coins.N * N   > P){
        coins.P = Math.floor( (currency - coins.H * H - coins.Q * Q - coins.D * D - coins.N * N) / P );
    }

   
    for (const key in coins) {
        if( coins[key] == 0) delete coins[key];
    }

    return coins;

}