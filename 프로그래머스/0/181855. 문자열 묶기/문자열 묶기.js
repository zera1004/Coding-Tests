function solution(strArr) {
    let result = [];
    let temp = 0;
    let num = 0;
    
    let arr = strArr.map(i => i.length).sort((a,b) => a - b);
    
    for (let i = 0; i < strArr.length; i++) {
        if(temp === arr[i]) {
            num++;
        }
        if(temp != arr[i]) {
            result.push(num);
            temp = arr[i];
            num = 1;
        }
    }
    result.push(num);
    return result.sort((a,b) => b - a)[0];
}