function solution(a, b, c, d) {
    if (a === b && b === c && c === d) return 1111 * a
    
    let arr = [a, b, c, d].sort((a,b) => a -b)
    if (arr[0] === arr[1] && arr[1] === arr[2] && arr[2] !== arr[3]) return (10 * arr[0] + arr[3])**2
    if (arr[0] !== arr[1] && arr[1] === arr[2] && arr[2] === arr[3]) return (10 * arr[3] + arr[0])**2
    
    if (arr[0] === arr[1] && arr[1] !== arr[2] && arr[2] === arr[3]) return (arr[0] + arr[3]) * Math.abs(arr[0] - arr[3])
    
    let temp = 0;
    let num = 0;
    arr.forEach((i,j) => {
        if(temp === i) {
            num = j
        }
        if(!num) {
            temp = i;
        }
    })
    if(num) return arr[0] * arr[1] * arr[2] * arr[3] / (arr[num]**2)
    
    return arr[0]
}