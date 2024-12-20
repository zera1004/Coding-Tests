function solution(myStr) {
    let result = [];
    let temp = '';
    myStr.split('').forEach(i => {
        if(i !== 'a' && i !== 'b' && i !== 'c') {
            temp += i;
        } else {
            if(temp !== '') {
            result.push(temp);
            temp = ''
            }
        }
    })
    
    if(temp !== '') result.push(temp);
    
    return result.length > 0 ? result : ["EMPTY"]
}