function solution(bin1, bin2) {
    let temp1 = bin1.split('').reverse();
    let temp2 = bin2.split('').reverse();
    let result = [];
    let temp3 = 0;
    
    for (let i = 0; temp1.length > temp2.length? i < temp1.length: i < temp2.length; i++) {
        if(temp1[i] === undefined) temp1[i] = 0;
        if(temp2[i] === undefined) temp2[i] = 0;
        switch(+temp1[i] + +temp2[i] + +temp3) {
            case 0:
                result.push('0');
                break;
            case 1:
                result.push('1');
                if(temp3 === 1) temp3 = 0;
                break;
            case 2:
                result.push('0');
                temp3 = 1;
                break;
            case 3:
                result.push('1');
                temp3 = 1;
                break;
        }
    }
    if(temp3) result.push(String(temp3));
    return result.reverse().join('');
}