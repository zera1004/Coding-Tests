function solution(n) {
    let binary = '';
    let num = n;
    let binaryFilterLength = 0;
    while(num > 0) {
        let temp = String(num % 2);
        binary = temp + binary;
        num = Math.floor(num / 2);
    }
    binaryFilterLength = binary.split('').filter(j => j === '1').length
    for(let i = n + 1; ; i++) {
        let iBinary = '';
        let iNum = i;
        while(iNum > 0) {
            let temp = String(iNum % 2);
            iBinary = temp + iBinary;
            iNum = Math.floor(iNum / 2);
        }
        if( binaryFilterLength === iBinary.split('').filter(j => j === '1').length) {
            return i;
        }
    }
}