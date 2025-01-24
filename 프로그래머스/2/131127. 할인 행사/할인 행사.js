function solution(want, number, discount) {
    let dic = {}
    let count = 0;
    let arr = []
    want.forEach((i,j) => {
        dic[i] = number[j]
    })
    discount.forEach(i => {
        let bool = true;
        let temp = '';
        arr.push(i)
        if(arr.length > 10) {
            temp = arr.shift();
            if(dic[temp] !== undefined) dic[temp] = dic[temp] + 1;
        }
        if(dic[i] !== undefined) dic[i] = dic[i] - 1;
        for(let i = 0; i < Object.values(dic).length; i++) {
            if(Object.values(dic)[i] > 0) {
                bool = false;
                break;
            }
        }
        if(bool === true) count++;
    })
    return count
}