function solution(balls, share) {
    let nF = 1;
    let mF = 1;
    let nmF = 1;
    for(let i = 1; i < balls + 1; i++) {
        nF = (nF * i).toFixed(0);
        if(i < share + 1) mF = (mF * i).toFixed(0);
        if(i < (balls - share) + 1) nmF = (nmF * i).toFixed(0);
    }
    return +(nF / (nmF * mF)).toFixed(0);
}