function solution(dots) {
    let x = 0;
    let y = 0;
    dots.sort((a,b) => b[0] - a[0]);
    x = Math.abs(dots[0][0] - dots[3][0]);
    dots.sort((a,b) => b[1] - a[1]);
    y = Math.abs(dots[0][1] - dots[3][1])
    return x * y
}