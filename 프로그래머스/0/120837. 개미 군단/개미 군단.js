function solution(hp) {
    let result = 0;
    if(hp>=5) {
        result += Math.floor(hp / 5);
        hp %= 5
    }
    if(hp>=3) {
        result += Math.floor(hp / 3);
        hp %= 3
    }
    if (hp>=1) {
        result += hp / 1;
    }
    return result
}