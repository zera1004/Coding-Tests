function solution(arr, flag) {
    let result = [];
    flag.forEach((i,j) => {
        if(i === true) {
            for(let k = 0; k < arr[j]*2; k++) {
                result.push(arr[j])
            }
        }
        if(i === false) {
            result = result.slice(0,-arr[j])
        }
    })
    
    return result.map(i => +i);
}