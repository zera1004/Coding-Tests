function solution(n, left, right) {
    let result = [];
    let startPoint = parseInt(left / n)
    let count = startPoint * n;
    let breakNow = false;
    for(let i = startPoint + 1; i <= n; i++) {
        let num = i;
        for(let j = 1; j <= n; j++) {
            result.push(num)
            count++;
            if(num < n && num <= j) num++
            if(count === right + 1) {
                breakNow = true;
                break;
            }
        }
        if(breakNow === true) break;
    }
    return result.slice(left - startPoint * n);
}