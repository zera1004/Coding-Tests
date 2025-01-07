function solution(code) {
    let mode = 0;
    let result = [];
    
    for(let i = 0; i < code.length; i++) {
        if(mode === 0) {
            if(code[i] === '1') mode = 1;
            else {
                if(i % 2 === 0) result.push(code[i])
            }
        } else if(mode === 1) {
            if(code[i] === '1') mode = 0;
            else {
                if(i % 2 === 1) result.push(code[i])
            }
        }
    }
    return result.length === 0? "EMPTY": result.join('');
}