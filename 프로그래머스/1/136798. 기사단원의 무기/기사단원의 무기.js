function solution(number, limit, power) {
    let result = 0;
    for (let i = 1; i <= number; i++) {
        let temp = 0;
        for (let j = 1; j**2 <= i; j++){
            if(i % j == 0) {
                temp++;
                if(i/j != j ) temp++;
            }
        }
        if (temp > limit) result += power;
        else result+=temp;
    }
    return result;
}