function solution(arr) {
    let temp = 1;
    while(true) {
        if(arr.length <= temp) {
            break;
        }
        temp *= 2;
    }
    let num = temp - arr.length;
    for(let i = 0; i < num; i++) {
        arr.push(0)
    }
    return arr
}