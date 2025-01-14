function solution(arr) {
    let result = arr[0];
    for(let i = 1; i < arr.length; i++) {
        for(let j = result; j >= 1; j--) {
            if(result % j === 0 && arr[i] % j === 0) {
                result = result*arr[i]/j
                break;
            }
        }
    }
    return result;
}