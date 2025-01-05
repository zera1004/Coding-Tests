function solution(arr) {
    let rc = 0;
    let num = 0;
    let result = arr.slice();
    if(arr.length > arr[0].length)  {
        rc = 1;
        num = arr.length - arr[0].length;
    }
    if(arr.length < arr[0].length)  {
        rc = 2;
        num = arr[0].length - arr.length;
    }
    if(rc === 1) {
        for(let i = 0; i < arr.length; i++) {
            for(let j = 0; j < num; j++) {
                result[i].push(0);
            }
        }
    }
    if(rc === 2) {
        for(let i = 0; i < num; i++) {
            let temp = [];
            for(let j = 0; j < arr[0].length; j++) {
                temp.push(0)
            }
            result.push(temp)
        }
    }
    return result
}