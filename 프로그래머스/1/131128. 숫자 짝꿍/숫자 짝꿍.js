function solution(X, Y) {
    X = X.split('');
    Y = Y.split('');
    let countX = Array(10).fill(0);
    let countY = Array(10).fill(0);
    let result = Array(10).fill(0);
    
    X.forEach(i => {
        countX[i]++;
    })
    
    Y.forEach(i => {
        countY[i]++;
    })
    
    for (let i = 0 ; i <= 9; i++) {
        if (countX[i] > countY[i]) result[i] = countY[i];
        else result[i] = countX[i];
    }
    
    result = result.map((i,j) => String(j).repeat(i)).reverse().join('')
    
    return result > 0 ? result : result.length === 0 ? '-1': '0'
}