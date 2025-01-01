function solution(num) {
    let result = 0;
    while (num > 1) {
        switch(num % 2) {
            case 0:
                num /= 2;
                result++
                break;
            case 1:
                num = num * 3 + 1;
                result++
                break;
        }
    }
    return result <= 500? result: -1;
}