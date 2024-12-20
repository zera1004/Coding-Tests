function solution(array, n) {
    let temp = array.map((i,j) => {
        if (n > i) return [n - i, j];
        return [i - n, j];
    }).sort((a,b) => a[0] - b[0]);
    
    let num = temp[0][0];
    
    let temp2 = temp.filter(i => i[0] === num);
    
    let result = temp2.map((i,j) => array[i[1]]).sort((a,b) => a - b)[0]
    
    return result;    
}