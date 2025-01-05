function solution(chicken) {
    let coupon = 0;
    for(let i = 1; i <= chicken; i++) {
        coupon++;
        if(coupon % 10 === 0) chicken++;
    }
    return parseInt(coupon/10)
}